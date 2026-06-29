# ============================================================
# Shri Shiv Enterprises — Complete Backend v2
# Orders + Notifications + Invoice + Auth
# ============================================================
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import smtplib, json, os, datetime, requests, hashlib, secrets
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)

# ---- CONFIG ----
BASE_DIR       = os.path.dirname(os.path.abspath(__file__))
ORDERS_FILE    = os.path.join(BASE_DIR, "orders_log.json")
USERS_FILE     = os.path.join(BASE_DIR, "users.json")
INVOICES_DIR   = os.path.join(BASE_DIR, "invoices")
os.makedirs(INVOICES_DIR, exist_ok=True)

OWNER_EMAIL    = os.environ.get("OWNER_EMAIL",  "shrishiventerprises2025@gmail.com")
GMAIL_USER     = os.environ.get("GMAIL_USER",   "")
GMAIL_PASS     = os.environ.get("GMAIL_PASS",   "")
OWNER_PHONE    = os.environ.get("OWNER_WA",     "+916393539533")
TWILIO_SID     = os.environ.get("TWILIO_SID",   "")
TWILIO_TOKEN   = os.environ.get("TWILIO_TOKEN", "")
TWILIO_FROM    = os.environ.get("TWILIO_FROM",  "whatsapp:+14155238886")
GSHEET_URL     = os.environ.get("GSHEET_URL",   "")

# ---- Invoice Generator ----
import sys
sys.path.insert(0, BASE_DIR)
try:
    from invoice_generator import generate_invoice
    INVOICE_OK = True
except Exception as e:
    INVOICE_OK = False
    print(f"Invoice load error: {e}")

# ============================================================
# HELPERS
# ============================================================
def load_json(path, default=[]):
    try:
        if os.path.exists(path):
            with open(path) as f: return json.load(f)
    except: pass
    return default

def save_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def next_order_id():
    orders = load_json(ORDERS_FILE)
    return f"SSE{len(orders)+1:04d}"

def send_whatsapp(to_phone, message):
    if not TWILIO_SID or not TWILIO_TOKEN:
        print(f"[WhatsApp SKIP] Twilio not configured"); return False
    phone = to_phone.strip().replace(" ","").replace("-","")
    if not phone.startswith("+"): phone = "+91" + phone.lstrip("0")
    try:
        r = requests.post(
            f"https://api.twilio.com/2010-04-01/Accounts/{TWILIO_SID}/Messages.json",
            data={"From": TWILIO_FROM, "To": f"whatsapp:{phone}", "Body": message},
            auth=(TWILIO_SID, TWILIO_TOKEN), timeout=10
        )
        ok = r.status_code in [200,201]
        print(f"[WhatsApp {'OK' if ok else 'FAIL'}] {phone}: {r.status_code}")
        return ok
    except Exception as e:
        print(f"[WhatsApp ERROR] {e}"); return False

def send_email(to_addr, subject, html, text=""):
    if not GMAIL_USER or not GMAIL_PASS:
        print(f"[Email SKIP] Gmail not configured"); return False
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"]    = GMAIL_USER
        msg["To"]      = to_addr
        msg.attach(MIMEText(text or subject, "plain"))
        msg.attach(MIMEText(html, "html"))
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as s:
            s.login(GMAIL_USER, GMAIL_PASS)
            s.sendmail(GMAIL_USER, to_addr, msg.as_string())
        print(f"[Email OK] {to_addr}")
        return True
    except Exception as e:
        print(f"[Email ERROR] {e}"); return False

def push_to_gsheet(data):
    if not GSHEET_URL: return False
    try:
        requests.post(GSHEET_URL, json=data, timeout=10)
        return True
    except: return False

# ============================================================
# HEALTH
# ============================================================
@app.route("/health")
def health():
    return jsonify({"status":"ok","service":"Shri Shiv Enterprises Backend v2"})

# ============================================================
# ROUTE 1 — PLACE ORDER
# ============================================================
@app.route("/api/order", methods=["POST"])
def place_order():
    d = request.json or {}
    ts       = datetime.datetime.now().strftime("%d %b %Y, %I:%M %p")
    order_id = next_order_id()

    items    = d.get("items", [])
    subtotal = d.get("subtotal", 0)
    gst      = d.get("gst", 0)
    shipping = d.get("shipping", 0)
    total    = d.get("total", subtotal + gst + shipping)

    # Save to log
    order = {
        "order_id":  order_id,
        "type":      "order",
        "name":      d.get("name",""),
        "phone":     d.get("phone",""),
        "email":     d.get("email",""),
        "address":   d.get("address",""),
        "city":      d.get("city",""),
        "pincode":   d.get("pincode",""),
        "payment":   d.get("payment",""),
        "items":     items,
        "subtotal":  subtotal,
        "gst":       gst,
        "shipping":  shipping,
        "total":     total,
        "timestamp": datetime.datetime.now().isoformat(),
        "status":    "New"
    }
    orders = load_json(ORDERS_FILE)
    orders.append(order)
    save_json(ORDERS_FILE, orders)

    # Auto-generate invoice
    inv_path = None
    if INVOICE_OK:
        try:
            inv_path = generate_invoice(order)
        except Exception as e:
            print(f"[Invoice ERROR] {e}")

    items_text = "\n".join([f"  • {i.get('name','')} x{i.get('qty',1)} = ₹{i.get('price',0)*i.get('qty',1)}" for i in items])
    items_html = "".join([f"<tr><td style='padding:8px 12px;border-bottom:1px solid #e5e7eb;'>{i.get('name','')}</td><td style='padding:8px 12px;text-align:center;border-bottom:1px solid #e5e7eb;'>x{i.get('qty',1)}</td><td style='padding:8px 12px;text-align:right;font-weight:700;border-bottom:1px solid #e5e7eb;'>₹{i.get('price',0)*i.get('qty',1)}</td></tr>" for i in items])

    # ---- Notify OWNER ----
    owner_wa = (
        f"🛒 *NEW ORDER — Shri Shiv Enterprises*\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"🆔 *Order ID:* {order_id}\n"
        f"👤 *Customer:* {d.get('name','')}\n"
        f"📞 *Phone:* {d.get('phone','')}\n"
        f"📍 *City:* {d.get('city','')}, PIN {d.get('pincode','')}\n"
        f"💳 *Payment:* {d.get('payment','')}\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"📦 *Items:*\n{items_text}\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"💰 *Total: ₹{total}*\n"
        f"🕐 {ts}\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"Invoice: https://08veehst04-5050.hosted.obvious.ai/api/invoice/{order_id}"
    )
    send_whatsapp(OWNER_PHONE, owner_wa)

    owner_email_html = f"""<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#243B6B;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
        <h2 style="color:#F4C542;margin:0;">🛒 New Order — {order_id}</h2>
        <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;">Shri Shiv Enterprises</p>
      </div>
      <div style="background:#fff;padding:24px;border:1px solid #e5e7eb;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:8px 0;color:#6b7280;width:120px;">Order ID</td><td style="font-weight:700;color:#243B6B;">{order_id}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Customer</td><td style="font-weight:600;">{d.get('name','')}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td><a href="tel:{d.get('phone','')}">{d.get('phone','')}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Address</td><td>{d.get('address','')}, {d.get('city','')}, {d.get('pincode','')}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Payment</td><td>{d.get('payment','')}</td></tr>
        </table>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:#f3f4f6;"><th style="padding:10px 12px;text-align:left;">Product</th><th style="padding:10px 12px;text-align:center;">Qty</th><th style="padding:10px 12px;text-align:right;">Amount</th></tr>
          {items_html}
          <tr style="background:#243B6B;"><td colspan="2" style="padding:12px;color:#fff;font-weight:700;">Grand Total</td><td style="padding:12px;color:#F4C542;font-weight:800;text-align:right;">₹{total}</td></tr>
        </table>
        <div style="margin-top:16px;text-align:center;">
          <a href="https://08veehst04-5050.hosted.obvious.ai/api/invoice/{order_id}" style="background:#243B6B;color:#fff;padding:10px 24px;border-radius:50px;text-decoration:none;font-weight:700;">🧾 Download Invoice</a>
        </div>
      </div>
    </div>"""
    send_email(OWNER_EMAIL, f"🛒 New Order {order_id} — ₹{total} from {d.get('name','')}", owner_email_html)
    push_to_gsheet(order)

    # ---- Notify CUSTOMER ----
    cust_wa = (
        f"✅ *Order Confirmed!*\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"Namaste *{d.get('name','')}* ji! 🙏\n\n"
        f"Aapka order place ho gaya hai.\n\n"
        f"🆔 *Order ID:* {order_id}\n"
        f"💰 *Total:* ₹{total}\n"
        f"💳 *Payment:* {d.get('payment','')}\n\n"
        f"📦 *Items:*\n{items_text}\n\n"
        f"━━━━━━━━━━━━━━━━━━\n"
        f"📥 Invoice download karein:\nhttps://08veehst04-5050.hosted.obvious.ai/api/invoice/{order_id}\n\n"
        f"📞 Help: +91 6393539533\n"
        f"Shri Shiv Enterprises 🙏"
    )
    send_whatsapp(d.get("phone",""), cust_wa)

    cust_email_html = f"""<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#243B6B;padding:28px;border-radius:12px 12px 0 0;text-align:center;">
        <h1 style="color:#F4C542;margin:0;">✅ Order Confirmed!</h1>
        <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Shri Shiv Enterprises</p>
      </div>
      <div style="background:#fff;padding:28px;border:1px solid #e5e7eb;">
        <p style="font-size:16px;">Namaste <strong>{d.get('name','')} ji!</strong> 🙏</p>
        <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:14px;margin:16px 0;">
          <p style="margin:0;color:#16a34a;font-weight:700;">Order ID: {order_id} &nbsp;|&nbsp; Total: ₹{total}</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:#f3f4f6;"><th style="padding:10px;text-align:left;">Product</th><th style="padding:10px;text-align:center;">Qty</th><th style="padding:10px;text-align:right;">Amount</th></tr>
          {items_html}
          <tr style="background:#243B6B;"><td colspan="2" style="padding:12px;color:#fff;font-weight:700;">Grand Total</td><td style="padding:12px;color:#F4C542;font-weight:800;text-align:right;">₹{total}</td></tr>
        </table>
        <div style="text-align:center;margin-top:24px;">
          <a href="https://08veehst04-5050.hosted.obvious.ai/api/invoice/{order_id}" style="background:#243B6B;color:#fff;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:700;display:inline-block;">🧾 Invoice Download Karein</a>
        </div>
      </div>
      <div style="background:#243B6B;padding:16px;border-radius:0 0 12px 12px;text-align:center;">
        <p style="color:#F4C542;margin:0;font-weight:700;">Shri Shiv Enterprises</p>
        <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:12px;">📞 +91 6393539533 | Kanpur, UP</p>
      </div>
    </div>"""
    if d.get("email"):
        send_email(d.get("email"), f"✅ Order Confirmed {order_id} — Shri Shiv Enterprises", cust_email_html)

    return jsonify({
        "success":     True,
        "order_id":    order_id,
        "invoice_url": f"/api/invoice/{order_id}",
        "message":     "Order placed successfully"
    })

# ============================================================
# ROUTE 2 — INVOICE DOWNLOAD
# ============================================================
@app.route("/api/invoice/<order_id>", methods=["GET"])
def download_invoice(order_id):
    # Check cached invoice first
    inv_path = os.path.join(INVOICES_DIR, f"Invoice_{order_id}.pdf")

    if not os.path.exists(inv_path):
        # Try to generate from order log
        orders = load_json(ORDERS_FILE)
        order  = next((o for o in orders if o.get("order_id") == order_id), None)
        if not order:
            return jsonify({"error": f"Order {order_id} not found"}), 404
        if not INVOICE_OK:
            return jsonify({"error": "Invoice generator unavailable"}), 503
        try:
            inv_path = generate_invoice(order, inv_path)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return send_file(
        inv_path,
        as_attachment=True,
        download_name=f"Invoice_{order_id}_ShriShivEnterprises.pdf",
        mimetype="application/pdf"
    )

# Quick test invoice (no order needed)
@app.route("/api/invoice/test", methods=["GET"])
def test_invoice():
    sample = {
        "order_id":  "TEST001",
        "name":      "Test Customer",
        "phone":     "+91 9876543210",
        "email":     "test@email.com",
        "address":   "12, Gandhi Nagar",
        "city":      "Kanpur",
        "pincode":   "208001",
        "payment":   "UPI",
        "items":     [
            {"name": "Piyus Series Notebook", "spec": "20×14cm, 200pp", "qty": 20, "price": 45},
            {"name": "Vaishnavi Notebook",     "spec": "20×14cm, 200pp", "qty": 10, "price": 48},
            {"name": "Anshika A4 Notebook",   "spec": "A4, 140pp, 70GSM","qty": 5,  "price": 75},
        ],
        "subtotal":  1725,
        "gst":       311,
        "shipping":  0,
        "total":     2036,
        "timestamp": datetime.datetime.now().isoformat()
    }
    if not INVOICE_OK:
        return jsonify({"error": "ReportLab not available"}), 503
    try:
        path = generate_invoice(sample)
        return send_file(path, as_attachment=True,
                        download_name="Invoice_TEST_ShriShivEnterprises.pdf",
                        mimetype="application/pdf")
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ============================================================
# ROUTE 3 — BULK ENQUIRY
# ============================================================
@app.route("/api/bulk-enquiry", methods=["POST"])
def bulk_enquiry():
    d  = request.json or {}
    ts = datetime.datetime.now().strftime("%d %b %Y, %I:%M %p")
    entry = {"type":"bulk_enquiry","timestamp":datetime.datetime.now().isoformat(), **d}
    orders = load_json(ORDERS_FILE); orders.append(entry); save_json(ORDERS_FILE, orders)

    wa = (f"📦 *BULK ENQUIRY — Shri Shiv Enterprises*\n━━━━━━━━━━━━━━━━━━\n"
          f"🏢 *Company:* {d.get('company','')}\n👤 *Contact:* {d.get('contact','')}\n"
          f"📞 *Phone:* {d.get('phone','')}\n📧 *Email:* {d.get('email','')}\n"
          f"📦 *Product:* {d.get('product','')}\n🔢 *Qty:* {d.get('quantity','')}\n"
          f"📍 *City:* {d.get('city','')}\n📝 *Notes:* {d.get('notes','—')}\n🕐 {ts}")
    send_whatsapp(OWNER_PHONE, wa)

    cust_wa = (f"📦 *Bulk Enquiry Mili!*\nNamaste *{d.get('contact','')}* ji! 🙏\n\n"
               f"Aapki bulk enquiry hume mil gayi hai.\n"
               f"Hum 2 ghante mein aapse contact karenge.\n\n"
               f"📞 {OWNER_PHONE}\nShri Shiv Enterprises 🙏")
    send_whatsapp(d.get("phone",""), cust_wa)
    push_to_gsheet(entry)
    return jsonify({"success":True,"message":"Enquiry mili! 2 ghante mein call karenge."})

# ============================================================
# ROUTE 4 — CONTACT FORM
# ============================================================
@app.route("/api/contact", methods=["POST"])
def contact_form():
    d  = request.json or {}
    ts = datetime.datetime.now().strftime("%d %b %Y, %I:%M %p")
    entry = {"type":"contact","timestamp":datetime.datetime.now().isoformat(), **d}
    orders = load_json(ORDERS_FILE); orders.append(entry); save_json(ORDERS_FILE, orders)

    wa = (f"📩 *CONTACT FORM*\n━━━━━━━━━━━━━━━━━━\n"
          f"👤 {d.get('name','')} | 📞 {d.get('phone','')}\n"
          f"📋 {d.get('subject','')}\n💬 {d.get('message','')}\n🕐 {ts}")
    send_whatsapp(OWNER_PHONE, wa)

    cust_wa = (f"✅ *Message Mila!*\nNamaste *{d.get('name','')}* ji! 🙏\n\n"
               f"Aapka message hume mil gaya. Hum 24 ghante mein reply karenge.\n\n"
               f"📞 +91 6393539533\nShri Shiv Enterprises 🙏")
    send_whatsapp(d.get("phone",""), cust_wa)
    return jsonify({"success":True,"message":"Message bhej diya! 24 ghante mein reply karenge."})

# ============================================================
# ROUTE 5 — VIEW ORDERS
# ============================================================
@app.route("/api/orders", methods=["GET"])
def get_orders():
    orders = load_json(ORDERS_FILE)
    return jsonify({"orders": orders, "total": len(orders)})

# ============================================================
# AUTH — Signup / Login / Verify
# ============================================================
def hash_pw(pw): return hashlib.sha256(pw.encode()).hexdigest()

@app.route("/api/auth/signup", methods=["POST"])
def signup():
    d = request.json or {}
    users = load_json(USERS_FILE)
    email = d.get("email","").lower().strip()
    phone = d.get("phone","").strip().replace(" ","")
    if not phone and not email:
        return jsonify({"success":False,"message":"Phone ya email zaroor daalein"}), 400
    if any((u.get("email") and u["email"]==email) or (u.get("phone") and u["phone"]==phone) for u in users):
        return jsonify({"success":False,"message":"Yeh account pehle se hai. Login karein."}), 409
    token = secrets.token_hex(32)
    user  = {"id":f"USR{len(users)+1:04d}","name":d.get("name",""),"email":email,"phone":phone,
             "password":hash_pw(d.get("password","")),"token":token,
             "created":datetime.datetime.now().isoformat()}
    users.append(user); save_json(USERS_FILE, users)
    send_whatsapp(phone, f"🎉 *Welcome to Shri Shiv Enterprises!*\nNamaste *{d.get('name','')}* ji! 🙏\n\nAapka account ban gaya hai.\nWebsite: https://08veehst04-8080.hosted.obvious.ai\n📞 Help: +91 6393539533")
    return jsonify({"success":True,"token":token,
                    "user":{"id":user["id"],"name":user["name"],"email":email,"phone":phone},
                    "message":f"Account ban gaya! Welcome {d.get('name','')} ji 🎉"})

@app.route("/api/auth/login", methods=["POST"])
def login():
    d = request.json or {}
    users = load_json(USERS_FILE)
    iden  = d.get("identifier","").lower().strip().replace(" ","")
    phash = hash_pw(d.get("password",""))
    user  = next((u for u in users if (u.get("email")==iden or u.get("phone")==iden or u.get("phone","").replace("+91","")==iden.replace("+91","")) and u.get("password")==phash), None)
    if not user:
        return jsonify({"success":False,"message":"Phone/Email ya password galat hai"}), 401
    token = secrets.token_hex(32)
    user["token"] = token; save_json(USERS_FILE, users)
    return jsonify({"success":True,"token":token,
                    "user":{"id":user["id"],"name":user["name"],"email":user.get("email",""),"phone":user.get("phone","")},
                    "message":f"Welcome back {user['name']} ji! 🙏"})

@app.route("/api/auth/verify", methods=["POST"])
def verify():
    d = request.json or {}
    users = load_json(USERS_FILE)
    user  = next((u for u in users if u.get("token")==d.get("token","")), None)
    if not user:
        return jsonify({"success":False,"message":"Session expire. Login karein."}), 401
    return jsonify({"success":True,"user":{"id":user["id"],"name":user["name"],"email":user.get("email",""),"phone":user.get("phone","")}})

# ============================================================
if __name__ == "__main__":
    print("🚀 Backend v2 on port 5050")
    app.run(host="0.0.0.0", port=5050, debug=False)

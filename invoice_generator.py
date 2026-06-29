# ============================================================
# Shri Shiv Enterprises — GST Invoice Generator
# Creates professional PDF invoices for every order
# ============================================================

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm, cm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_RIGHT, TA_LEFT
from reportlab.pdfgen import canvas
import os, json, datetime

# Brand Colors
NAVY   = colors.HexColor("#243B6B")
GOLD   = colors.HexColor("#F4C542")
WHITE  = colors.white
LIGHT  = colors.HexColor("#f8f9fc")
GRAY   = colors.HexColor("#6b7280")
BORDER = colors.HexColor("#e5e7eb")
GREEN  = colors.HexColor("#16a34a")

COMPANY = {
    "name":    "Shri Shiv Enterprises",
    "tagline": "Manufacturer & Wholesaler of Premium Notebooks & Stationery",
    "address": "41/1 Bajrang Vihar, Khadepur, Kanpur, Uttar Pradesh - 208021",
    "phone":   "+91 6393539533 | +91 9839930333",
    "email":   "shrishiventerprises2025@gmail.com",
    "gstin":   "09BYUPP5969E2ZF",   # Shri Shiv Enterprises GSTIN
    "state":   "Uttar Pradesh (09)",
    "bank":    "State Bank of India",
    "acc":     "XXXX XXXX XXXX",
    "ifsc":    "SBIN0XXXXXX",
}

def generate_invoice(order_data, output_path=None):
    """
    order_data = {
      "order_id": "SSE0001",
      "name": "Customer Name",
      "phone": "+91 XXXXXXXXXX",
      "email": "customer@email.com",
      "address": "Full address",
      "city": "Lucknow",
      "pincode": "226001",
      "payment": "UPI",
      "items": [
        {"name": "Piyus Notebook", "qty": 10, "price": 45}
      ],
      "subtotal": 450,
      "gst": 81,
      "shipping": 0,
      "total": 531,
      "timestamp": "2026-06-29T12:00:00"
    }
    """
    order_id   = order_data.get("order_id", "SSE0001")
    ts         = order_data.get("timestamp", datetime.datetime.now().isoformat())
    try:
        dt = datetime.datetime.fromisoformat(ts)
    except:
        dt = datetime.datetime.now()
    date_str   = dt.strftime("%d %B %Y")
    time_str   = dt.strftime("%I:%M %p")

    if not output_path:
        os.makedirs("/home/user/work/shrishiv/invoices", exist_ok=True)
        output_path = f"/home/user/work/shrishiv/invoices/Invoice_{order_id}.pdf"

    # ---- Build PDF with canvas for full control ----
    c = canvas.Canvas(output_path, pagesize=A4)
    W, H = A4

    # ===== HEADER BACKGROUND =====
    c.setFillColor(NAVY)
    c.rect(0, H - 95*mm, W, 95*mm, fill=1, stroke=0)

    # Company Name
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(20*mm, H - 28*mm, "Shri Shiv Enterprises")

    c.setFillColor(GOLD)
    c.setFont("Helvetica", 10)
    c.drawString(20*mm, H - 36*mm, "Manufacturer & Wholesaler of Premium Notebooks & Stationery")

    c.setFillColor(colors.HexColor("#93c5fd"))
    c.setFont("Helvetica", 9)
    c.drawString(20*mm, H - 44*mm, "41/1 Bajrang Vihar, Khadepur, Kanpur, UP - 208021")
    c.drawString(20*mm, H - 51*mm, f"📞 {COMPANY['phone']}   ✉  {COMPANY['email']}")
    c.drawString(20*mm, H - 58*mm, f"GSTIN: {COMPANY['gstin']}   |   State: {COMPANY['state']}")

    # TAX INVOICE label
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 16)
    c.drawRightString(W - 20*mm, H - 28*mm, "TAX INVOICE")

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawRightString(W - 20*mm, H - 38*mm, f"Invoice No: {order_id}")
    c.setFont("Helvetica", 9)
    c.drawRightString(W - 20*mm, H - 46*mm, f"Date: {date_str}")
    c.drawRightString(W - 20*mm, H - 53*mm, f"Time: {time_str}")
    c.drawRightString(W - 20*mm, H - 60*mm, f"Payment: {order_data.get('payment','N/A')}")

    # Gold bar divider
    c.setFillColor(GOLD)
    c.rect(0, H - 98*mm, W, 4*mm, fill=1, stroke=0)

    # ===== BILL TO / SHIP TO =====
    y = H - 120*mm

    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(20*mm, y, "BILL TO:")

    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(20*mm, y - 8*mm, order_data.get("name", "N/A"))
    c.setFont("Helvetica", 10)
    c.setFillColor(GRAY)
    c.drawString(20*mm, y - 16*mm, f"📞 {order_data.get('phone','N/A')}")
    if order_data.get("email"):
        c.drawString(20*mm, y - 23*mm, f"✉  {order_data.get('email')}")
    addr = order_data.get("address","")
    city = order_data.get("city","")
    pin  = order_data.get("pincode","")
    c.drawString(20*mm, y - 30*mm, f"📍 {addr}, {city} - {pin}")

    # ===== ITEMS TABLE =====
    y2 = H - 172*mm

    # Table Header
    c.setFillColor(NAVY)
    c.rect(15*mm, y2, W - 30*mm, 8*mm, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 9)
    col_x = [17*mm, 87*mm, 127*mm, 152*mm, 172*mm]
    headers = ["PRODUCT NAME", "SIZE / SPEC", "QTY", "RATE (₹)", "AMOUNT (₹)"]
    for hx, ht in zip(col_x, headers):
        c.drawString(hx, y2 + 2*mm, ht)

    # Table Rows
    items = order_data.get("items", [])
    row_h = 9*mm
    for idx, item in enumerate(items):
        ry = y2 - (idx + 1) * row_h
        bg = LIGHT if idx % 2 == 0 else WHITE
        c.setFillColor(bg)
        c.rect(15*mm, ry, W - 30*mm, row_h, fill=1, stroke=0)
        c.setFillColor(colors.black)
        c.setFont("Helvetica-Bold", 9)
        # Truncate long names
        name = item.get("name", "")[:42]
        c.drawString(col_x[0], ry + 3*mm, name)
        c.setFont("Helvetica", 9)
        c.setFillColor(GRAY)
        spec = item.get("spec", item.get("size","") or "Standard")
        c.drawString(col_x[1], ry + 3*mm, str(spec)[:18])
        c.setFillColor(colors.black)
        c.drawString(col_x[2], ry + 3*mm, str(item.get("qty", 1)))
        c.drawString(col_x[3], ry + 3*mm, f"₹{item.get('price', 0)}")
        amt = item.get("qty",1) * item.get("price",0)
        c.setFont("Helvetica-Bold", 9)
        c.drawRightString(W - 18*mm, ry + 3*mm, f"₹{amt}")

    # Border around table
    table_h = (len(items) + 1) * row_h
    c.setStrokeColor(BORDER)
    c.rect(15*mm, y2 - len(items)*row_h, W - 30*mm, table_h, fill=0, stroke=1)

    # ===== TOTALS BOX =====
    tot_y = y2 - (len(items) + 2) * row_h - 5*mm

    subtotal = order_data.get("subtotal", 0)
    gst      = order_data.get("gst", 0)
    shipping = order_data.get("shipping", 0)
    total    = order_data.get("total", 0)

    def tot_row(label, val, bold=False, color=None):
        nonlocal tot_y
        if bold:
            c.setFillColor(NAVY)
            c.rect(W - 80*mm, tot_y - 2*mm, 65*mm, 9*mm, fill=1, stroke=0)
            c.setFillColor(GOLD)
            c.setFont("Helvetica-Bold", 11)
            c.drawString(W - 78*mm, tot_y + 1*mm, label)
            c.drawRightString(W - 18*mm, tot_y + 1*mm, val)
        else:
            c.setFillColor(colors.black if not color else color)
            c.setFont("Helvetica", 10)
            c.drawString(W - 78*mm, tot_y + 1*mm, label)
            c.drawRightString(W - 18*mm, tot_y + 1*mm, val)
        tot_y -= 9*mm

    c.setFillColor(LIGHT)
    c.rect(W - 81*mm, tot_y - (4 * 9*mm) - 2*mm, 66*mm, (4 * 9*mm) + 8*mm, fill=1, stroke=0)

    tot_row("Subtotal:", f"₹{subtotal}")
    tot_row("CGST (9%):", f"₹{gst//2}")
    tot_row("SGST (9%):", f"₹{gst - gst//2}")
    tot_row("Shipping:", "FREE" if shipping == 0 else f"₹{shipping}")
    tot_row("GRAND TOTAL:", f"₹{total}", bold=True)

    # ===== AMOUNT IN WORDS =====
    aw_y = tot_y - 8*mm
    c.setFillColor(LIGHT)
    c.rect(15*mm, aw_y - 6*mm, W - 30*mm, 12*mm, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(17*mm, aw_y, "Amount in Words:")
    c.setFont("Helvetica", 9)
    c.setFillColor(colors.black)
    c.drawString(58*mm, aw_y, amount_in_words(total) + " Only")

    # ===== BANK DETAILS & SIGNATURE =====
    bank_y = aw_y - 25*mm
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(NAVY)
    c.drawString(20*mm, bank_y, "Bank Details:")
    c.setFont("Helvetica", 9)
    c.setFillColor(GRAY)
    c.drawString(20*mm, bank_y - 7*mm, f"Bank: {COMPANY['bank']}")
    c.drawString(20*mm, bank_y - 14*mm, f"Account No: {COMPANY['acc']}")
    c.drawString(20*mm, bank_y - 21*mm, f"IFSC Code: {COMPANY['ifsc']}")

    # Signature box
    c.setStrokeColor(BORDER)
    c.rect(W - 70*mm, bank_y - 25*mm, 54*mm, 30*mm, fill=0, stroke=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(W - 43*mm, bank_y - 10*mm, "For Shri Shiv Enterprises")
    c.setFillColor(GRAY)
    c.setFont("Helvetica", 8)
    c.drawCentredString(W - 43*mm, bank_y - 20*mm, "Authorised Signatory")

    # ===== FOOTER =====
    c.setFillColor(NAVY)
    c.rect(0, 0, W, 18*mm, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(W/2, 12*mm, "Thank you for your business! 🙏")
    c.setFillColor(colors.HexColor("#93c5fd"))
    c.setFont("Helvetica", 8)
    c.drawCentredString(W/2, 6*mm, "This is a computer-generated invoice. | shrishiventerprises2025@gmail.com | +91 6393539533")

    c.save()
    print(f"✅ Invoice generated: {output_path}")
    return output_path

def amount_in_words(n):
    """Convert number to Indian English words"""
    if n == 0: return "Zero Rupees"
    ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
            'Seventeen', 'Eighteen', 'Nineteen']
    tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    def say(num):
        if num < 20: return ones[num]
        elif num < 100: return tens[num//10] + (' ' + ones[num%10] if num%10 else '')
        elif num < 1000: return ones[num//100] + ' Hundred' + (' and ' + say(num%100) if num%100 else '')
        elif num < 100000: return say(num//1000) + ' Thousand' + (' ' + say(num%1000) if num%1000 else '')
        elif num < 10000000: return say(num//100000) + ' Lakh' + (' ' + say(num%100000) if num%100000 else '')
        else: return say(num//10000000) + ' Crore' + (' ' + say(num%10000000) if num%10000000 else '')
    return "Rupees " + say(int(n))

# ============================================================
# Test Invoice
# ============================================================
if __name__ == "__main__":
    test_order = {
        "order_id": "SSE0001",
        "name": "Ramesh Kumar",
        "phone": "+91 9876543210",
        "email": "ramesh@email.com",
        "address": "45, Nehru Nagar, Civil Lines",
        "city": "Lucknow",
        "pincode": "226001",
        "payment": "UPI",
        "items": [
            {"name": "Piyus Series School Notebook", "spec": "20×14cm, 200pp, 60GSM", "qty": 20, "price": 45},
            {"name": "Vaishnavi Ice Skating Notebook", "spec": "20×14cm, 200pp, 60GSM", "qty": 10, "price": 48},
            {"name": "Anshika Premium A4 Notebook",  "spec": "A4, 140pp, 70GSM",       "qty": 5,  "price": 75},
        ],
        "subtotal": 1725,
        "gst": 311,
        "shipping": 0,
        "total": 2036,
        "timestamp": "2026-06-29T12:30:00"
    }
    path = generate_invoice(test_order)
    print(f"Invoice saved at: {path}")

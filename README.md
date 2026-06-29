# 🏭 Shri Shiv Enterprises — Official Website

**Premium Notebooks & Stationery Manufacturer | Kanpur, UP, India**

![Navy Blue](https://img.shields.io/badge/Brand-Navy%20%23243B6B-243B6B?style=flat) 
![Gold](https://img.shields.io/badge/Accent-Gold%20%23F4C542-F4C542?style=flat&labelColor=F4C542&color=F4C542)

---

## 🌐 Live Website
👉 **https://08veehst04-8080.hosted.obvious.ai**

---

## 📁 Project Structure

```
shrishiv-enterprises-website/
├── index.html          # Full website — all pages
├── styles.css          # Brand CSS (Navy #243B6B + Gold #F4C542)
├── app.js              # Frontend JS — cart, wishlist, auth, search
├── backend.py          # Flask API — orders, notifications, auth
├── invoice_generator.py# PDF invoice generator (ReportLab)
├── images/             # All product & brand photos
│   ├── logo.jpg
│   ├── lifestyle-piyus.jpg
│   ├── lifestyle-harsh.jpg
│   ├── lifestyle-anshika.jpg
│   ├── notebook-*.jpg
│   └── promo-notebooks.jpg
└── README.md
```

---

## ✨ Features

### Frontend
- 🎠 **Hero Slider** — 3 slides with product photos
- 🗂️ **8 Categories** — All notebook types
- 🛍️ **12 Products** — With detail modals & image gallery
- 🛒 **Shopping Cart** — GST (18%), shipping, coupon codes
- ❤️ **Wishlist** — Saved in localStorage
- 🔍 **Live Search** — Real-time product dropdown
- 🌙 **Dark Mode** — Toggle & persisted
- 📱 **WhatsApp Button** — Floating, with pulse animation
- 📦 **Bulk Order Form** — Wholesale enquiry
- 📞 **Contact Page** — Map + form + WhatsApp
- ✅ **Login / Signup** — Required before checkout
- 🧾 **Invoice Download** — PDF after every order
- 📲 **Fully Responsive** — Mobile + Desktop

### Backend (Flask API)
- `POST /api/order` — Place order + notify owner + notify customer + generate invoice
- `POST /api/bulk-enquiry` — Wholesale enquiry notification
- `POST /api/contact` — Contact form handler
- `GET  /api/invoice/<order_id>` — Download PDF invoice
- `GET  /api/invoice/test` — Test invoice download
- `POST /api/auth/signup` — Create account
- `POST /api/auth/login` — Login
- `POST /api/auth/verify` — Verify session token

---

## 🚀 Run Locally

### Requirements
```bash
pip install flask flask-cors requests reportlab
```

### Start Backend
```bash
python3 backend.py
# Runs on http://localhost:5050
```

### Start Website
```bash
cd /path/to/shrishiv
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## 📬 Notifications Setup

### Gmail (Email Notifications)
1. Enable 2-Step Verification on Gmail
2. Generate App Password: Gmail → Security → App Passwords
3. Set env vars:
```bash
export GMAIL_USER="shrishiventerprises2025@gmail.com"
export GMAIL_PASS="your-16-char-app-password"
```

### WhatsApp (Twilio)
1. Sign up at [twilio.com](https://twilio.com)
2. Get Account SID & Auth Token
3. Set env vars:
```bash
export TWILIO_SID="ACxxxxxxxxxxxxxxxxxx"
export TWILIO_TOKEN="xxxxxxxxxxxxxxxx"
export OWNER_WA="+916393539533"
```

---

## 🏢 Company Info

| | |
|---|---|
| **Company** | Shri Shiv Enterprises |
| **Type** | Manufacturer & Wholesaler |
| **Products** | Notebooks, Registers, Exercise Books, Drawing Books |
| **Address** | 41/1 Bajrang Vihar, Khadepur, Kanpur, UP 208021 |
| **Phone** | +91 6393539533 |
| **WhatsApp** | +91 6393539533 |
| **Email** | shrishiventerprises2025@gmail.com |

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Navy Blue | `#243B6B` | Primary, headers, buttons |
| Golden Yellow | `#F4C542` | Accent, highlights, CTA |
| White | `#FFFFFF` | Background, text on dark |

---

*Made with ❤️ for Shri Shiv Enterprises — Kanpur, India 🇮🇳*

<!-- Updated: 2026-06-29 -->

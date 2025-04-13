# 🔗 Urlify - The Ultimate URL Shortener ✨🚀🔥

A fast, sleek, and powerful URL shortener built with cutting-edge technologies — built to scale, crafted with precision by **FlyingDarkDev**. 💡💻📈

![Preview Dark Mode](/public/preview-dark.png)

---

## 🚀 Features 🎉✨🔍

- ⚛️ **Next.js 14** — React framework for modern SSR/SSG & app routing
- 🧹 **MongoDB (Mongoose)** — NoSQL database to store links & analytics
- 🎨 **Shadcn/UI** — Clean, customizable component library
- 🔐 **Clerk** — Authentication & user management made simple
- 📊 **Advanced Analytics** — Track link clicks, referrers, and engagement
- 👤 **User Dashboard** — Manage, monitor & edit links easily
- 📬 **Contact Admin** — Dynamic form to send messages with email support

---

## ⚙️ Getting Started 🛠️📦✨

### 📦 Prerequisites 💾🧰📍

Ensure you have these installed on your system:

- Node.js `>= 18.x`
- MongoDB
- Yarn or npm

---

### 🔧 Installation 🧱💡📁

```bash
# 1. Clone the repo
git clone https://github.com/notifyworld/urlify.git
cd urlify

# 2. Install dependencies
yarn install     
or 
npm install
```

---

### 🔐 Environment Setup 📄⚙️🔑

Rename `.env.example` to `.env.local` and fill in your keys: 📋📌📥

```bash
cp .env.example .env.local
```
.env.local
---
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Zmly*******************
CLERK_SECRET_KEY=sk_test_VmTc*****************************************

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard


MONGODB_URI=mongo***************************retryWrites=true&w=majority&appName=Cluster0


RESEND_API_KEY=re_MwX*********************
```

Set your values for:

- MongoDB URI
- Clerk Auth keys
- Resend Email API key
- Site URL
- Other app secrets

---

### 💻 Run the App 🧪🚀🌐

```bash
yarn dev    

or 

npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000) 💻🖱️🌍

---

## 🥪 Usage 💡🔍📊

### 🔑 Authentication 🔒🧑‍💻👥

- Sign in using Clerk authentication.
- Access your personalized dashboard after login.

### 📋 Dashboard Features 📌📈🗃️

- 🔗 **Create Short URLs** from long links
- 🛠️ **Manage** and edit/delete URLs
- 📈 **Track Analytics** – clicks, traffic sources, devices, etc.

---

## 💌 Contact Admin Feature ✉️📨📞

- Located under the **Account** tab.
- Users can fill out their name, email, service request, and message.
- Admin receives email instantly, and user gets a confirmation + welcome mail. 📬🎉👋

---

## 🙌 Contributing 🛠️🌍📤

We welcome all contributors to help improve Urlify! Here's how you can get started: 🌱✨💪

1. **Fork** this repository
2. **Clone** your fork: `git clone https://github.com/notifyworld/urlify`
3. **Create a new branch**: `git checkout -b my-new-feature`
4. **Make your changes** and commit: `git commit -m "Your message"`
5. **Push to your fork**: `git push origin my-new-feature`
6. **Create a Pull Request** on GitHub

That's it! 🎉🎊🥳

---

## 📄 License 📜✅🔏

Licensed under the **MIT License** — see the [LICENSE](LICENSE) file. 📝📘⚖️

---

## 🧠 Powered by FlyingDarkDev 🚀🧩🖥️

> "We don't just build apps — we create digital experiences."  💬💡✨  
> — Gaurav Yadav, Founder of FlyingDarkDev

🌐 [flyingdarkdev.in](https://flyingdarkdev.in) | 📧 darkgauravyadav@gmail.com 📪📱🌍


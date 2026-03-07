# 👨‍💻 Priyanshu Mishra – Developer Portfolio

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-success)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

🚀 A modern **Developer Portfolio Website** built to showcase my **projects, technical skills, coding profiles, and experience** as a MERN Stack Developer.

🔗 **Live Website:**
https://priyanshumishra.vercel.app

---

# 📌 About the Project

This portfolio website highlights my work, skills, and development journey.
It includes a **project showcase, coding profiles, and a working contact form** that allows users to send messages directly to my email.

The project is built using **modern web technologies with a scalable structure and responsive design**.

---

# ✨ Features

✅ Modern UI/UX design
✅ Fully responsive (Mobile + Tablet + Desktop)
✅ Projects showcase section
✅ Coding profiles integration
✅ Contact form with backend email API
✅ Form validation and error handling
✅ Smooth user experience
✅ Clean and maintainable code structure

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Icons
* Lucide Icons

## Backend

* Node.js
* Express.js
* Nodemailer

## Deployment

* **Frontend:** Vercel
* **Backend:** Render

---

# 📂 Project Structure

```
Portfolio
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── sections
│   │   ├── assets
│   │   ├── pages
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── routes
│   ├── controllers
│   └── server.js
│
├── .env
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```
git clone https://github.com/Prynshumishra/Portfolio.git
```

---

## 2️⃣ Navigate to the project

```
cd Portfolio
```

---

# ▶️ Run Frontend

```
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# ▶️ Run Backend

```
cd server
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server folder**.

```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
CLIENT_ORIGIN=http://localhost:5173
```

For production:

```
CLIENT_ORIGIN=https://priyanshumishra.vercel.app
```

---

# 📬 Contact API

Endpoint:

```
POST /api/contact
```

Example request body:

```
{
"name": "Priyanshu",
"email": "example@gmail.com",
"subject": "Project Discussion",
"message": "Hello, I want to discuss a project."
}
```

This API sends email using **Nodemailer + Gmail SMTP**.

---

# 🚀 Deployment

## Frontend Deployment

Deploy using **Vercel**

```
npm run build
```

Then upload the project to **Vercel**.

---

## Backend Deployment

Deploy backend on **Render**

Steps:

1. Push backend code to GitHub
2. Create Web Service on Render
3. Add environment variables
4. Deploy

Example backend URL:

```
https://port.onrender.com
```

---

# 📸 Screenshots

Add screenshots here.

Example:

```
/screenshots/home.png
/screenshots/projects.png
/screenshots/contact.png
```

---

# 👨‍💻 Author

**Priyanshu Mishra**

MERN Stack Developer passionate about building scalable web applications and solving real-world problems.

🌐 Portfolio
https://priyanshumishra.vercel.app

💼 LinkedIn
https://linkedin.com/in/priyanshumishra

💻 GitHub
https://github.com/Prynshumishra

---

# ⭐ Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects.

---

# 📜 License

This project is licensed under the **MIT License**.

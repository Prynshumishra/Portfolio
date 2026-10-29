# Priyanshu Mishra — Full-Stack Developer Portfolio

![Portfolio Status](https://img.shields.io/badge/Portfolio-Live-success)
![Frontend](https://img.shields.io/badge/Frontend-React_19_%2B_Vite_7_%2B_Tailwind_v4-231915)
![Backend](https://img.shields.io/badge/Backend-Node.js_%2B_Express_%2B_MongoDB-5C4033)
![License](https://img.shields.io/badge/License-MIT-yellow)

A full-stack **Developer Portfolio & Administration Console** built to showcase production engineering work, freelance client deliveries, personal full-stack systems, technical skills, coding profiles, and professional experience—backed by a custom Node.js + Express + MongoDB REST API and a protected Admin Console (`/admin-portfolio`).

🔗 **Live Website:** [https://priyanshumishra.vercel.app](https://priyanshumishra.vercel.app)

---

## ✨ Key Features

- **Executive Responsive UI**: Full-width 12-column Bento & terminal-inspired design system in a warm alabaster and deep espresso-charcoal palette.
- **Dynamic Projects Showcase**: Filter between **All**, **Client**, and **Personal** projects with live MongoDB synchronization and instant static fallback.
- **Interactive Skills & Coding Profiles**: Categorized technical skills matrix (Frontend, Backend & APIs, Databases & Cloud, AI & Data Science) with LeetCode (`400+` problems solved) and GitHub (`780+` contributions) analytics.
- **Validated Contact Pipeline**: Rate-limited contact form (`POST /api/contact`) with client and server payload validation and MongoDB persistence.
- **Protected Admin Console (`/admin-portfolio`)**:
  - **HMAC-SHA256 Signed Session Auth**: Timing-safe key verification (`crypto.timingSafeEqual`), brute-force rate limiting, and auto-expiring bearer tokens.
  - **Dashboard Overview**: Live KPI metrics for projects (`Client` vs `Personal`) and inquiries (`Unread`, `Read`, `Replied`).
  - **Projects Manager**: Full CRUD interface to create, edit, reorder, and delete portfolio projects in real time.
  - **Contacts Inbox**: Master-Detail message inspector with search, status/subject filtering, direct `mailto:` reply workflow, and formula-sanitized CSV export.

---

## 🛠 Tech Stack

### Frontend (`client/`)
- **Framework:** React 19, Vite 7, React Router v7
- **Styling & Motion:** Tailwind CSS v4, Framer Motion, Lucide Icons, React Icons
- **Notifications:** React Hot Toast

### Backend (`server/`)
- **Runtime & Framework:** Node.js, Express.js
- **Database:** MongoDB & Mongoose
- **Security:** `express-rate-limit`, `cors`, custom CSP/security headers, and Node `crypto` HMAC-SHA256 session tokens

---

## 📂 Project Structure

```text
Portfolio/
├── client/                          # Frontend Application (React 19 + Vite)
│   ├── public/                      # Static assets & project thumbnails
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/               # Modular Admin Console views
│   │   │   │   ├── AdminLogin.jsx
│   │   │   │   ├── ContactsManager.jsx
│   │   │   │   ├── DashboardOverview.jsx
│   │   │   │   └── ProjectsManager.jsx
│   │   │   ├── ui/                  # Reusable UI primitives
│   │   │   ├── AboutSection.jsx
│   │   │   ├── CodingProfilesSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── SkillsSection.jsx
│   │   ├── lib/
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   ├── Admin.jsx            # /admin-portfolio console shell
│   │   │   ├── Home.jsx             # Main portfolio landing page
│   │   │   └── NotFound.jsx         # 404 page
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/                          # Backend API (Node.js + Express + MongoDB)
│   ├── config/
│   │   ├── cors.js                  # Strict CORS origin & method policy
│   │   ├── db.js                    # MongoDB connection lifecycle
│   │   └── defaultProjects.js       # Initial portfolio projects seed data
│   ├── middleware/
│   │   ├── authMiddleware.js        # HMAC-SHA256 token signing & verification
│   │   ├── rateLimiter.js           # Contact & Admin login rate limiters
│   │   ├── securityHeaders.js       # HTTP security headers
│   │   └── validateContact.js       # Contact payload validation
│   ├── models/
│   │   ├── Contact.js               # Contact inquiry Mongoose model
│   │   └── Project.js               # Portfolio project Mongoose model
│   ├── routes/
│   │   ├── adminRoutes.js           # Protected Admin CRUD endpoints
│   │   ├── contactRoutes.js         # Public POST /api/contact endpoint
│   │   └── projectRoutes.js         # Public GET /api/projects endpoint
│   ├── .env
│   ├── index.js                     # Express server entrypoint
│   └── package.json
│
├── package.json                     # Root workspace convenience scripts
└── README.md
```

---

## ⚙️ Installation & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Prynshumishra/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm run install:all
```

### 3. Configure Environment Variables

**Frontend (`client/.env`):**
```env
VITE_API_URL=http://localhost:5000
VITE_SESSION_STORAGE_KEY=portfolio_admin_session_v2
```

**Backend (`server/.env`):**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
ADMIN_KEY=your_strong_admin_passkey
```

### 4. Run the Application

**Start Backend (`http://localhost:5000`):**
```bash
npm run dev:server
```

**Start Frontend (`http://localhost:5173`):**
```bash
npm run dev:client
```

---

## 🔌 API Endpoints

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/projects` | Public | Fetch all portfolio projects (auto-seeds defaults if empty) |
| `POST` | `/api/contact` | Public | Submit a contact inquiry (rate-limited: 5 req / 15 min) |
| `POST` | `/api/admin/login` | Public | Authenticate with `ADMIN_KEY` & receive signed session token |
| `GET` | `/api/admin/contacts` | Admin (`Bearer`) | List all contact submissions sorted newest first |
| `PATCH` | `/api/admin/contacts/:id` | Admin (`Bearer`) | Update contact status (`unread`, `read`, `replied`, `archived`) |
| `DELETE` | `/api/admin/contacts/:id` | Admin (`Bearer`) | Delete a contact inquiry |
| `GET` | `/api/admin/projects` | Admin (`Bearer`) | List all projects for management |
| `POST` | `/api/admin/projects` | Admin (`Bearer`) | Create a new portfolio project |
| `PUT` | `/api/admin/projects/:id` | Admin (`Bearer`) | Update an existing portfolio project |
| `DELETE` | `/api/admin/projects/:id` | Admin (`Bearer`) | Delete a portfolio project |

---

## 👨‍💻 Author

**Priyanshu Mishra**
- **Portfolio:** [https://priyanshumishra.vercel.app](https://priyanshumishra.vercel.app)
- **GitHub:** [https://github.com/Prynshumishra](https://github.com/Prynshumishra)
- **LinkedIn:** [https://linkedin.com/in/prynshumishr](https://linkedin.com/in/prynshumishr)
- **Email:** [prynshu09@gmail.com](mailto:prynshu09@gmail.com)

---

## 📜 License

This project is licensed under the **MIT License**.

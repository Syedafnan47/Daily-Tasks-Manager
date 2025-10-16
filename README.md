# 🗓️ Daily Tasks Manager

Daily Tasks Manager is a **React-based task management application** built to help you efficiently plan, organize, and complete your day’s tasks. From simple to-dos to complex goals, this app ensures you stay productive with a sleek and responsive interface.

---

## 🚀 Overview

Daily Tasks Manager is a modern web app where users can:
- Add, delete, and mark tasks as complete  
- Persist data using **localStorage**, even after closing the browser  
- View progress dynamically using a **visual progress tracker**  
- Manage a **history of completed tasks**  
- Experience a clean and **responsive design** across all devices  

This project is a hands-on journey into **React.js development**, guiding you through real-world techniques: component architecture, hooks, state management, and live deployment.

---

## 🧩 Core Features

- **Add New Tasks:** Use an input field with validation to ensure tasks are meaningful and non-duplicate.  
- **Dynamic Task List:** Instantly render new tasks, toggle completion states, and delete items dynamically.  
- **Persistent Storage:** Automatically save tasks to **localStorage** for long-term persistence.  
- **Progress Tracker:** A visual progress bar that updates live as tasks are marked complete or pending.  
- **Task History:** View previously completed tasks, restore them to active status, or permanently delete them.  
- **Responsive UI:** Designed with flexbox and media queries for smooth use on mobiles, tablets, and desktops.

---

## ⚙️ Tech Stack

| Category        | Tools / Libraries          |
|-----------------|----------------------------|
| Framework       | React.js                   |
| Language        | JavaScript (ES6+)          |
| State Management| React Hooks (`useState`, `useEffect`) |
| Data Storage    | localStorage API           |
| Styling         | CSS3                       |
| Version Control | Git & GitHub               |
| Deployment      | GitHub Pages / Netlify     |

---

## 🧑‍💻 Installation & Setup

Follow these steps to run **Daily Tasks Manager** locally:

### 1️⃣ Clone the Repository

git clone https://github.com/<your-username>/daily-tasks-manager.git
cd daily-tasks-manager

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Run the Project

npm start

Open your browser at [http://localhost:3000](http://localhost:3000).

### 4️⃣ Build for Production

npm run build

## 📁 Project Structure

daily-tasks-manager/
├── public/
│ ├── favicon.ico
│ └── index.html
├── src/
│ ├── components/
│ │ ├── TaskForm.jsx
│ │ ├── TaskList.jsx
│ │ ├── ProgressBar.jsx
│ │ └── TaskHistory.jsx
│ ├── styles/
│ │ ├── App.css
│ │ └── Components.css
│ ├── utils/
│ │ └── localStorageHelper.js
│ ├── App.jsx
│ ├── index.js
│ └── assets/
│ └── icons/
├── package.json
├── .gitignore
└── README.md

---

## 🧠 What You’ll Learn

Building **Daily Tasks Manager** teaches you:
- Component-based architecture in React.js  
- Effective state management with hooks (`useState`, `useEffect`)  
- Using localStorage for persistent, client-side data  
- Implementing progress indicators using computed state  
- Creating responsive designs that scale across devices  
- Configuring deployment pipelines for GitHub Pages and Netlify  

---

## 🌟 Future Enhancements

Ideas to improve Daily Tasks Manager:
- Task categories (Work, Personal, Urgent)  
- Search and filter functionality  
- Due-date and reminder system  
- Dark Mode toggle  
- Firebase or Supabase sync to manage tasks in the cloud  

# 📝 Todo App

A simple and efficient Todo application built to manage daily tasks with full CRUD functionality, search, and persistent storage using `localStorage`.

---

## 🚀 Features

- ✅ Add new tasks  
- ✏️ Edit existing tasks  
- ❌ Delete tasks  
- 🔄 Toggle task completion status  
- 🔍 Search and filter tasks  
- 💾 Persistent storage using `localStorage`  
- ⚡ Optimized state management (no unnecessary derived state)

---

## 🛠️ Tech Stack

- Frontend: React (Hooks)
- State Management: useState
- Storage: Browser `localStorage`
- Styling: CSS

💡 How It Works
Tasks are stored in React state and synced with localStorage
Any update (add/edit/delete/toggle) automatically updates storage
Search dynamically filters tasks without modifying original state
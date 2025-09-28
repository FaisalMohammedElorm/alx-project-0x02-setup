![alt text](<Screenshot (202).png>) ![alt text](<Screenshot (199).png>) ![alt text](<Screenshot (200).png>) ![alt text](<Screenshot (201).png>)

# alx-project-0x02-setup

This project is a **Next.js (Pages Router) application** built as part of the ALX curriculum.
It demonstrates routing, reusable components, API integration, and layout management.

---

## 📌 Features

* **Pages Router** setup with `/home`, `/about`, `/posts`, and `/users`
* **Reusable components**:

  * Card
  * Button
  * Modal
  * PostCard
  * UserCard
* **Dynamic data fetching** from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for posts and users
* **Reusable layout** with navigation links across all pages

---

## 🗂️ Project Structure

```
alx-project-0x02-setup/
│── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
│
│── interfaces/
│   └── index.ts
│
│── pages/
│   ├── about.tsx
│   ├── home.tsx
│   ├── posts.tsx
│   └── users.tsx
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/FaisalMohammedElorm/alx-project-0x02-setup.git
cd alx-project-0x02-setup
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Navigate to `http://localhost:3000`.

---

## 📄 Pages

* `/home` → Displays reusable **Card** components and modal input form
* `/about` → Demonstrates reusable **Button** component with sizes & shapes
* `/posts` → Fetches and displays posts using **PostCard**
* `/users` → Fetches and displays users using **UserCard**

---

## 🛠️ Technologies

* **Next.js** (Pages Router)
* **React** with TypeScript
* **Tailwind CSS** for styling
* **JSONPlaceholder API** for demo data

---

## ✨ Author

**Faisal Mohammed Elorm**
📍 Accra, Ghana
🔗 [Portfolio](https://sites.google.com/view/faisal-forever/home)
👤 GitHub: [FaisalMohammedElorm](https://github.com/FaisalMohammedElorm)

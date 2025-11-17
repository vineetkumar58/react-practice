# React Counter App (useRef + useState)

A tiny React counter demonstrating `useRef`, `useState`, and cleanup with `useEffect`.

![App Screenshot](./assets/screenshot.png)

---

## ⭐ Features
- Start / Stop / Reset counter  
- Interval stored using `useRef`  
- Cleans up interval on unmount  

---

## 🛠 Tech Stack
React, JavaScript, CSS, Vite

---

## ▶️ Run Locally

```bash
npm install
npm run dev



## 🧪 Code Snippet

```jsx
// StartCount example
let value = setInterval(() => setCount(t => t + 1), 1000);
timer.current = value;
```

👤 Author
Mohd Toshif 
---
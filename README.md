<h1>🚀 Employee Management System — Full Stack  </h1> 

<h2>React.js (Vite) + Node.js + Express + MySQL</h2>

A complete full-stack CRUD application to manage employees, built with modern JavaScript technologies.

<h3>🎨 Frontend — React.js (Vite)</h3>

<h4>🌟 Features</h4>
- Add Employee form  
- Employee list with Edit/Delete  
- Search employees  
- Auto reload after add/update/delete  
- Axios-based API integration  
- Responsive UI  


<h4> 🛠 Tech Stack </h4>
- React.js (Vite)
- Axios  
- CSS  

---

<h4>  Run Frontend Locally </h4>

1️⃣ Install packages


2️⃣ Start dev server

npm run dev

App runs at: 👉 http://localhost:5173

<h4>🔗 API Configuration</h4>

In src/config.js:export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


<h3> Backend — Node.js + Express + MySQL </h3>

<h4>Features</h4> 

Add employees

Get all employees

Update employee details

Delete employees

REST API architecture

CORS enabled

MySQL database integration


<h4>Tech Stack</h4>

Node.js

Express.js

MySQL2

dotenv

CORS


<h4> Environment Variables </h4>

Create a .env file inside backend:

PORT=5000

DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_mysql_database
npm install


<h4>Run Backend Locally </h4> 

1️⃣ Install dependencies
npm install

2️⃣ Start server
npm start

Backend runs at:👉 http://localhost:5000

🛠 API Endpoints
  
➕ Add Employee

POST /api/employees

Body:

{
  "name": "Ram",
  "role": "Developer",
  "salary": 45000
}

📄 Get All Employees

GET /api/employees

✏ Update Employee

PUT /api/employees/:id

❌ Delete Employee

DELETE /api/employees/:id

<img width="1887" height="902" alt="image" src="https://github.com/user-attachments/assets/0740efde-477e-4a93-80fc-a4629168dcef" />


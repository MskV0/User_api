# RESTful API – User Management

This project is a simple RESTful API built using **Node.js** and **Express** that performs **CRUD operations** on an in-memory list of users.

---

## 📁 Project Structure

```

.
├── index.js               # Main API server
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── /screenshots           # Postman/ThunderClient test screenshots
├── Screenshot (1).png
├── Screenshot (2).png
├── Screenshot (3).png
├── Screenshot (4).png
└── Screenshot (5).png

````

---

## 🚀 Features Implemented

### ✅ API Routes

| Method | Endpoint         | Description                        |
|--------|------------------|------------------------------------|
| GET    | `/users`         | Fetch all users                    |
| GET    | `/users/:id`     | Fetch a single user by ID          |
| POST   | `/user`          | Add a new user                     |
| PUT    | `/user/:id`      | Update user (supports partial)     |
| DELETE | `/user/:id`      | Delete user by ID                  |

---


---

## 🧪 Testing & Screenshots

All endpoints were tested using **Postman**.
Below are the screenshots from the tests:

### 🔍 `GET /users`

![GET /users](./screenshots/Screenshot%20\(1\).png)

### 🔍 `POST /user`

![GET /users/](./screenshots/Screenshot%20\(2\).png)

### 🔍  `GET /users/:id`
 
![POST /user](./screenshots/Screenshot%20\(3\).png)

### 🔍 `PUT /user/:id`

![PUT /user/](./screenshots/Screenshot%20\(4\).png)

### 🔍 `DELETE /user/:id`

![DELETE /user/](./screenshots/Screenshot%20\(5\).png)

---

## 📦 How to Run

1. **Navigate to the project directory:**

   ```bash
   cd User_api
   ```


2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Visit: `http://localhost:3000`

---

## 🧠 Notes

* The API uses **in-memory array**, no database needed.
* Middleware logs requests and validates input for `POST` and `PUT`.

---

## 👨‍💻 Developed By

**Mohammed Soaib Khan**
*Full Stack Developer & Cybersecurity Enthusiast*

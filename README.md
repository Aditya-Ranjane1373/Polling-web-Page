# 🗳️ Polling Web Application

A simple full-stack Polling Web Application built using **Spring Boot (Backend)** and **React (Frontend)**.  
Users can create polls, view available polls, and vote for their favorite options.

---

## 🚀 Features

- Create new poll
- View list of all polls
- Vote on poll options
- Real-time vote update (backend handled)
- Simple and clean UI

---

## 🛠️ Tech Stack

### Backend:
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- MySQL

### Frontend:
- React JS
- Axios
- React Router DOM
- HTML, CSS

---

## 📁 Project Structure
Polling-web-Page/
│
├── backend (Spring Boot)
│ ├── src/main/java
│ ├── Controller
│ ├── Service
│ ├── Repository
│ ├── Model
│ └── Application.java
│
├── frontend (React)
│ ├── src/
│ ├── components/pages
│ ├── App.jsx
│ └── main.jsx

🔗 API Endpoints
POST /poll/Api/save/poll → Create Poll
GET /poll/Api/get/poll → Get all polls
GET /poll/Api/getByid/{id} → Get poll by ID
POST /poll/Api/vote/{id}?option= → Vote on poll
📸 UI Pages
Home Page
Create Poll Page
Poll List Page
Poll Details Page
Vote Confirmation Page
👨‍💻 Author

Aditya Ranjane

📌 Note

This project is built for learning full-stack development using Spring Boot and React.

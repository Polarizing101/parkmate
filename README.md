# 🚗 ParkMate

ParkMate is a smart parking finder application that helps users discover available parking spots in urban areas.

---

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication

### Parking Management

- Add Parking Spot
- View Parking Spots
- Parking Status
  - AVAILABLE
  - OCCUPIED
  - EXPIRED

### Smart Features

- Nearby Parking Search
- User Geolocation
- Automatic Parking Spot Expiration

### Interactive Map

- Leaflet Map Integration
- Custom Status Markers
- User Location Marker

### Dashboard

- Parking Statistics
- Add Spot Form
- Nearby Search Results

---

## Technology Stack

### Frontend

- React
- Vite
- React Router
- Axios
- React Leaflet

### Backend

- Spring Boot
- Spring Security
- JWT
- Spring Data JPA

### Database

- MySQL

### DevOps

- Docker
- Git
- GitHub

---


# Build & Deployment Guide

## Prerequisites

Before running the application, ensure the following software is installed:

- Java 21
- Maven
- Node.js
- npm
- Docker
- Git

## Clone the Repository


git clone https://github.com/Polarizing101/parkmate.git
cd parkmate


## Database Setup

Start the MySQL database using Docker:


cd backend/parkmate
docker compose up -d


## Backend Build

Build the Spring Boot application:


./mvnw clean package


## Run the Backend

Start the backend server:


./mvnw spring-boot:run


The backend will be available at:

http://localhost:8080

## API Documentation

Swagger UI is available at:

http://localhost:8080/swagger-ui/index.html

## Frontend Setup

Navigate to the frontend directory and install dependencies:


cd frontend
npm install


## Run the Frontend

Start the React application:


npm run dev


The frontend will be available at:

http://localhost:5173

## Application Workflow

1. Start the MySQL database using Docker.
2. Start the Spring Boot backend.
3. Start the React frontend.
4. Register or log in.
5. Access the dashboard.
6. Search, add, and manage parking spots.

## System Architecture


React Frontend
      ↓
Spring Boot REST API
      ↓
Service Layer
      ↓
Repository Layer
      ↓
MySQL Database


## Testing

Run backend tests:


./mvnw test


Verify the frontend production build:


npm run build


If both commands complete successfully, the application is ready for deployment.

## Environment

- Java 21
- Spring Boot
- React
- MySQL 8
- Docker
- Node.js 20+
- macOS



---

# Screenshots

## Login Page

screenshots/login.png

## Register Page

screenshots/register.png

## Dashboard

screenshots/dashboard.png

## Interactive Map

screenshots/map.png

## Nearby Search

screenshots/nearbynearby-search.png

---

## Future Improvements

- Mobile App
- Real-Time Updates
- Parking Spot Voting
- Route Guidance
- Push Notifications

---

## Author

Panagiotis Kassanos

Coding Factory Project

ParkMate 2026

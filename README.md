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

## Architecture

Frontend (React)
↓
REST API (Spring Boot)
↓
Service Layer
↓
Repository Layer
↓
MySQL Database

---

## Main Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Parking Spots

GET /api/parking-spots

POST /api/parking-spots

GET /api/parking-spots/available

GET /api/parking-spots/nearby

### Favorites

GET /api/favorites

POST /api/favorites

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

# Docker Spring Boot Vue Project Scaffold

This project scaffold provides a modern, containerized full-stack setup using Spring Boot for the backend and Vue.js for the frontend, all orchestrated through Docker for consistent, reproducible environments. The scaffold streamlines development by separating concerns between the Java GraphQL API and the Vue UI while enabling seamless local development, testing, and deployment with minimal configuration.

# Tech Stack

- **Backend:** Java 17, Spring Boot, Spring Data MongoDB, Spring Security, Spring GraphQL, Maven
- **Frontend:** Vue 3, TypeScript, Vite, Apollo Client, GraphQL, Sass
- **Dev Tools:** Nginx (for serving frontend), Docker (optional for deployment)


# Development Environment

## Installing Java and JavaScript Dependencies

Before running the application, you need to install the required dependencies for both the backend and frontend components.

### Backend Setup

The backend is a Java application managed with Maven. To install the necessary Java dependencies:

1. **Install Java 17 or higher** if you don't have it already.

2. Navigate to the `backend` directory:

```bash
  cd backend
```

3. Use Maven to download and install dependencies:

```bash
  ./mvnw clean install
```

or, if you have Maven installed globally:

```bash
  mvn clean install
```

Start stand allow server:

```bash
  ./mvnw spring-boot:run
```

### Frontend Setup

The frontend is a JavaScript application (typically using Node.js and npm/yarn). To install the required dependencies:

1. Ensure you have **Node.js (v20 or higher)** and **npm** installed.

2. Navigate to the `front` directory:

```bash
  cd front
```

3. Install the JavaScript dependencies:

```bash
  npm install
```

or, if you prefer yarn:

```bash
  yarn install
```

### Running the project

Ensure Docker is installed, running and then run the following command to start the MongDB:

```bash
  docker run -d --name mongo -p 27017:27017 mongo:6
```

Run the following cmd to start both Spring Boot and Vite servers:

```bash
  docker compose up --build
```

With Docker compose both the backend and front end servers will be running.


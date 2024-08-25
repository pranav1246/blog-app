Full-Stack Blog Application Documentation
Overview
This document outlines the process of building and deploying a full-stack blog application. The application uses React (with Material-UI) for the frontend, Node.js with Express.js for the backend, JSON Web Tokens (JWT) for authentication, and MongoDB for data storage. The app was deployed on Render.

Technologies Used
Frontend
React: JavaScript library for building the user interface.
Material-UI: UI framework for React to create responsive and visually appealing components.
React Router: Used for client-side routing within the application.
Backend
Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for handling routing, middleware, and HTTP requests.
JWT (JSON Web Tokens): Used for secure authentication and authorization.
MongoDB: NoSQL database for storing application data.
Mongoose: ODM (Object Data Modeling) library for MongoDB, used to manage data.
API and Functionality
Authentication
JWT Authentication: The app uses JWT for secure authentication. Upon login, a token is generated and sent to the client. The token is used for verifying and authorizing user requests.
CRUD Operations
Create, Read, Update, Delete (CRUD) Operations: The backend exposes RESTful API endpoints for managing blog posts, including creating, reading, updating, and deleting posts.
File Handling
Multer: Middleware used for handling multipart/form-data, primarily used for uploading files such as blog images.
Project Structure
Frontend
The frontend is housed in the frontend directory, where the React app and Material-UI components are developed.
Backend
The backend resides in the apis directory, with Express.js handling the routing and MongoDB managing the database operations.
Deployment on Render
Steps to Deploy
Create a Web Service on Render: Create a new web service on Render for deploying the backend.
Connect GitHub Repository: Link your GitHub repository containing the project files.
Set Build Command: In the package.json, use the following script for building:
bash
Copy code
npm run render-build
Set Start Command: Define the start command in package.json:
bash
Copy code
npm start
Environment Variables: Configure necessary environment variables on Render (e.g., DB_USERNAME, DB_PASSWORD, JWT_SECRET).
Deploy: Render will handle the deployment, including installing dependencies, building the frontend, and starting the server.
Build and Start Commands
Build Command: npm run render-build
Start Command: npm start
Conclusion
The blog application was successfully built using modern JavaScript technologies and deployed on Render. This setup allows for easy updates and scalability. Future updates can be seamlessly pushed to the GitHub repository, which will trigger automatic deployment on Render.
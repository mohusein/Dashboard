# Dashboard
A fully integrated e-commerce platform featuring an admin dashboard for efficient product management and a customer-facing shopping section. Developed with modern technologies to provide a seamless and dynamic user experience.


Features and Optimizations
Performance Optimizations
Cache with Axios: Caching the responses of requests to avoid reloading data on each call, thus improving application speed.
Query Optimizations: Reducing redundant API calls and preloading data to speed up access to information.
Main Features
Admin Dashboard: Allows centralized management of products and orders.
User Authentication: Secure login for users with session management.
CRUD Operations for Product Management: Create, read, update, and delete products.
Limited Operations for Purchased Products: Deleting and retrieving purchased products by users.
Limited Operations for Clients: Deleting and retrieving client information.
Contact Management: Tracking and managing client contacts.
Real-Time Updates: Tracking products and order statuses in real-time.
UI/UX and State Management
Responsive Design with Tailwind CSS: A user interface optimized to fit all screen sizes.
State Management with Zustand: Centralized and efficient state management using Zustand.
Prerequisites
Before starting, make sure you have the following installed:

Node.js
MongoDB Atlas or local MongoDB installation
Installation
Back-End
Clone the project
git clone https://github.com/Kodatchi-001/Etec-Dashboard.git
cd Etec-admin-dashboard
Front-End
Navigate to the front-end folder

cd frontend
Install the front-end dependencies

npm install
Start the front-end server

npm run dev
The front-end will be running at http://localhost:3000.

Running the Full Stack
Ensure both the back-end and front-end servers are running on different ports:

Back-End: http://localhost:5000
Front-End: http://localhost:3000
Open your browser and navigate to http://localhost:3000 to see the application in action.

Main Dependencies
Express.js: A framework to handle HTTP requests on the server side.
MongoDB: NoSQL database to store the data.
Mongoose: ODM to interact with MongoDB and simplify database operations.
CORS: Middleware to handle cross-origin requests.
Next Js: JavaScript framework to build the user interface.
Tailwind CSS: Utility-first CSS framework for styling.
Framer Motion: Animation library for React.
Zustand: State management tool for React.
Testing
End-to-End (E2E) Testing
The project includes end-to-end testing to ensure that the entire system works as expected from the user's perspective.
Unit Testing
Unit tests have been implemented to verify individual components and their functionalities.
These tests ensure that the dashboard's core features, such as product management, authentication, and client interactions, are functioning correctly.

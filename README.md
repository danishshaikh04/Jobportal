****Job Portal (MERN Stack)****

This is a Full Stack Job Portal application built using the MERN stack (MongoDB, Express.js, React, Node.js) . The platform allows job seekers to browse job listings, and employers to post jobs, and supports features such as user authentication, job search, and profile management.

****Features****

User Authentication: Secure sign-up and login functionality using JWT tokens.

User Roles: Separate roles for Job Seekers and Employers with role-based functionalities.

Job Listings: Employers can post job vacancies, and job seekers can search and apply for jobs.

Profile Management: Users can create and update their profiles.

Job Application Tracking: Track the status of job applications (applied, shortlisted, rejected, etc.)   .


**Tech Stack**

**Frontend**

React.js: Used for building the interactive user interface.

Redux: State management across the application.

React Router: For handling navigation and routing.

**Backend**

Node.js & Express.js: Backend framework for handling API requests and server-side logic.

MongoDB & Mongoose: NoSQL database for storing user, job, and application data.

JWT Authentication: JSON Web Token-based authentication for secure login and sign-up.

Multer & Cloudinary: File handling for uploading resumes and profile pictures.

bcrypt.js: Used for hashing passwords.

**Installation**
Clone the repository:

bash

git clone https://github.com/danishshaikh04/Jobportal.git
Navigate to the project directory:

bash

cd job-portal
Install the dependencies for both backend and frontend:

bash

npm install
cd client
npm install

**Set up environment variables:**
Create a .env file in the root directory and add the following variables:

**env**

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret


Run the project:

**For the backend:**

bash
npm run dev

**For the frontend:**

bash
npm run dev

Access the application:
Open your browser and visit http://localhost:3000 for the frontend.


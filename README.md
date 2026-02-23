# MERN E-Commerce Platform

A full-stack, production-ready e-commerce web application designed for a seamless shopping experience. Built with the MERN stack, this platform features secure payment processing via Stripe, real-time product search, and a comprehensive admin dashboard for complete inventory and order management.

## 🚀 Key Features

* **User Experience:** Real-time product search, dynamic filtering, and a responsive shopping cart.
* **Authentication & Security:** JWT-based authentication with EmailJS-powered OTP verification during user registration.
* **Payment Integration:** Secure, seamless checkout process integrated with the Stripe API.
* **Admin Dashboard:** Centralized control panel for managing product catalogs, tracking orders, and updating inventory.
* **Media Management:** Cloudinary integration for optimized product image hosting and delivery.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Third-Party Services:** Stripe (Payments), Cloudinary (Media), EmailJS (OTP Verification)

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ujwal-Gaonkar/MERN_ECOMMERCE_PROJECT.git](https://github.com/Ujwal-Gaonkar/MERN_ECOMMERCE_PROJECT.git)
   cd MERN_ECOMMERCE_PROJECT
2. **Install Root, Server, and Client Dependencies:**
   ```bash
   npm i
   cd server && npm i
   cd ../client && npm i
3. **Environment Variables:**
You need to set up two separate configuration files for the backend and frontend to run this project locally.
Backend Configuration:
Create a config.env file inside the server/config/ directory and add the following variables:
   ```bash
   PORT=4000
   DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=5d
   COOKIE_EXPIRE=5
   MAIL_HOST=your_mail_host
   MAIL_PORT=your_mail_port
   MAIL_SERVICE=your_mail_service
   MAIL_ID=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   FRONTENT_URL=http://localhost:3000
   STRIPE_API_KEY=your_stripe_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

4. **Frontend Configuration:** (EmailJS)
Create an apikeys.js file inside the client/src/component/User/ directory and add your EmailJS dashboard credentials:

    ```bash
    export default {
      PUBLIC_KEY: 'your_public_key',
      PRIVATE_KEY: 'your_private_key',
      TEMPLATE_ID: 'your_template_id',
      SERVICE_ID: 'your_service_id'
    }

    Running the Application To start both the backend server and the frontend client concurrently, run the following command from the root directory:
   npm run dev
   ```
## 👨‍💻 Author

**Ujwal Gaonkar**
* Portfolio: [ujwalgaonkar.me](https://ujwalgaonkar.me)
* GitHub: [@Ujwal-Gaonkar](https://github.com/Ujwal-Gaonkar)
* LinkedIn: [Ujwal Gaonkar](https://www.linkedin.com/in/ujwal-gaonkar-6746aa1a7/)


***

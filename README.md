✨ PIYAPP — A Full-Stack Social Media Web App

Piyapp is a full-stack simplified social media web application. It allows users to sign up, log in, create and view posts (text and images), like posts (multiple times like Medium's clap), manage personal profiles with avatars or profile image uploads, and delete posts. The app is fully responsive, optimized for both desktop and mobile devices, and integrates real-time features using Firebase and Cloudinary.

🔗 Live Demo: https://piyapp.vercel.app


---

🔧 Project Setup Instructions

1. 📥 Clone the Repository

Open your terminal and run the following commands to clone and enter the project directory:

git clone https://github.com/piyabhalla/piyapp.git
cd piyapp


---

2. 🔐 Backend Configuration (Firebase + Cloudinary)

✅ Firebase Setup:

Go to Firebase Console

Enable Email/Password Authentication

Create a Firestore Database with the following collections:

profiles — for storing user profile data

posts — for storing user posts and metadata



🖼 Cloudinary Setup:

Sign up at Cloudinary

Create an unsigned upload preset with the name:


piyapppp

Note your Cloud Name — it will be required in the image upload logic.



---

3. 🛠 Environment Variables Setup

Create a .env.local file in the root directory and paste your Firebase credentials:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


---

4. 🚀 Install & Run the App Locally

Install all dependencies and start the development server:

npm install
npm run dev

The app will be available locally at http://localhost:3000.


---

⚙ Technologies Used

1. Next.js 15.3.4 – Full-stack React framework


2. React.js – Component-based UI


3. Firebase Authentication – User login/signup


4. Firebase Firestore – Realtime database


5. Cloudinary – Media/image hosting


6. Vercel – Hosting and CI/CD


7. Git & GitHub – Version control


8. Visual Studio Code – Code editor




---

🌟 Key Features Implemented

1. Secure User Authentication

Firebase login, signup, logout

Show/hide password toggle

Forgot password with email reset

Confirm password validation



2. User Profile Management

Editable profile (name, bio, gender, DOB)

Profile image upload or auto avatar

Direct "My Profile" access from feed



3. Post Creation with Media Support

Upload text and/or image posts

Cloudinary image hosting

Automatic timestamp and user identity logging



4. Global Feed View

Real-time post updates across users

Post metadata: content, image, poster name, time, clap count



5. Post Reactions (Claps)

Unlimited claps per user per post

Medium-style experience



6. Delete Posts

Post owners can delete their own posts



7. Avatars

DiceBear avatar fallback for users without uploaded profile pics



8. Responsive Design

Mobile-first UI with clean layout



9. Real-Time Updates

Firestore snapshot listeners ensure live syncing of posts and likes





---

⚠ Limitations / Known Issues

1. Posts cannot be edited after publishing


2. Email verification after signup is not implemented


3. No privacy control — all posts are public


4. Basic error alerts — lacks full-form validation in all areas




---

📂 Folder Structure

my-social-app-2/
├── app/
│   ├── feed/
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   ├── profile/
│   │   └── page.js
│   ├── signup/
│   │   └── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── node_modules/
├── out/
├── public/
├── .firebaserc
├── .gitignore
├── firebase.js
├── firebase.json
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── README.md

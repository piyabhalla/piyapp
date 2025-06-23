# *PIYAPP* — A Full-Stack Social Media Web App

### **Piyapp** is a full-stack simplified social media web application. It allows users to sign up, log in, create and view posts (text and images), like posts (multiple times like Medium's clap), manage personal profiles with avatars or profile image uploads, and delete posts. The app is fully responsive, optimized for both desktop and mobile devices, and integrates real-time features using *Firebase* and *Cloudinary*.

🔗 ###  https://piyapp.vercel.app

---

## *➡ Project Setup Instructions*

1. *Clone the repository*
   bash
   git clone https://github.com/piyabhalla/piyapp.git
   cd piyapp
   

2. *Install dependencies*
   bash
   npm install
   

3. *Firebase Setup*
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Enable *Email/Password Authentication*
   - Set up *Firestore Database* with:
     - profiles collection (for user data)
     - posts collection (for feed posts)

4. *Cloudinary Setup*
   - Sign up at [Cloudinary](https://cloudinary.com/)
   - Create an *unsigned upload preset* with the name:
     
     piyapppp
     
   - Note your *Cloud Name* for use in image uploads

5. *Environment Variables*
   Create a .env.local file in the root directory and add:
   env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   

6. *Run the app locally*
   bash
   npm run dev
   

---

## *➡ Technologies Used*

1. *Next.js 15.3.4* – Full-stack React framework  
2. *React.js* – Component-based UI  
3. *Firebase Authentication* – User login/signup  
4. *Firebase Firestore* – Database for users, posts, likes  
5. *Cloudinary* – Image uploads (posts and profile pictures)  
6. *Vercel* – Hosting and deployment  
7. *Git & GitHub* – Version control and collaboration  
8. *Visual Studio Code (VS Code)* – Code editor  

---

## *➡ Key Features Implemented*

1. *Secure User Authentication*
   - Built using Firebase Auth
   - Login, Signup, Logout functionality
   - Additional UX features:
     - Show/hide password toggle  
     - Forgot password with email reset  
     - Confirm password validation

2. *User Profile Management*
   - Users can create and update their profiles
   - Fields: Name, Bio, Profile Picture (upload or avatar), Gender, Date of Birth
   - “My Profile” button on feed for direct access

3. *Post Creation with Media Support*
   - Create posts with text and/or images (uploaded to Cloudinary)
   - Posts saved with timestamp and poster identity

4. *Global Feed View*
   - Displays all posts from all users in real-time
   - Each post shows: content, image (if uploaded), timestamp, poster’s name, claps count

5. *Post Reactions (Claps)*
   - Medium-style clap button
   - Users can clap unlimited times (tracked as total count only)

6. *Delete Posts*
   - Users can delete their own posts from the feed

7. *Avatars*
   - DiceBear-generated avatars for users who don’t upload profile pictures

8. *Responsive Design*
   - Optimized UI for mobile and desktop
   - Clean and user-friendly layout

9. *Real-Time Updates*
   - Posts and claps update live using Firestore snapshot listeners

---

## *➡ Limitations / Known Issues*

1. Users cannot edit their posts once published  
2. No email verification after signup  
3. All posts are public — no user-specific filtering or privacy  
4. Error alerts are basic and not form-validated in all places

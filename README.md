# *PIYAPP*

### **Piyapp** is a simplified social media web application. It allows users to sign up, log in, create and view posts (text and images), like posts (multiple times like Medium's clap), delete their posts, and manage personal profiles with avatars (profile pictures), bios, and more. The app is fully responsive, optimized for both desktop and mobile devices, and integrates real-time features using Firebase and Cloudinary.

---

## *➡ Project Setup Instructions:*

1. *Clone the repo:*  
   git clone https://github.com/piyabhalla/piyapp.git and cd piyapp

2. *Install dependencies:*  
   Run npm install to install all required packages.

3. *Firebase setup:*  
   Configure Firebase Auth (Email/Password), Firestore with profiles & posts collections.

4. *Cloudinary integration:*  
   Create an unsigned preset for image uploads.

5. *Add environment variables:*  
   Create a .env.local file and add Firebase credentials.

6. *Start the app locally:*  
   Run npm run dev to launch the development server.

---

## *➡ Technologies Used:*

1. *Next.js 15.3.4* – Frontend framework  
2. *React.js* – Component-based UI  
3. *Firebase Authentication* – User login/signup  
4. *Firebase Firestore* – Realtime database for users, posts, likes  
5. *Cloudinary* – Image upload for profile pictures (avatars) and posts  
6. *Vercel* – Hosting and deployment  
7. *Git & GitHub* – Version control  
8. *Visual Studio Code* – Code editor  

---

## *➡ Key Features Implemented:*

1. *Secure User Authentication*  
   • Firebase Auth-based login/signup/logout  
   • Show/hide password toggle  
   • Confirm password field  
   • Forgot password reset via email  

2. *User Profile Management (Avatars)*  
   • Users can update their Name, Bio, Gender, DOB  
   • Profile Picture (avatar) upload via Cloudinary  
   • “My Profile” button on feed for direct access  

3. *Post Creation with Media Support*  
   • Users can create posts with optional images  
   • Posts saved with timestamps and author details  

4. *Global Feed View*  
   • All users' posts shown in a feed  
   • Posts include: content, image (if any), timestamp, username, total claps  

5. *Post Reactions (Claps)*  
   • Multiple claps allowed (like Medium)  
   • Only total count stored  

6. *Post Deletion*  
   • Users can delete only their own posts  
   • “Delete” button appears only for the author of the post  

7. *Responsive Design*  
   • Fully mobile- and desktop-friendly UI/UX  

8. *Real-Time Updates*  
   • Live updates to feed via Firestore snapshot listeners  

---

## *➡ Limitations / Known Issues:*

1. Users cannot edit posts once published  
2. No email verification post sign-up  
3. No access control for viewing posts (all posts are public)  
4. Alerts are basic—no advanced error messaging system  

---

✅ Let me know if you want to include *badges, **demo screenshots, or **GitHub deploy info* next!

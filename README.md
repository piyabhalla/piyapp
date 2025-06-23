   # **PIYAPP**



### ***Piyapp*** is a simplified social media web application. It allows users to sign up, log in, create and view posts(text and images), like posts (multiple times like Medium's clap), and manage personal profiles with images and bios. The app is fully responsive, optimized for both desktop and mobile devices, and integrates real-time features using Firebase and Cloudinary.


## **➡️Project Setup Instructions:**

1. Clone the repo:
git clone https://github.com/piyabhalla/piyapp.git and cd piyapp

2. Install dependencies:
Run npm install to install all required packages.

3. Firebase setup:
Configure Firebase Auth (Email/Password), Firestore with profiles & posts collections.

4. Cloudinary integration:
Create an unsigned preset for image uploads.

5. Add environment variables:
Create a .env.local file and add Firebase credentials.

6. Start the app locally:
Run npm run dev to launch the development server.


## **➡️Technologies Used:**

1. Next.js 15.3.4 – Frontend framework

2. React.js – Component-based UI

3. Firebase Authentication – User login/signup

4. Firebase Firestore – Database for users, posts, likes

5. Cloudinary – Image upload for profile pictures and posts

6. Vercel – Web hosting and deployment

7. Git & GitHub – Version control and code collaboration

8. Visual Studio Code (VS Code) – Code editor


## **➡️Key Features Implemented:**

1. Secure User Authentication

   •Implemented using Firebase Auth

   •Supports login, signup, and logout

   •Additional features:

     →Show/hide password toggle
  
     →Forgot password reset via email
  
     →Confirm password during signup

2. User Profile Management

   •Users can create and update their profiles

   •Fields include: Name, Bio, Profile Picture, Gender, Date of Birth,

   •“My Profile” button on feed for direct access

3. Post Creation with Media Support

   •Users can publish posts containing: Text as well as Images (Cloudinary upload integrated)

   •Posts saved with timestamps and author details

4. Global Feed View

   •Displays all posts from all users

   •Each post shows: Content(Text), Image(if uploaded), Timestamp, “Posted by” with correct username, Total claps (likes)

5. Post Reactions (Claps)

   •Inspired by Medium’s clap system

   •Users can clap multiple times

   •Only total number of claps is stored—no user tracking

6. Responsive Design

   •Optimized UI/UX for both desktop and mobile devices

   •Clean, and user-friendly layout

7. Real-Time Updates

   •Feed and post data update live using Firestore's snapshot listeners
   

## **➡️Limitations / Known Issues:**

1. Users cannot edit their posts after publishing.

2. No email verification is implemented post sign-up.

3. All posts are globally visible without user-specific filtering (no access control).

4. Errors are shown via basic alerts without detailed debugging.



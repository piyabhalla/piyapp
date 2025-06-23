***Piyapp*** is a simplified social media web application. It allows users to sign up, log in, create and view posts, like posts (multiple times like Medium's clap), and manage personal profiles with images and bios. The app is fully responsive, optimized for both desktop and mobile devices, and integrates real-time features using Firebase and Cloudinary.


**Project Setup Instructions:**

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

**Technologies Used:**

1. Next.js 15.3.4 – Frontend framework

2. React.js – Component-based UI

3. Firebase Authentication – User login/signup

4. Firebase Firestore – Database for users, posts, likes

5. Cloudinary – Image upload for profile pictures and posts

6. Vercel – Web hosting and deployment

7. Git & GitHub – Version control and code collaboration

8. Visual Studio Code (VS Code) – Code editor

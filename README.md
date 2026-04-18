# CodeHelper AI

A beginner-friendly chatbot that helps with coding questions in Python, Java, C++, HTML, CSS, and JavaScript.

## Setup

1. Install Node.js from nodejs.org.
2. Clone or download this project.
3. Run `npm install` to install dependencies.
4. Get an OpenAI API key from platform.openai.com.
5. Set the API key: `set OPENAI_API_KEY=your_key_here` (Windows) or create a .env file.
6. Run `npm start` or `node server.js`.
7. Open http://localhost:3000 in your browser.

## Deployment

### Frontend (Vercel - Free)
1. Go to vercel.com, sign up/login.
2. Click "New Project".
3. Drag and drop the `public` folder (or connect GitHub repo).
4. Deploy. Get the frontend URL (e.g., codehelperai.vercel.app).

### Backend (Render - Free)
1. Push this project to GitHub:
   - Create a new repo on github.com.
   - Run: `git remote add origin https://github.com/yourusername/codehelperai.git`
   - Run: `git push -u origin master`
2. Go to render.com, sign up/login.
3. Click "New Web Service" > "Connect GitHub" > Select your repo.
4. Set build command: `npm install`
5. Set start command: `node server.js`
6. Add environment variable: `OPENAI_API_KEY` = your key.
7. Deploy. Get the backend URL (e.g., codehelperai.onrender.com).

### Connect Frontend to Backend
- In `public/script.js`, change `fetch('/chat', ...)` to `fetch('https://your-backend-url.onrender.com/chat', ...)`.
- Redeploy the frontend on Vercel.

## Features

- Explains coding concepts simply.
- Provides examples and debugs code.
- Friendly tutor-like responses.

## Viva Prep

- Project: Web chatbot for coding education.
- Tech: HTML/CSS/JS frontend, Node.js/Express backend, OpenAI API.
- Key concepts: Client-server architecture, API integration, static hosting.
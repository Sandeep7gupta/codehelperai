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

### Full App on Vercel (No card needed)
1. Go to vercel.com, sign up/login.
2. Click "New Project".
3. Connect your GitHub repository `codehelperai`.
4. Set the root directory to the project root (not `public`).
5. Deploy.

### Vercel Environment Variable
1. In your Vercel project dashboard, go to Settings > Environment Variables.
2. Add:
   - `OPENAI_API_KEY` as the name
   - your OpenAI API key as the value
3. Save and redeploy the project.

### How it works
- `public/index.html` is your website.
- `api/chat.js` is the backend API running on Vercel.
- `public/script.js` sends chat messages to `/api/chat`.

### Local testing
1. Run `npm install`.
2. Set `OPENAI_API_KEY` in your terminal or a `.env` file.
3. Run `node server.js`.
4. Open http://localhost:3000.

## Features

- Explains coding concepts simply.
- Provides examples and debugs code.
- Friendly tutor-like responses.

## Viva Prep

- Project: Web chatbot for coding education.
- Tech: HTML/CSS/JS frontend, Node.js/Express backend, OpenAI API.
- Key concepts: Client-server architecture, API integration, static hosting.
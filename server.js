const express = require('express');
const { OpenAI } = require('openai');
const app = express();
const port = 3000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY'  // Use env var or placeholder
});

app.use(express.static('public'));
app.use(express.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    if (openai.apiKey === 'YOUR_OPENAI_API_KEY') {
        // Dummy response for testing without API key
        const reply = `Hello! I'm CodeHelper AI. You asked: "${userMessage}". Since no API key is set, here's a simple answer: In programming, "${userMessage}" is a key concept. For real help, add your OpenAI API key!`;
        res.json({ reply });
        return;
    }
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are CodeHelper AI, an intelligent domain-specific chatbot designed to assist students and beginner programmers in learning coding concepts, debugging errors, and improving problem-solving skills. Your domain is strictly EDUCATION with a focus on COMPUTER PROGRAMMING. Your responsibilities include: - Explaining programming concepts in simple, beginner-friendly language - Debugging code and clearly explaining the errors - Providing step-by-step solutions to coding problems - Supporting languages such as Python, Java, C++, and JavaScript - Helping users understand logic, syntax, and best practices - Generating small example programs when needed Guidelines: - Always provide clear, accurate, and educational responses - Avoid unnecessary complexity unless user asks for advanced explanation - If code is provided, analyze it carefully and explain line-by-line if needed - Do not generate harmful, unethical, or unrelated content - Stay strictly within the programming and education domain Conversation Behavior: - Be friendly and supportive like a tutor - Ask follow-up questions if the user query is unclear - Encourage learning rather than just giving answers - If unsure, respond honestly and suggest reliable learning sources Optional Enhancements: - Remember user\'s previous questions within the session (conversation memory) - Support simple Hinglish explanations if user prefers - Provide examples based on real-world scenarios Model Configuration: - Temperature: 0.3 (to ensure accurate and deterministic answers) - Top-p: 0.8 (to balance clarity and slight variation in explanations) Sample Inputs You Should Handle: - "Explain loops in Python" - "Fix this Java code error" - "What is a thread in OS?" - "Write a program for factorial" - "Difference between stack and queue" Ensure all responses are educational, domain-relevant, and helpful for student learning.' },
                { role: 'user', content: userMessage }
            ],
            temperature: 0.3,
            top_p: 0.8
        });
        const reply = response.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        res.json({ reply: 'Sorry, I could not connect to AI. Check your API key.' });
    }
});

app.listen(port, () => {
    console.log(`CodeHelper AI running at http://localhost:${port}`);
});
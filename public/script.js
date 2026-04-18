document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;  // Don't send empty messages

    // Show user's message
    addMessage('You: ' + userInput, 'user');

    // Clear input
    document.getElementById('user-input').value = '';

    // Add loading
    addMessage('CodeHelper AI is thinking...', 'loading');

    // Send to server
    fetch('https://codehelperai.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Remove loading
        const loadingDiv = document.querySelector('.loading');
        if (loadingDiv) loadingDiv.remove();
        // Show AI's answer
        addMessage('CodeHelper AI: ' + data.reply, 'bot');
    })
    .catch(error => {
        // Remove loading
        const loadingDiv = document.querySelector('.loading');
        if (loadingDiv) loadingDiv.remove();
        addMessage('Error: Could not get answer. Try again.', 'bot');
    });
}

function addMessage(text, sender) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender;  // 'user' or 'bot' or 'loading'
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Auto-scroll
}
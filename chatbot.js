// Simple intent-based chatbot logic
const intents = [
  {
    tag: "greeting",
    patterns: ["hi", "hello", "hey", "good morning", "good afternoon"],
    responses: ["Hello! 👋", "Hi there!", "Hey! How can I help you today?"]
  },
  {
    tag: "goodbye",
    patterns: ["bye", "goodbye", "see you", "later"],
    responses: ["Goodbye!", "See you next time!", "Take care!"]
  },
  {
    tag: "thanks",
    patterns: ["thanks", "thank you", "thx"],
    responses: ["You're welcome!", "No problem!", "Glad to help!"]
  },
  {
    tag: "name",
    patterns: ["what is your name", "who are you"],
    responses: ["I'm your AI chatbot assistant.", "You can call me ChatBot!"]
  },
  // Add more intents here
];

function matchIntent(text) {
  text = text.toLowerCase();
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (text.includes(pattern)) {
        return intent.responses[Math.floor(Math.random() * intent.responses.length)];
      }
    }
  }
  return "Sorry, I didn't understand that. Can you rephrase?";
}

function addMessage(text, sender) {
  const chatlog = document.getElementById('chatlog');
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  chatlog.appendChild(msgDiv);
  chatlog.scrollTop = chatlog.scrollHeight;
}

document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const userText = input.value.trim();
  if (!userText) return;
  addMessage(userText, 'user');
  setTimeout(() => {
    const botReply = matchIntent(userText);
    addMessage(botReply, 'bot');
  }, 500);
  input.value = '';
});

const quotes = [
  "Learning never exhausts the mind. – Leonardo da Vinci",
  "The beautiful thing about learning is that nobody can take it away from you. – B.B. King",
  "Education is the passport to the future. – Malcolm X",
  "The expert in anything was once a beginner.",
  "Grow through what you go through."
];

document.getElementById('inspireBtn').onclick = function() {
  const quoteBox = document.getElementById('quoteBox');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = randomQuote;
  quoteBox.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
};

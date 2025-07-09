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

// Floating leaves animation
const leafSVG = `
<svg viewBox="0 0 40 40" fill="none">
  <ellipse cx="20" cy="20" rx="16" ry="8" fill="#43cea2"/>
  <path d="M20 20 Q28 8, 32 20 Q36 32, 20 36 Q4 32, 8 20 Q12 8, 20 20" fill="#388e3c"/>
</svg>
`;

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.animationDuration = (8 + Math.random() * 8) + 's';
  leaf.innerHTML = leafSVG;
  document.body.appendChild(leaf);
  setTimeout(() => leaf.remove(), 12000);
}

// Create several leaves at intervals
setInterval(createLeaf, 900);
for (let i = 0; i < 6; i++) setTimeout(createLeaf, i * 1400);

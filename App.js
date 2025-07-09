import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1 className="title">Welcome to My Impressive React Site</h1>
      <p className="subtitle">Click the button to see React in action!</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me! Count: {count}
      </button>
      <div className="box" style={{ transform: `rotate(${count * 15}deg)` }}>
        🔄 Rotating Box
      </div>
    </main>
  );
}

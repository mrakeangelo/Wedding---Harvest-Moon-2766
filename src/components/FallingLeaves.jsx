import React, { useEffect, useState } from 'react';

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const leafEmojis = ['🍂', '🍁', '🌿', '🍃'];
    const newLeaves = [];

    for (let i = 0; i < 15; i++) {
      newLeaves.push({
        id: i,
        emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
        size: 0.8 + Math.random() * 0.4
      });
    }

    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            fontSize: `${leaf.size}rem`,
            top: '-50px'
          }}
        >
          {leaf.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
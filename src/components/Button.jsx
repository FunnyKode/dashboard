import React from 'react';

function Button({ color, borderRadius, bgColor, text, size }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, borderRadius, color }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-fit`}
    >
      {text}
    </button>
  );
}

export default Button;

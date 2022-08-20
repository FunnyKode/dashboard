import React from 'react';

export function CustomButton({
  children = 'Accept',
  type = 'button',
  className = 'btn--secondary',
}) {
  return (
    <button type={type} className={`btn ${className}`}>
      {children}
    </button>
  );
}

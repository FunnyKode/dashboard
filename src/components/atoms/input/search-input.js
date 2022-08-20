import React from 'react';

export function SearchInput({
  type = 'text',
  className = 'focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm',
}) {
  const onChange = (event) => {
    const { target, value } = event;
    return value;
  };

  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      aria-label="Filter projects"
      placeholder="Filter projects..."
    />
  );
}

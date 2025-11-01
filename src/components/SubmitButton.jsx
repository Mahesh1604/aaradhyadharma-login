import React from 'react';

const SubmitButton = ({ children, ...props }) => (
  <button
    className="w-full rounded bg-indigo-600 py-2 px-4 font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    {...props}
  >
    {children}
  </button>
);

export default SubmitButton;

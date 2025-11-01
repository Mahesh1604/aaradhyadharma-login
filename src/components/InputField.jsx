import React from 'react';

const InputField = ({ label, type, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-semibold mb-1 break-words">
      {label}
    </label>
    <input
      className="block w-full rounded border border-gray-300 bg-white py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={type}
    />
  </div>
);

export default InputField;

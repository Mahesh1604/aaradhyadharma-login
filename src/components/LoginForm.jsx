import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    setError('');
    alert('Login successful!');
  };

  return (
    <form
      className="w-full max-w-md md:max-w-lg bg-white/90 backdrop-blur shadow-lg rounded-lg px-6 md:px-7 py-5 md:py-6 break-words whitespace-normal"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800 break-words">
        Login
      </h2>
      {error && (
        <div className="mb-3 text-red-600 text-sm text-center break-words">{error}</div>
      )}
      <InputField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <div className="mt-5">
        <SubmitButton type="submit">Login</SubmitButton>
      </div>
    </form>
  );
};

export default LoginForm;

import { useState } from 'react';
import bubbleImage from '../assets/bubble.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      {/* Main Container Card */}
      <div className="w-full max-w-[1000px] h-auto max-h-[600px] md:max-h-[640px] flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Bubble Image */}
        <div className="hidden lg:flex lg:w-[45%] items-center justify-start p-0 pl-0 -ml-4 lg:-ml-8">
          <img 
            src={bubbleImage} 
            alt="Decorative bubbles" 
            className="w-full h-full object-cover rounded-l-2xl rounded-r-[2.5rem]"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-5 bg-white overflow-hidden">
        <div className="w-full max-w-[27rem] md:max-w-[30rem] pb-4">
          {/* Logo/Brand Name */}
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-1 break-words bg-gradient-to-r from-[#8C36EA] to-[#6F65FF] bg-clip-text text-transparent">Ninja DAM</h1>
            <h2 className="text-2xl font-semibold break-words text-[#000000]">Sign In Form</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 break-words whitespace-normal font-semibold text-[13px] leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 break-words">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 break-words">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    // Feather eye-off icon
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9-4-10-8 1.21-2.84 3.26-5.26 6-7" />
                      <path d="M1 1l22 22" />
                      <path d="M10.73 5.08A10.94 10.94 0 0 1 12 4c5 0 9 4 10 8a10.94 10.94 0 0 1-4.22 5.02" />
                      <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
                    </svg>
                  ) : (
                    // Feather eye icon
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-1 text-left">
                <a href="#" className="text-xs text-blue-500 hover:text-blue-600 transition-colors">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2 px-3 text-sm bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all shadow-md"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-500 break-words font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>OR CONTINUE WITH</span>
              </div>
            </div>

            {/* Google Sign In Button */}
            <button
              type="button"
              className="w-full py-2 px-3 text-sm bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.7 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.3 16.2 18.8 14 24 14c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.7 6.1 29.6 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"/>
                <path fill="#4CAF50" d="M24 44c5.3 0 10.2-2 13.8-5.2l-6.4-5c-2 1.4-4.6 2.2-7.4 2.2-5.5 0-10.2-3.7-11.9-8.7l-6.6 5.1C7.4 38.9 15.1 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.7 4.9-6.4 8.4-11.3 8.4-3.3 0-6.4-1.2-8.7-3.1l-6.6 5.1C12 41.7 17.7 44 24 44c11.1 0 20-9 20-20 0-1.3-.1-2.2-.4-3.5z"/>
              </svg>
              <span className="break-words">Sign in with Google</span>
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-600 break-words font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                don't have an account?{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Register
                </a>
              </p>
            </div>
          </form>

          {/* Password Requirements Box (hidden on small screens) */}
          <div className="mt-5 p-3 bg-gray-100 rounded-lg border border-gray-200 hidden md:block font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 break-words">Password Requirements</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li className="flex items-start">
                <span className="mr-2"></span>
                <span>Minimum 8 Characters</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2"></span>
                <span>Atleast one uppercase letter</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2"></span>
                <span>Atleast one number</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2"></span>
                <span>Atleast one special character</span>
              </li>
            </ul>
          </div>

          {/* Support Contact */}
          <div className="mt-4 text-center">
            <p className="text-xs break-words font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Need Help ? Contact{' '}
              <a href="mailto:support@ninjadam.com" className="text-blue-500 hover:text-blue-600 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                support@ninjadam.com
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPopUp = ({ togglePopup, showPopup, isLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic based on the value of isLogin
    if (isLogin) {
      // Handle login
    } else {
      // Handle signup
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-md bg-white rounded-lg p-8">
            <button onClick={togglePopup} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent" />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent" />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent" />
                <button type="button" onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-800">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"> {isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">{isLogin ? 'or sign in with' : 'or sign up with'}</p>
            <button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
              <FaGoogle className="mr-2" /> Google
            </button>
            <p className="text-center text-blue-400 text-sm cursor-pointer hover:text-blue-500 mt-4" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Don't have an account? Sign Up here" : "Already have an account? Login here"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopUp;

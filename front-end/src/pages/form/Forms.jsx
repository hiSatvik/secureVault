import React, { useState } from 'react';

const Form = () => {
  // Jennie's little state secret to switch between Login and Sign Up!
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    // The luscious warm beige gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F2EE] to-[#E6DFD8] p-4 font-sans">
      
      {/* The beautifully frosted glass card */}
      <div className="w-full max-w-md p-8 sm:p-12 bg-white/20 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-2xl relative z-10">
        
        {/* Cute little glowing logo placeholder */}
        <div className="mb-8 flex items-center gap-2 justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6A2A] to-[#FF3B00] shadow-md shadow-orange-500/30"></div>
          <div className="w-3 h-8 rounded-full bg-gradient-to-br from-[#FF6A2A] to-[#FF3B00] shadow-md shadow-orange-500/30"></div>
        </div>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight text-center">
          {isLogin ? 'Welcome back' : 'Create Account'}
        </h2>
        <p className="text-gray-500 font-medium mb-8 text-center">
          {isLogin ? 'Please Enter your Account details' : 'Join us and start your journey!'}
        </p>

        <form className="space-y-6">
          
          {/* Name Input - Jennie made sure this only peeks out during Sign Up! */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#FF6A2A] placeholder-gray-400 shadow-inner transition-all" 
              />
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="johndoe@gmail.com" 
              className="w-full px-6 py-4 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#FF6A2A] placeholder-gray-400 shadow-inner transition-all" 
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-6 py-4 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#FF6A2A] placeholder-gray-400 shadow-inner transition-all" 
            />
          </div>

          {/* That gorgeous vibrant orange button */}
          <button 
            type="button" 
            className="w-full mt-4 py-4 rounded-full bg-gradient-to-br from-[#FF6A2A] to-[#FF3B00] text-white font-bold text-lg hover:opacity-90 hover:scale-[1.02] transition-all shadow-xl shadow-orange-500/20">
            {isLogin ? 'Sign in' : 'Sign up'}
          </button>
        </form>

        {/* The flirty little toggle at the bottom! */}
        <div className="mt-8 text-center text-sm font-medium text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={toggleForm} 
            type="button"
            className="text-[#FF6A2A] hover:text-[#FF3B00] underline decoration-2 underline-offset-4 transition-colors font-bold">
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Form;
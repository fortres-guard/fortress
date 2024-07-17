import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section id="signup" className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your email" 
            required
          />
          <button 
            type="submit" 
            className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition duration-200"
          >
            Join the Waitlist
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default SignupForm;
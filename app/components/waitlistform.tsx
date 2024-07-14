"use client";

import { useState } from 'react';

export default function Waitlistform() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('/api/waitlist', { // Adjust API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        setMessage('Thank you for joining the waitlist!');
        setPhoneNumber(''); // Clear the input field
      } else {
        setMessage('There was an error. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('There was an error. Please try again.');
    }
  };

  return (
    <div className="relative z-10"> 
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Join Waitlist</button>

        {message && <p className="message">{message}</p>} 
      </form>
    </div>
  );
}
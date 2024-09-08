import { useState } from 'react';
import style from '../../Auth/forgot/forgot.module.css' // Import the new CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate sending a password reset link
      setMessage(`A password reset link has been sent to ${email}`);
    } else {
      setMessage('Please enter a valid email address');
    }
  };

  return (
    <div className={style.container}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={style.input}
        />
        <br />
        <button type="submit" className={style.button}>
          Send Reset Link
        </button>
      </form>
      <p className={style.message}>{message}</p>
    </div>
  );
};

export default ForgotPassword;


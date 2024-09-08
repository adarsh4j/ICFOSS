import Style from '../../src/index.module.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';  // Only import Link, no Router here

function Login() {
const [email,setemail]=useState('');
const [password,setpasword]=useState('');
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/login', { email, password });
    alert('Login successful!');
    // Redirect to dashboard or home page
  } catch (error) {
    alert('Login failed!');
  }
};
  return (
    <div className={Style.card}>
      <h3 className={Style.title}>WELCOME BACK</h3>
      <form onSubmit={handleSubmit}>
      <div className={Style.inputBox}>
          <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}placeholder='                    Email' required />
        </div>
        <div className={Style.inputBox}>
          <input type="password" value={password} onChange={(e)=>setpasword(e.target.value)} placeholder='                 Password'required />
        </div>
        <div className={Style.inputBox}>
          <button type="submit"> Login </button>
        </div>
        <p className={Style.forgot}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className={Style.account}>
          <Link to="/Register">Don't have an account?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;


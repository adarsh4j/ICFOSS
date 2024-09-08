import Style from '../../Auth/register/register.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await axios.get('/api/register', { email, password });
      navigate('/login');
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed!');
    }
  }
  return (
    <div className={Style.card}>
      <h3 className={Style.title}>REGISTER</h3>
      {/* <hr /> */}
      <form onSubmit={handleSubmit}>
      <div className={Style.inputBox}>

          <input type="text" placeholder='                    Name' required />
        </div>
        <div className={Style.inputBox}>
          <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='                    Email' required />
        </div>
        <div className={Style.inputBox}>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='                Password'required />
        </div>
        <div className={Style.inputBox}>
          <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}placeholder='         Confirm Password'required />
        </div>
        <div className={Style.inputBox}>
          <button type="submit"> Sign up </button>
        </div>
        </form>
    </div>
  );
}
export default Account
import Style from './index.module.css';
import Login from './Auth/login';
import Account from './Auth/register/register.jsx';
import ForgotPassword from './Auth/forgot/forgot.jsx';
import logo from '../src/assets/logo.png';
import symbol from '../src/assets/kerala.png';
import symbol2 from '../src/assets/image.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Router should only be imported here

function App() {
  return (
    <Router>  {/* <Router> should only be here in your entire app */}
      <div className={Style.container}>
        <a href="https://icfoss.in/" target="_blank" rel="noopener noreferrer">
            <img className={Style.icon} src={logo} alt="ICFOSS" />
        </a>
        <img className={Style.kerala} src={symbol} alt="Kerala Symbol" />
        <img className={Style.img} src={symbol2} alt="Image Symbol" />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Register" element={<Account />} />

        </Routes>

        <footer className={Style.footer}>
          <p>© 2024 ICFOSS. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

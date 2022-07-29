import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
function Login() {
  const [Username, setUserName] = useState('');
  const [Password, SetPassword] = useState('');
  // const [Submit, SetSubmit] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert('Login Page');
  };

  return (
    <>
      
      <form onSubmit={SubmitHandler} >
          <br/><br/><br/>
      <h1>This Is Login Page </h1>
        <input
          type="text" id="email" maxlength="50" placeholder="E-mail" required
          name="email"
          value={Username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text" id="password" placeholder="Password" required
          name="password"
          value={Password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button className='loginBtn'>Login </button>
        <span><Link to="Welcome">
         <h1 className='Loginnextpage'>Welcom</h1> 
        </Link></span>
      </form>
    </>
  );
}
export default Login;

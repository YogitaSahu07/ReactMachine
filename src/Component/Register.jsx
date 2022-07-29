import { Link } from 'react-router-dom';

import React, { useState } from 'react';
// import './style.css';
function Register() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCPass] = useState('');
  // const [submit, setSubmit] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='ReContainer'>
      
      <form name="fromData" onSubmit={submitHandler} className='RegisterationForm'>
      <br/><br/><br/>
          <input
            type="text" 
            type="text" id='fname' pattern="[a-zA-Z]{2,15}" minlength="2" maxlength="15" placeholder="First-Name" required
            name="fname"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            type="text" id="lname" pattern="[a-zA-Z]{2,15}" minlength="2" maxlength="15" placeholder="Last-Name" required
            name="lname"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />

          <input
            type="text"  id="email" maxlength="50" placeholder="E-mail" required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"  id="password" placeholder="Password" required
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            type="text" id="cpassword"  placeholder="Confirm-Password" required
            name="Cpassword"
            value={cpass}
            onChange={(e) => setCPass(e.target.value)}
          />
        <input type="Submit" value="Register" className='btn' />
        <span><Link to="Login">
         <h1 className='Loginnextpage'> LoginPage</h1> 
        </Link></span>
      </form>
    </div>
  );
}
export default Register;

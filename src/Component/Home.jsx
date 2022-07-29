import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <h1>My Registration Form</h1>
      <Link to="Register">
        <button>Register</button>
      </Link>
      <span>-</span>
      <Link to="Login">
        <button>Login</button>
      </Link>
    </>
  );
}
export default Home;

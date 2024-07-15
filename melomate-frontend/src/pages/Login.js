import React from 'react'

const Login = () => {
  return (
    <div className='form'>
      <form class="login-form" method="post">
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required/>
        <a class="btn" href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign in
        </a>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  )
}

export default Login

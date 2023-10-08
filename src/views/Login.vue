<template>
  <center>
    <div class="wrapper">
      <form action="">
          <h1>Login </h1>
          <div class="input-box">
              <input type="text" placeholder="Username" required>
          </div>
          <div class="input-box">
              <input type="password" placeholder="Password" required>
          </div>
          <div class="remember-forgot">
              <label>
                  <input type="checkbox">Remember me
              </label>
              <a href="#">Forgot password?</a>
          </div>
          <button type="submit" class="btn">Login</button>
  
          <div class="register-link">
            <p>Don't have an account? <router-link to="/register">Register</router-link></p>
          </div>
      </form>
  </div>
  </center>

  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // You can implement authentication logic here
        // For a simplified example, we'll just display the entered credentials
        alert(`Logging in with username: ${this.username} and password: ${this.password}`);
      },
    },
  };
  </script>
  
    <style scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  body{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
  }
  .wrapper{
      width: 420px;
      background: transparent;
      border:2px solid rgba(255, 255, 255, .2);
      backdrop-filter: blur(20px);
      box-shadow: 0 0 10px rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 10px;
      padding: 30px 40px;
  }
  .wrapper h1{
      font-size: 36px;
      text-align: center;
  }
  .wrapper .input-box{
      width: 100%;
      height: 60px;
      position: relative;
      margin-top: 20px;
  }
  .input-box input{
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      border: 2px solid rgba(255, 255, 255, .2);
      border-radius: 40px;
      font-size: 16px;
      color: #fff;
      padding: 20px 40px 20px 20px;
  }
  .input-box input::placeholder{
      color: #fff;
  
  }
  .wrapper .remember-forgot{
      display: flex;
      justify-content: space-between;
      font-size: 14.5px;
      margin: 15px 5px 15px;
  }
  .remember-forgot label input{
  accent-color: #fff;
  margin-right: 3px;
  }
  .remember-forgot a {
      color: #fff;
      text-decoration: none;
  }
  .remember-forgot a:hover{
      text-decoration: none;
      color: black;
  }
  .wrapper .btn{
      width: 100%;
      height: 45px;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      cursor: pointer;
      color: #333;
      font-weight: 700;
  }
  .wrapper .register-link{
      font-size: 14.5px;
      text-align: center;
      margin: 20px 0 15px;
  
  }
  .register-link p a{
      color: #fff;
      text-decoration: none;
      font-weight: 600;
  }
  .register-link p a:hover{
      text-decoration: none;
      color: black;
  }
    </style>
  
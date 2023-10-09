<template>
    <h1> a</h1>
    <div class="navbar">
      <div class="navbar-lamy">
        <RouterLink to="/"><a>Lamy</a></RouterLink>
      </div>
      <div class="navbar-left">
        <RouterLink to="/"><a>Home</a></RouterLink>
        <RouterLink to="/store"><a>Store</a></RouterLink>
        <RouterLink to="/topup"><a>TopUP</a></RouterLink>
      </div>
      <div class="navbar-right">
        <RouterLink to="/login"><a>SignIN</a></RouterLink>
        <RouterLink to="/register"><a>SignUP</a></RouterLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body, ul {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  /* Center the navigation bar */
  .navbar {
    background-color: #0ea5e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  
  .navbar a {
    color: white;
    text-align: center;
    padding: 18px 18px;
    text-decoration: none;
  }
  
  /* Style the navigation bar links on hover */
  .navbar a:hover {
    background-color: #0edce9;
  }
  
  /* Update the font size of .navbar-lamy */
  .navbar-lamy {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 300px;
    margin-right : 100px
  }
  
  .navbar-left {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: -600px;
  }
  
  .navbar-right {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 100px;
    margin-right : 300px
  }
  </style>
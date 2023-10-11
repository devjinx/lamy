<template>
  <h1> a</h1>
  <div class="navbar">
    <div class="navbar-lamy">
      <RouterLink to="/"><a>Lamy</a></RouterLink>
      <RouterLink to="/"><a>Home</a></RouterLink>
      <RouterLink to="/store"><a>Store</a></RouterLink>
      <RouterLink to="/topup"><a>Topup</a></RouterLink>
    </div>
    <div class="navbar-right">
      <RouterLink to="/login"><a>Sign in</a></RouterLink>
      <RouterLink to="/register"><a>Sign up</a></RouterLink>
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
    background: linear-gradient(to top, #0ea5e9, #65C2F5);
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

  /* Update the font size of .navbar-lamy */
  .navbar-lamy {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; /* Center horizontally within the screen */
  }

  /* Center .navbar-right horizontally */
  .navbar-right {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; /* Center horizontally within the screen */
  }
</style>

<template>
  <div class="home">
    <section id="lamyPage" class="background-image">
      <div class="content">
        <div class="logo-container">
          <img src="../assets/Lamy_logo_png.png" alt="logolamy" height="350" width="350" class="lamy_logo_in">
          <h1 class="lamy_text_in">คิดถึงเว็บเช่า</h1>
          <h2 class="lamy_text_in">คิดถึงลามี่</h2>
        </div>
      </div>
    </section>
    <section id="lamyService">
      <h1>Test2</h1>
    </section>
    <section id="lamyPortfolio">
      <h1>Test3</h1>
    </section>
    <section id="lamyAboutme">
      <h1>Test4</h1>
    </section>
    <section id="lamyTeamDev">
      <h1>Test5</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.home {
  font-family: 'Kanit', sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Add this to prevent any overflowing content */
  margin: 0;
  padding: 0;
}

#lamyPage {
  background: linear-gradient(to top right, #0ea5e9, #b2e0fa);
  text-align: center;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#lamyPage img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  opacity: 0.4; /* 40% transparency */
}

#lamyPage h1 {
  position: absolute; /* Position the text absolutely within the container */
  top: 42%; /* Adjust top position as needed */
  left: 49%; /* Adjust left position as needed */
  transform: translate(-50%, -50%); /* Center the text within the container */
  color: white; /* Text color */
  font-size: 80px;
  animation: slideLeftToRighth1 1.5s ease forwards; /* Apply animation */
}
#lamyPage h2 {
  position: absolute; /* Position the text absolutely within the container */
  top: 53%; /* Adjust top position as needed */
  left: 44.6%; /* Adjust left position as needed */
  transform: translate(-50%, -50%); /* Center the text within the container */
  color: white; /* Text color */
  font-size: 60px;
  font-family: 'Kanit', sans-serif;
  animation: slideLeftToRighth2 1.5s ease forwards; /* Apply animation */
}

.lamy_logo_in {
    animation: lamy_logo_in 1.5s ease;
}

@keyframes lamy_logo_in {
    from {
        opacity: 0;
        scale: 2;
        transform: translateY(-100px) translateX(100px);
    }
    to {
        opacity: .25;
        scale: 1;
        transform: translateY(0px) translateX(0px);
    }
}

#lamyService, #lamyPortfolio, #lamyAboutme, #lamyTeamDev {
  background: white;
  color: initial;
  padding: 0; /* Remove padding */
  min-height: 100vh; /* Take up the full viewport height */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
}

@keyframes slideLeftToRighth1 {
  from {
    left: 44%; /* Start from the left side */
    opacity: 0; /* You can adjust opacity as needed */
  }
  to {
    left: 49%; /* Slide to the original position */
    opacity: 1;
  }
}

@keyframes slideLeftToRighth2 {
  from {
    left: 40%; /* Start from the left side */
    opacity: 0; /* You can adjust opacity as needed */
  }
  to {
    left: 44.6%; /* Slide to the original position */
    opacity: 1;
  }
}
</style>

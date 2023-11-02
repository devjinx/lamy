<template>
  <div class="home">
    <section id="lamyPage" class="background-image">
      <div class="content">
        <img src="../assets/Lamy_logo_png.png" alt="logolamy" height="350" width="350">
        <h1>Test1</h1>
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
  background: linear-gradient(to bottom, #0ea5e9, #65C2F5);
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
  /* Add any other styles you want to apply to these sections */
}
</style>

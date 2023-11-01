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
.home {
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: 'Kanit', sans-serif;
  height: 100%; /* Ensure the container fills the viewport */
}

.background-image {
  background: linear-gradient(to top, #0ea5e9, #65C2F5); /* Background color for the id="lamyPage" section */
  width: 100%;
  height: 100%; 
  text-align: center;
  color: white; /* Text color on top of the background */
  padding: 20px; /* Add padding to the text for better visibility */
  min-height: 100vh; /* Make sure the content fills the entire viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-image img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
}

/* Reset the background color for the other sections */
#lamyService,
#lamyPortfolio,
#lamyAboutme,
#lamyTeamDev {
  background-color: transparent;
  color: initial;
}
</style>

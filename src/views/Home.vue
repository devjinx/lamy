<template>
  <div class="home">
    <Navbar />
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
      <h1>บริการของเรา</h1>
      <p>บริการเว็บเช่าที่จะมอบประสบการณ์ใหม่ให้กับคุณ Lamy เป็นบริการย่อยในเครือ AONA</p>
    </section>
    <section id="lamyPortfolio">
      <h1>ผลงานของเรา</h1>
    </section>
    <section id="lamyAboutme">
      <h1>เกี่ยวกับเรา</h1>
    </section>
    <section id="lamyTeamDev">
      <h1>ทีมพัฒนา</h1>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer  
  }
};
</script>

<style>
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
  position: absolute;
  bottom: 42.5%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  animation: slideLeftToRighth1 1.5s ease forwards;
}

#lamyPage h2 {
  position: absolute;
  bottom: 40%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  font-family: 'Kanit', sans-serif;
  animation: slideLeftToRighth2 1.5s ease forwards;
}

.lamy_logo_in {
  animation: lamy_logo_in 1.5s ease;
}

@keyframes lamy_logo_in {
  from {
    opacity: 0;
    transform: scale(2) translateY(-100px) translateX(100px);
  }
  to {
    opacity: 0.25;
    transform: scale(1) translateY(0px) translateX(0px);
  }
}

@keyframes slideLeftToRighth1 {
  from {
    left: 40%;
    opacity: 0;
  }
  to {
    left: 45%;
    opacity: 1;
  }
}

@keyframes slideLeftToRighth2 {
  from {
    left: 38.6%;
    opacity: 0;
  }
  to {
    left: 42.6%;
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  #lamyPage h1 {
    font-size: 28px;
  }
  #lamyPage h2 {
    font-size: 24px; 
  } 
  @keyframes slideLeftToRighth1 {
  from {
    left: 30%;
    opacity: 0;
  }
  to {
    left: 45%;
    opacity: 1;
  }
}
  @keyframes slideLeftToRighth2 {
  from {
    left: 27%;
    opacity: 0;
  }
  to {
    left: 40%;
    opacity: 1;
  }
}
}
#lamyService {
  background: whitesmoke;
  padding: 0;
  min-height: 30vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#lamyService h1 {
  font-size: 32px;
}


#lamyPortfolio{
  background: white;
  color: initial;
  padding: 0; 
  min-height: 100vh; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
}
#lamyAboutme {
  background: white;
  color: initial;
  padding: 0;
  min-height: 100vh; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
}
 #lamyTeamDev {
  background: white;
  color: initial;
  padding: 0;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
}
</style>
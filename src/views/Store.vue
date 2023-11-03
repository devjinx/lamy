<template>
  <div class="homeTop">
    <section id="lamyPageTop" class="background-image">
      <div class="contentTop">
        <img src="../assets/Lamy_logo_png.png" alt="logolamy" height="300" width="300">
        <h1>ร้านค้า</h1>
        <p>เลือกหมวดหมู่ที่คุณต้องการ</p>
      </div>
    </section>
    <section id="lamyService">
      <h1>Test2</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped>
.homeTop {
  padding-top: 40px;
  padding-bottom: 60px;
  font-family: 'Kanit', sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  overflow: hidden; /* Add this to prevent any overflowing content */
  margin: 0%;
  padding: 0%;
}

#lamyPageTop {
  background: linear-gradient(to bottom, #0ea5e9, #65C2F5);
  text-align: center;
  color: white;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative; /* Add this to position child elements */
}

.contentTop {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Add this to position child elements */
}

#lamyPageTop img {
  display: block;
  margin: 0 auto;
  width: 250px;  /* Set the width to 250px */
  height: 250px; /* Set the height to 250px */
  opacity: 0.4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

#lamyPageTop h1 {
  font-size: 32px;
  z-index: 2;
}

#lamyPageTop p {
  font-size: 24px;
  z-index: 2;
}


/* Reset the background color for the other sections */
#lamyService {
  background: white;
  color: initial;
  padding: 20px;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <Navbar />
  <div class="Topup">
    <section id="lamyPageTop" class="background-image">
      <div class="contentTop">
        <p></p>
        <img src="../assets/Lamy_logo_png.png" alt="logolamy" height="300" width="300">
        <h1>เติมเงิน</h1>
        <h2>เลือกช่องทางการเติมเงินที่คุณต้องการ</h2>
      </div>
    </section>
    <section id="lamyServiceTop">
      <div class="button-container">
        <button class="button">
          <img src="../assets/money-transfer.png" height="100" width="100">
        </button>
        <button class="button">
          <img src="../assets/anupao_truewall-removebg-preview.png" height="100" width="100">
        </button>
        <button class="button">
          <img src="../assets/truemoneywallet.png" height="100" width="100">
        </button>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Topup',
  components : {
    Navbar,
    Footer
  },
};
</script>

<style>
.homeTop {
  padding-top: 40px;
  padding-bottom: 60px;
  font-family: 'Kanit', sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  position: relative;
}

.contentTop {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

#lamyPageTop img {
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 250px;
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
  margin: 0;
}

#lamyPageTop h2 {
  font-size: 24px;
  z-index: 2;
  margin: 0;
}

#lamyPageTop .header-text {
  flex-direction: row;
  align-items: center;
}

#lamyPageTop .header-text h1 {
  margin-right: 10px;
}

#lamyServiceTop {
  background: white;
  color: initial;
  padding: 20px;
  min-height: 30vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#lamyServiceTop .button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20%;
}

#lamyServiceTop .button {
  width: 400px;
  height: 250px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  margin: 20px;
  flex: 0 0 auto;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
}
.user-profile {
  color: #fff; /* Style for the username display */
  font-size: 18px;
  margin-top: 10px;
}
</style>
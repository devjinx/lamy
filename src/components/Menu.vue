<template>
  <div class="Menu">
    <ul>
      <li><router-link to="/" class="lamy-link"><img src="../../public/Lamy_logo_png.png" width="32" height="32" class="lamy-logo"> Lamy</router-link></li>
      <li :class="{ active: currentRoute === '/dashboard' }"><router-link to="/dashboard">Dashboard</router-link></li>
      <li :class="{ active: currentRoute === '/dashboard/settings' }"><router-link to="/dashboard/settings">ตั้งค่าเว็บไซต์</router-link></li>
      <li :class="{ active: currentRoute === '/dashboard/productcategories' }"><router-link to="/Order">จัดการหมวดหมู่สินค้า </router-link></li>
      <li :class="{ active: currentRoute === '/dashboard/creditUser' }"><router-link to="/Products">ปรับจำนวนเครดิตของผู้ใช้ </router-link></li>
      <li :class="{ active: currentRoute === '/dashboard/ruleUser' }"><router-link to="/SalesReport">ปรับบทบาทของผู้ใช้</router-link></li>
      <li :class="{ active: currentRoute === '/dashboard/historytopup' }"><router-link to="/dashboard/historytopup">ประวัติการเติมเงิน</router-link></li>
      <li :class="{ active: currentRoute === '/dashboard/historyBuy' }"><router-link to="/Settings">ประวัติการสั่งซื้อสินค้า </router-link></li>
      <li><router-link to="/" @click="logout">Sign Out</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      currentRoute: this.$route.path,
    };
  },
  methods: {
    logout() {
      console.log("User logged out");
    },
  },
};
</script>

<style>
body {
  background-color: #fff;
}
.Menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px; /* Adjusted width */
  height: 100%;
  background-color: #D7DBDD; /* Changed to white background */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Added shadow for depth */
}

.Menu ul {
  list-style-type: none;
  padding: 0;
}

.Menu ul li {
  margin-bottom: 10px;
}

.Menu ul li a {
  color: #333; /* Changed to a darker font color */
  text-decoration: none;
  text-align: left;
  font-size: 16px;
  display: block;
  padding: 10px 15px;
  border-radius: 5px; /* Added rounded corners */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.Menu ul li a:hover {
  background-color: #3498db; /* Blue background for active/hover */
  color: #fff; /* White text for active/hover */
}

.Menu ul li.active a {
  background-color: #3498db; /* Blue background for active item */
  color: #fff; /* White text for active item */
}

.Menu ul li .lamy-link {
  font-size: 24px;
  font-weight: bold;
}

.Menu ul li .lamy-link .lamy-logo {
  margin-bottom: 5px;
  margin-right: 10px;
}

.pro-section {
  margin-top: 30px; /* Added space before the pro section */
}

.pro-card {
  background-color: #3498db; /* Blue background */
  padding: 15px;
  border-radius: 5px; /* Rounded corners */
  text-align: center;
}

.pro-badge {
  color: #fff; /* White text */
  font-weight: bold;
}
</style>
<template>
    <div class="Menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Dashboard/">ตั้งค่าเว็บไซต์</router-link></li>
        <li><router-link to="/Dashboard/">ตั้งค่าข้อความและรูปภาพต่างๆ</router-link></li>
        <li><router-link to="/Dashboard/">ตั้งค่าช่องทางการรับเงิน</router-link></li>
        <li><router-link to="/Dashboard/">จัดการหมวดหมู่สินค้า</router-link></li>
        <li><router-link to="/Dashboard/">จัดการสินค้า</router-link></li>
        <li><router-link to="/Dashboard/">จัดการสต็อกสินค้า</router-link></li>
        <li><router-link to="/Dashboard/">จัดการคิว ID-Pass</router-link></li>
        <li><router-link to="/Dashboard/">จัดการผู้ใช้</router-link></li>
        <li><router-link to="/Dashboard/">ปรับจำนวนเครดิตของผู้ใช้</router-link></li>
        <li><router-link to="/Dashboard/">ปรับบทบาทของผู้ใช้</router-link></li>
        <li><router-link to="/Dashboard/">ประวัติการเติมเงิน</router-link></li>
        <li><router-link to="/Dashboard/">ประวัติการสั่งซื้อสินค้า</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Menu",
  };
</script>
  
  <style scoped>
  .Menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px; /* Adjust as needed */
    height: 100%;
    background-color: #999;
    padding: 20px;
  }
  
  .Menu ul {
    list-style-type: none;
    padding: 0;
  }
  
  .Menu ul li a {
    color: black;
    text-decoration: none;
    text-align: center;
    display: block;
    padding: 10px 0;
  }
  
  .Menu ul li a:hover {
    background-color:whitesmoke;
  }
  </style>
  
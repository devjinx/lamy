<template>
  <div class="Dashboard">
        <section id="status-summary">
            <h2>Summary of Status and Statistics</h2>
            <!-- Content -->
        </section>

        <section id="website-setup">
            <h2>Set up Website</h2>
            <!-- Content -->
        </section>

        <section id="message-setup">
            <h2>Set up Messages and Images</h2>
            <!-- Content -->
        </section>

        <section id="payment-channels">
            <h2>Set up Payment Channels</h2>
            <!-- Content -->
        </section>

        <section id="product-categories">
            <h2>Manage Product Categories</h2>
            <!-- Content -->
        </section>

        <section id="products-management">
            <h2>Manage Products</h2>
            <!-- Content -->
        </section>

        <section id="stock-management">
            <h2>Manage Product Stock</h2>
            <!-- Content -->
        </section>

        <section id="id-pass-queue">
            <h2>Manage ID-Pass Queue</h2>
            <!-- Content -->
        </section>

        <section id="user-management">
            <h2>Manage Users</h2>
            <!-- Content -->
        </section>

        <section id="user-credits">
            <h2>Adjust Quantity User Credits</h2>
            <!-- Content -->
        </section>

        <section id="user-role">
            <h2>Adjust the User's Role</h2>
            <!-- Content -->
        </section>

        <section id="top-up-history">
            <h2>Top-Up History</h2>
            <!-- Content -->
        </section>

        <section id="order-history">
            <h2>Add-on Product Order History</h2>
            <!-- Content -->
        </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    Footer
  }
};
</script>
<style>
.Dashboard{
  padding-top: 100px; 
}
</style>
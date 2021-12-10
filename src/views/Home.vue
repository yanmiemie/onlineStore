<template>
  <div class="home">
    <Navbar></Navbar>
    <Login></Login> 
    <Header></Header> 
    <!-- <a href="https://firebasestorage.googleapis.com/v0/b/nm-tayal.appspot.com/o/PDF%2F%E4%B8%80%E5%B9%B4%E7%B4%9A%E6%B3%B0%E9%9B%85%E6%B2%B3%E5%B7%9D%E6%BC%81%E6%92%88%E6%96%87%E5%8C%96.pdf?alt=media&token=573aa98c-8dfa-4553-84fe-05651c5c83d1" class="standard-btn">Click Me</a> -->
    <!-- <Banner></Banner> -->
    <Footer></Footer>
  </div>
</template>
 
<script>
import Header from '@/components/Header.vue'; 
import Banner from '@/components/Banner.vue'; 
import Footer from '@/components/Footer.vue'; 

export default {
  name: "Home",
  components: {
    Header, Banner, Footer
  }
};
</script>

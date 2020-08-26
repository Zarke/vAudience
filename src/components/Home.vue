<template>
  <header class="header">
    <Logo/>
    <Greeting/>
  </header>
  <div class="body">
    <Login/>
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
import Logo from './Logo.vue'
import Greeting from "./Greeting";
import Login from "./Login";
import Footer from "./Footer";
export default {
  name: 'Home',

  components: {
    Footer,
    Logo,
    Greeting,
    Login,
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
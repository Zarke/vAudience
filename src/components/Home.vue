<template>
  <header class="header" :class="(store.state.theme === 'Light')?'header-light':'header-dark'">
    <Logo/>
    <Greeting/>
  </header>
  <div class="body" :class="(store.state.theme === 'Light')?'body-light':'body-dark'">
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
import {useStore} from 'vuex'
export default {
  name: 'Home',

  setup() {
    const store  = useStore()

    return {store}
  },

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
    margin: 0 -0.8rem  -0.8rem;
    &-light{
      background-color: white;
    }
    &-dark {
      background-color: black;
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 -0.8rem 0 -0.8rem;
    &-light {
      background-color: white;
    }
    &-dark {
      background-color: black;
    }
  }
</style>
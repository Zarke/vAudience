<template>
  <span class="greeting" :class="(store.state.theme === 'Light')?'greeting-light':'greeting-dark'">Greetings {{greeting}}</span>
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Greeting',

  setup() {
    const store = useStore();
    const greeting = computed(() => {
      if (store.state.loggedIn === "") {
        return 'user'
      } else {
        return store.state.loggedIn
      }
    })


    return {greeting, store}
  }
}
</script>

<style lang="scss">
  .greeting{
    margin-right: 10rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.2rem;
    &-light {
      text-shadow: 0.2rem 0.2rem lightgray;
      color: black;
    }
    &-dark {
      color: white;
    }
  }
</style>
<template>
  <span class="greeting">Greetings {{greeting}}</span>
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

    return {greeting}
  }
}
</script>

<style scoped>
  .greeting {
    margin-right: 10rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.2rem;
    text-shadow: 0.2rem 0.2rem lightgray;
  }
</style>
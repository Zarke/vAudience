<template>
  <img :src="logo" alt="logo white" class="logo">
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Logo',
  
  setup() {
    const store = useStore();
    const logo = computed(() => {
      if (!store.state.theme.localeCompare("Light")) {
        return 'https://cyrap.com/vaudience_logo_black.png'
      } else {
        return 'https://cyrap.com/vaudience_logo_white.png'
      }
    })

    return {logo}
  }
}
</script>

<style scoped>
  .logo {
    width: 12rem;
    height: 8rem;
    margin-left: 5rem;
  }
</style>
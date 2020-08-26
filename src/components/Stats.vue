<template>
  <div class="stats">
    BALL POSSESION %
    <div class="home">{{home}}</div>
    <div class="away">{{away}}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'Stats',
  setup() {
    const home = ref(0)
    const away = ref(0)

    const getStats = () => {
      fetch('https://cors-anywhere.herokuapp.com/cyrap.com/football_data.json')
      .then(response => response.json())
      .then(data => {
          home.value = data.statistics["Ball Possession"].home
          away.value = data.statistics["Ball Possession"].away
      })
    }

    setInterval(getStats, 10000)

    return {getStats, home, away}
  }
}
</script>

<style lang="scss">
  .stats {
    background-color: black;
    position: relative;
    color: white;
    font-size: 0.8rem;
    width: 50%;
    .home {
      float: left;
      height: 100%;
      width: 25%;
      background-color: red;
    }
    .away {
      float: right;
      height: 100%;
      width: 25%;
      background-color: green;
    }
  }
</style>
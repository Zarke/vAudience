<template>
  <div class="container" >
    <video controls autoplay @mouseover="overlay = true" @mouseleave="overlay = false">
      <source src="https://cyrap.com/videoplayback.mp4" type="video/mp4" >
      Your browser does not support the video tag.
    </video>
    <Heart v-show="show" class="overlay-heart"/>
    <Stats v-show="show" class="overlay-stats"/>
  </div>
</template>

<script>
import Heart from "./Heart";
import Stats from "./Stats"
import {ref, watch} from 'vue'
export default {
   name: 'Video',
  setup() {
     const overlay = ref(false)
     const show = ref(false)

     watch(overlay, (overlayNew, overlayOld) => {
       if(overlayNew && !overlayOld) {
          show.value = true
       } else if(!overlayNew && overlayOld) {
         setTimeout(() => {
           show.value = false
         }, 1000)
       }
     })

    return {overlay, show}
  },
  components: {
    Heart,
    Stats,
  }
}
</script>

<style lang="scss">
  .container {
    position: relative;

    .overlay-heart {
      position: absolute;
      bottom: 70px;
      right: 1rem;
      background-color: transparent;
      width: 4rem;
    }
    .overlay-stats {
      position: absolute;
      top: 0;
      left: 25%;
    }
  }
</style>
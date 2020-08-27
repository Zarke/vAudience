<template>
  <footer class="footer" :class="(store.state.theme === 'Light')?'footer-light':'footer-dark'">
    <label class="switch">
      <input type="checkbox" @change="switchTheme">
      <span class="slider round"></span>
    </label>
  </footer>
</template>

<script>
import {useStore} from "vuex";

export default {
  name:'Footer',
  setup() {
    const store = useStore()
    const switchTheme = () => {
      if(store.state.theme === "Light"){
        store.commit("setTheme", "Dark")
      } else {
        store.commit("setTheme", "Light")
      }
    }

    return {switchTheme, store}
  }
}
</script>

<style lang="scss">
  .footer{
    display: flex;
    justify-content: center;
    padding: 1rem 0 1rem 0;
    margin: 0 -0.8rem -0.8rem -0.8rem;
    &-light{
      background-color: white;
    }
    &-dark{
      background-color: black;
    }
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
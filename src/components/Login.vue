<template>
  <div class="login">
    <input v-show="isNotLoggedIn" type="text" v-model="username" placeholder="username" >
    <button @click="login">{{btnText}}</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: 'Logo',
  setup() {
    const store = useStore()
    const username = ref('')
    const btnText = ref('Log in')
    const router = useRouter()
    const isNotLoggedIn = computed( () => {
      return store.state.loggedIn === "";
    })

    const login = () => {
      if(isNotLoggedIn.value && username.value !== "") {
        store.commit("setUsername", username.value)
        isNotLoggedIn.value != isNotLoggedIn.value
        router.push('video')
        btnTextChange()
      } else {
        store.commit("setUsername", '')
        username.value = ''
        isNotLoggedIn.value != isNotLoggedIn.value
        router.push('/')
        btnTextChange()
      }
    }

    const btnTextChange = () => {
      if(username.value !== "") {
        btnText.value = 'Log out'
      } else {
        btnText.value = 'Log in'
      }
    }



    return {username, btnText, isNotLoggedIn, login, btnTextChange}
  }
}
</script>

<style lang="scss">
.login {
  input {
    display: block;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
  }
  button {
    margin-top: 0.5rem;
    background-color: #2c3e50;
    border-radius: 0.5rem;
    outline: none;
    padding: 0.5rem;
    color: white;
  }
}
</style>
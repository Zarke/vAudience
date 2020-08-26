import { createStore} from "vuex";

const state = {
    loggedIn: '',
    theme: 'Light'
}

const mutations = {
    setUsername(state, username) {
        state.loggedIn = username
    },
    setTheme(state, theme) {
        state.theme = theme
    }
}

export default createStore({
    state,
    mutations
})
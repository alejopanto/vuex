import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            username: 'Jose.Pantoja'
        }
    },
    getters: {
        firstName: (state) => (c) => {
            return state.username.split('').reverse().join(c)
        }
    }
})

export default store
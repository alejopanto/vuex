import { createStore } from 'vuex'
import { COMMIT_UPDATE_USERNAME } from '../common/mutations-types'

const store = createStore({
    state() {
        return {
            username: 'Jose.Pantoja'
        }
    },
    getters: {
        firstName: (state) => (c) => {
            return state.username.split('').join(c)
        }
    },
    mutations: {
        [COMMIT_UPDATE_USERNAME](state, username) {
            state.username = username
        }
    },
    actions: {
        updateUsername({commit, state}, username) {
            console.log(state)
            commit('updateUsername', username)
        },
        async randomUsername({ commit }) {
            const res = await fetch(`https://api.generadordni.es/v2/person/username`);
            const data = await res.json();
            //Un numero aleatorio del 0 al 9
            const n = Math.floor(Math.random() * (9 - 0 + 1) + 0);
            console.log(data);
            commit(COMMIT_UPDATE_USERNAME, data[n]);
        }
    }
})

export default store
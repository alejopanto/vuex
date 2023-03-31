import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS} from '@/common/mutations-types'

const module = {
    state() {
        return {
            username: ''
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
        updateUsername({commit, state, rootState}, username) {
            //console.log(state)
            
            commit('updateUsername', username)
            
            if (state.username) {
                commit(COMMIT_SET_STATUS, 'active', {root: true})
                //console.log(rootState.status)
            }
        },
        async randomUsername({ commit }) {
            const res = await fetch(`https://api.generadordni.es/v2/person/username`);
            const data = await res.json();
            //Un numero aleatorio del 0 al 9
            const n = Math.floor(Math.random() * (9 - 0 + 1) + 0);
            //console.log(data);
            commit(COMMIT_UPDATE_USERNAME, data[n]);
        }
    },
    namespaced: true
}

export default module
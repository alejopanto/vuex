const module = {
    namespaced: true,
    state() {
        return {
            channel: null,
            channels:[
                {id: 1, name:'Chanel 1', messages:null},
                {id: 2, name:'Chanel 2', messages:null},
                {id: 3, name:'Chanel 3', messages:null},
                {id: 4, name:'Chanel 4', messages:null},
            ]
        }
    },
    getters: {
        getChannels: (state, getters, rootState, rootGetters) => (search) => {
            return state.channels
                .filter(
                    (channel) => channel.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map((channel) => {
                    const messages = rootGetters['messages/getUnreadMessages'](channel.id);
                    return {
                        ...channel,
                        messages
                    }
                })
        }
    },
    mutations: {
        setChannel: () =>{
            
        }
    }
}
export default module
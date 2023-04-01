import getters from "./getters"

const module = {
    namespaced: true,
    state(){
        return {
            mesagges: [
                { 
                    id: 1,
                    author: 1,
                    message: 'Hola 👀',
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 1
                }
            ]
        }
    },
    getters
}

export default module


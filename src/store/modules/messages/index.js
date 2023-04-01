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
                },
                { 
                    id: 2,
                    author: 2,
                    message: 'Canal 2',
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 2
                },
                { 
                    id: 2,
                    author: 2,
                    message: 'Canal 2 - mensaje 2',
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 2
                }
            ]
        }
    },
    getters
}

export default module


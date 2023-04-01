const getters = {
    getMesagges: (state) => (channelId) => {
        return state.mesagges.filter((mesagge) => mesagge.channelId == parseInt(channelId))
    },
    getUnreadMessages: (state, getters) => (channeId) => {
        return getters.getMesagges(channeId).filter((message) => message.read === false).length
    }
}

export default getters
const getters = {
    getMesagges: (state) => (channelId) => {
        return state.mesagges.filter((mesagge) => mesagge.channelId == parseInt(channelId))
    }
}

export default getters
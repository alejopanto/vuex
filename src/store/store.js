import { reactive } from "vue";

const store = reactive({
    username: 'Alejandro Pantoja',

    updateUsername(username){
        this.username = username
    }
})

export default store
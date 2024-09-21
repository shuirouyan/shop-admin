import { createStore } from "vuex";

const Store = createStore({
    state() {
        return {
            userName: '',
            userPassword: ''
        }
    },
    mutations: {
        cleanUserInfo(state) {
            state.userName = ''
            state.userPassword = ''
        },
        registerUserInfo(state, { userName, userPassword }) {
            state.userName = userName
            state.userPassword = userPassword
        }
    },
    getters: {
        isLogin: (state) => {
            return state.userName.length > 0
        }
    },

})

export default Store
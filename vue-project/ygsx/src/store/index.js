import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        search: {
            value: '',
        },
        login: {
            username: '',
            psw: '',
        }
    },
    getters: {
        getSearch(state) {
            return state.search
        },
        getLogin(state) {
            return state.login
        }
    },
    mutations: {
        setSearch(state, data) {
            state.search = data
        },
        setLogin(state, data) {
            state.login = data
        }
    },
    actions: {
        setSearch(context, data) {
            context.commit('setSearch', data)
        },
        setLogin(context, data) {
            context.commit('setLogin', data)
        }
    },
})
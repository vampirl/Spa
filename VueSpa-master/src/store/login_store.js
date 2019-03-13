import axios from 'axios'
export default {
    state: {
        username: ""
    },
    mutations: {
        setLoginStorage(state,data) {
            console.log(data)
            state.username = data.username;
            localStorage.setItem('data', JSON.stringify(data.data))
        },
        SET_TOKEN(state) {
            state.username = JSON.stringify(localStorage.getItem('data'))
        },
        removeLoginStorage(state) {
            localStorage.removeItem('data')
        }
    },
    actions: {
        LOGIN({state, commit}, params) {
            state.username = params.username
            return new Promise((resolve, reject) => {
                axios.post('/login',params).then(res => {
                    if(res.data.status === false){
                        reject(res.data)
                    } else {
                        commit('setLoginStorage',res.data)
                        resolve(res.data)
                    }
                })
            })
        },
        LOGOUT({state, commit}) {
            axios.get('/logout')
            commit('removeLoginStorage');
        }
    }
}
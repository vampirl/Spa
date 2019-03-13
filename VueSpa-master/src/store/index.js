import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import addDialog_store from './addDialog_store.js'
import login_store from './login_store.js'
Vue.use(Vuex);
var echarts = require('echarts')
export default new Vuex.Store({
    modules: {
        addDialog: addDialog_store,
        login: login_store
    },
    state: {
        mychartOne: {},
    },
    mutations: {
        setChart(state, parmas) {
            state.mychartOne = echarts.init(parmas)
        },
        // optionChart(state) {
        //     state.mychartOne.setOption(state.option);
        // },
        resize(state) {
            window.addEventListener("resize", function() {
                state.mychartOne.resize();
            });
        },
        resizeDiv(state) {
            state.mychartOne.resize();
        }
    },
})
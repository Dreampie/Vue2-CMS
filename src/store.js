import Vue from "vue";
import Vuex from "vuex";
import {menu, session} from "./store/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        session,
        menu
    },
    strict: true
})
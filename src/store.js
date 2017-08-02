import Vue from "vue";
import Vuex from "vuex";
import * as store from "./store/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        session: store.session,
        menu: store.menu
    },
    strict: true
})

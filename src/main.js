import Vue from "vue";
import Vue2Plugin from "@dreampie/vue2-plugin";
import "./filter.js";
import router from "./router.js";
import store from "./store.js";
import App from "./App.vue";
import properties from "./../application.json";

const env = process.env.NODE_ENV
const rootUrl = properties[process.env.NODE_ENV].rootUrl
const apiRootUrl = properties[process.env.NODE_ENV].apiRootUrl
const loginUrl = properties[process.env.NODE_ENV].loginUrl

console.log("App start env is: " + env)
console.log("App root url is: " + rootUrl)
console.log("Api root url is: " + apiRootUrl)
console.log("Login url is: " + loginUrl)

window.localStorage.setItem("rootUrl", rootUrl)
window.localStorage.setItem("apiRootUrl", apiRootUrl)
window.localStorage.setItem("loginUrl", loginUrl)

Vue.use(Vue2Plugin)

console.log(Vue.cookie)
console.log(Vue.bus)
console.log(Vue.http.defaults)

console.log(store)
new Vue({
    router,
    store,
    ...App
}).$mount('#app')

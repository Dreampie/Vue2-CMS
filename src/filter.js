import Vue from "vue";
import {CurrencyFormatter, DateFormatter} from "@dreampie/vue2-common";


//时间 过滤器
Vue.filter('currency', CurrencyFormatter.format)
Vue.filter('date', DateFormatter.format)


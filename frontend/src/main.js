import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ToggleButton from 'vue-js-toggle-button'
import JsonEditor from 'vue-json-edit'

Vue.use(ToggleButton)
Vue.use(JsonEditor)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')

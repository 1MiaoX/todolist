import Vue from 'vue'
import App from './App.vue'
import './assets/tailwindcss.css'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})

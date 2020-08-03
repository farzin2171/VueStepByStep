import Vue from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import CKEditor from '@ckeditor/ckeditor5-vue';
import "./components/generic/index.js"
import router from './router'
import axios from 'axios'
import {store} from './stores/profile'

Vue.config.productionTip = false;

const api=axios.create({
  baseURL:"http://localhost:49905/api"
})

const axiosPlugin={
  install(vue){
    vue.prototype.$api=api;
  }
}
Vue.use(axiosPlugin);
Vue.use( CKEditor );
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

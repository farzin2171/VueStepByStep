import Vue from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import CKEditor from '@ckeditor/ckeditor5-vue';
import "./components/generic/index.js"
import router from './router'

Vue.config.productionTip = false;
Vue.use( CKEditor );
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false;
Vue.use( CKEditor );
new Vue({
  render: h => h(App)
}).$mount("#app");

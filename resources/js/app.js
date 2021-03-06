import "bootstrap";
import Vue from "vue";
import axios from 'axios';

Vue.prototype.$axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.component('vue-modal', require('./components/vue-modal').default);
Vue.component('vue-form-add-storage', require('./components/stock-manager/vue-form-add-storage').default);
Vue.component('vue-input-number', require('./components/vue-input-number').default);
Vue.component('vue-transfer-products', require('./components/stock-manager/vue-transfer-products').default);

new Vue({
    el: '#app',
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import {routes} from './routes'
import Tranglienhe from './components/Tranglienhe.vue'
import Trangchu from './components/Trangchu.vue'
import Trangkichhoatpape from './components/Trangkichhoatpape.vue'
import Trangchinh from './components/Trangchinh.vue'
import Banggia from './components/Banggia.vue'

Vue.use(VueRouter);
const routes = [
  {path:'/tranglienhe',component:Tranglienhe},
  {path:'/Trangkichhoatpape',component:Trangkichhoatpape},
  {path:'/',component:Trangchu},
  {path:'/Trangchinh',component:Trangchinh},
  {path:'/Banggia',component:Banggia}
];
const router =new VueRouter({
    routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

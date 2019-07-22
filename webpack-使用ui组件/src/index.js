import Vue from 'vue'
import MintUI from 'mint-ui'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'
import '../node_modules/font-awesome/css/font-awesome.css'
import './css/app.css'

import './lib/mui/css/mui.min.css'

Vue.component(Button.name, Button)


var vm=new Vue({
  'el':'#box',
  'render':(createComponent=>createComponent(App))
})
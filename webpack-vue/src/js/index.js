/*import Vue from '../../node_modules/vue/dist/vue.js'*/

import Vue from 'vue';

import login from "../vue/login.vue";

import test,{data1,data2} from './export.js'

var vm=new Vue({
  'el':'#box',
  render:createComponent=>createComponent(login)
})
/*获取暴露给外部的对象中的数据*/
console.log(login.data().msg)

console.log(test)

console.log(data1)

console.log(data2)


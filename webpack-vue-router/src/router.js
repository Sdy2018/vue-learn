import VueRouter from 'vue-router'

import login from './vue/login.vue';

import register from './vue/register.vue';

import loginInfo from'./vue/login-info.vue';

import regitserInfo from './vue/register-info.vue'


var router=new VueRouter({
  routes:[
  {
    'path':'/login',
    'component':login,
    'children':[
    {'path':'login-info','component':loginInfo}
    ]
  },
  {
    'path':'/register',
    'component':register,
    'children':[
    {'path':'register-info','component':regitserInfo}
    ]
  }
  ]
})

export default router
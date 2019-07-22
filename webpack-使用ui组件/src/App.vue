<template>
  <div>
    <mt-button type="default" size="large">default</mt-button>
    <mt-button type="primary" @click='show()' >primary</mt-button>
    <mt-button disabled type="danger" size="large">danger</mt-button>
    <button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">
      高贵
    </button>
  </div>
</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui';
  export default{
    data(){
      return{
        'msg':'HelloWorld',
        'loadToast':null,
      }
    },
    created(){
      // var loadToast=this.show()
      // setTimeout(()=>{
      //  loadToast.close()
      // },3000)
    },
    methods:{
      show(){
        /*执行 Toast 方法会返回一个 Toast 实例，每个实例都有 close 方法，用于手动关闭 Toast*/
        return Toast({
          message: '提示',
          position: 'top',
          duration: 2,
          iconClass: 'fa fa-spinner fa-spin',
          className:'my-toast'
        });
      }
    }
  }
</script>

<style>
my-toast{
  color: #f40 ;
}
</style>
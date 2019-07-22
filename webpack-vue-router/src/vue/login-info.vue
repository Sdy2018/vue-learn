<template>
  <div>
    <h1>请登录</h1>
    userName<input type="text" name="" >
    <br>
    password<input type="text" name="" >
    <br>
    <input type="submit" value="login">
  </div>
</template>

<script >

</script>

<!-- 若要子组件的样式只应用于当前组件下，使用scoped 标记
     若要使用less sass  则 lang="less" || lang="sass"
 -->
<style scoped>
h1{
  color: red;
}
</style>
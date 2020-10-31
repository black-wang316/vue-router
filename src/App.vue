<template>
  <div id="app">
    <router-link exact to="/">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link exact :to="{name:'User'}">用户</router-link>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>

</style>

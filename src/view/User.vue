<template>
<div>
  <h2>用户</h2>
  <ul>
    <li><router-link :to="{name:'UserInfo'}">个人中心</router-link></li>
    <li><router-link :to="{name:'myShopping'}">我的商城</router-link></li>
    <li><router-link :to="{name:'myFen'}">我的积分</router-link></li>
  </ul>
  <router-view/>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
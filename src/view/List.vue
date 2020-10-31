<template>
<div>
  <h2>列表</h2>
  <ul>
    <li v-for="item in movie" :key="item.id">
      <router-link :to="{name:'Detail',query:{id:item.id,}}">{{item.tCn}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";
export default {

  data(){
    return{
      movie:[]
    }
  },
   created(){
    axios.get('https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId='+this.$route.query.id)
    .then((res)=>(this.movie=res.data.ms))
  }

}
</script>

<style>

</style>
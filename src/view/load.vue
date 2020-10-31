<template>
  <div>
    <h1>地区</h1>
    <p v-for="item in load" :key="item.id"><router-link :to="{query:{id:item.id},name:'List',}">{{item.n}}</router-link></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'Load',
data(){
  return{
    load:[],
  }
},
    created(){
      axios.get('https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api')
      .then((res)=>(this.load=res.data.p))
    }
}
</script>

<style scoped>
  p{
    float: left;
    margin: 0.5rem;
  }
</style>
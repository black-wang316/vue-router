<template>
<div>
  <h2>{{movies.name}}</h2>
<p>{{movies.story}}</p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Detail',
data(){
  return{
    movies:[],
  }
},
 created(){
    axios.get(
          "https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=" +
            this.$route.query.id
        )
    .then((res)=>(this.movies=res.data.data.basic))
    
  },
watch:{
  created(){
      axios.get(
          "https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=" +
            this.$route.query.id
        )
    .then((res)=>(this.movies=res.data.data.basic))
    
  }
}
}
</script>

<style>

</style>
<template>
  <div id="app">
 
    <router-view v-if="isAlive"/>
  </div>
</template>
<script>
export default {
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isAlive:true
    }
  },
  methods:{
    reload(){
      this.isAlive = false
      this.$nextTick(()=>{
        this.isAlive = true
      })
    }
  }
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #42b983;
  color: #2c3e50;
  height: 300px;
} */

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
} */

</style>

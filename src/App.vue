<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">login</router-link> |
      <router-link to="/register">register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #42b983;
  color: #2c3e50;
  height: 300px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
}

</style>

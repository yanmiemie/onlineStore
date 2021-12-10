<template>
  <div id="app">
    <router-view/>
  </div>
</template>
 
<style lang="scss">
// 圓體字體
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
 
#app {
  font-family:'cwTeXYen', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343434;
  font-weight: bold;
}
 
#nav {
  padding: 30px;
 
  a {
    font-weight: bold;
    color: #ffffff;
 
    &.router-link-exact-active {
      color: #1d5cee;
    }
  }
}
</style>

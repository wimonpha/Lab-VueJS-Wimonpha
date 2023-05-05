<template>
  <div id="app">
    <template>
    <v-bottom-navigation v-model="value">
      <v-btn value="็Home" @click="gotoHome">
      <span>Home</span>

      <v-icon>mdi mdi-home</v-icon>
    </v-btn>
    <v-btn value="recent" @click="gotoPortfolio">
      <span>Portfolio</span>

      <v-icon>mdi mdi-account-school</v-icon>
    </v-btn>

    <v-btn value="favorites" @click="gotoProject">
      <span>Project</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </template>  
    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',

   data: () => ({
      //
   }),
  methods: {
    gotoHome() {
    if(this.$router.push !== '/'){
      this.$router.push('/')
    };
    },
    gotoPortfolio(){
      if(this.$router.push !== '/Portfolio'){
        this.$router.push('/Portfolio')
      };
    },
    gotoProject(){
      if(this.$router.push !== '/Project'){
        this.$router.push('/Project')
      };
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: blue;
}
</style>
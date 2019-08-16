<template>
  <div id="app">
    <Header v-if="authenticated" />
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      authenticated: false,
      myVariable: ''
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
      console.log(this.$route.query.a);
      this.myVariable = this.$route.query.a;
    }
  }
}
</script>


<style>
  @import './assets/variables.css';

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: black;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

/* scrollbar css */
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--playlist-backdrop-gray); 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--playlist-hover-gray); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777; 
}
</style>

<template>
  <div id="app">
    <Header v-if="authenticated" />
    <router-view @authenticated="setAuthenticated" />
    <Footer v-if="authenticated" />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

import axios from 'axios'

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      authenticated: false,
      loggingIn: false,
      userId: '',
      token: ''
    }
  },
  mounted() {
    if(!this.authenticated) {
      // if(this.loggingIn) {
      //   this.$router.replace({ name: 'token' });
      // } else {
        // this.$router.replace({ name: "login" });
      // }
    }
  },
  methods: {
    setAuthenticated(status, token) {
      this.authenticated = status;
      this.token = token;

      axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then(res => {
          // Code for successful API request
          console.log(res.data);
          this.userId = res.data.id;
          })
        .catch(err => console.log(err));
    }
  }
}
</script>


<style>
  @import './assets/variables.css';

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0;
  }

  body {
    /* background: var(--spotify-black); */
    background: black;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    margin-top: 30px;
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

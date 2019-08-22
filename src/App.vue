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
      // Change to true/true/AlexHandeland/{token} when testing
      // Change to false/false/''/'' when done testing

      authenticated: false,
      userId: '',
      // token: 'BQCN8dPc2dErVnNiDEi-xYgxM-5L5WYzVVrE3AtRZjX7EF8lf56NpJdhjgI25zOpc71BQdRd4xHZBGyNojwBPOPwO-eWTSTYAd7HaN9xoP7hccx2CNglFRocVhhVitCaiRAs8DKGEc-DAs2wlFxV1r4jCLawq69wYM4TiA',
      token: '',

      playlistTitle: ''
    }
  },
  mounted() {
    if(!this.authenticated) {
        this.$router.replace({ name: 'login' });
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

      this.$router.push({ name: 'home'});
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

  /* remove bullet points in lists */
  li {
    display: block;
  }

  /* default styling for app elements */
  body {
    background: black;
    margin-top: 30px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    text-align: center;
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

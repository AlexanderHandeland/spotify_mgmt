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

      authenticated: true,
      userId: 'AlexHandeland',
      token: 'BQBHYyIwHDEHS8iqOsIMh4CpLH9R01s14ZCsDB6KqkjB93_95y6tpdF3bUPfNlaqdkareDTx9VI9Yoqw2q94y1P3SshkHyKzdQVfpHTRWswWD_D9OsqnLLMP21jlKvW2rUwwzpL0U84TxzSiDvIj86E5Cuzkx425rtdQhw',

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

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
import { isMobile } from 'mobile-device-detect';

import axios from 'axios'

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      // USER VARIABLES
      // Change to true/AlexHandeland/{token} when testing
      // Change to false/''/'' when done testing

      authenticated: true,
      userId: 'AlexHandeland',
      token: 'BQDhJ5z6yIJvFbFJuJWPv8zr-kN1LNWWzlN3UMhTwypBD2gbT-xfSWiUIqFm_HHvx2kLmfzWFtTENSRz6KeP7s0alNNMsRtPkZGQtO61oBsGdFP4cfdR9vH54gUyZ_FY7uyeuiJewNHocJEsg6AsXdUcYjYqNteHv1g8lg',
  /*
      authenticated: false,
      userId: '',
      token: '',
*/    
      playlistTitle: '',

      // CSS VARIABLES
      // set width to 100% if on mobile, else 60
      mainContentDivWidth: isMobile ? 100 : 60 // in percent
    }
  },
  mounted() {
    if (!this.authenticated) {
        this.$router.replace({ name: 'login' });
    }
  },
  methods: {
    setAuthenticated(status, token) {
      this.authenticated = status;
      this.token = token;
      // handle unauthentication
      // setTimeout(() => { setUnauthenticated() }, 60000); // timeout after 50 min (* 60 sec * 1000 ms)

      axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then(res => {
          // Code for successful API request
          this.userId = res.data.id;
          })
        .catch(err => console.log(err));

      this.$router.push({ name: 'home' });
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
    user-select: none;
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

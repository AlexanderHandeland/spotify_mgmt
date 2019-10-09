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
      // Change to true/AlexHandeland/{token} when testing
      // Change to false/''/'' when done testing

      
/*    
      authenticated: false,
      userId: 'AlexHandeland',
      token: 'BQBQ25iDgnPR7xNUbKQislDFw1armahI--pueGOwy3hxLfw4RFTIM8y_kNIIWrfvVZoXXsLXD-S5ZSnlNPEvBapQBQ931N18GR13GJ1_kIS4_ppZlM3-t2VPA0avhVDHgeHxaHrKD2GQZKyKgKCO3MQiRK1EkDojKADnHA',
*/  
      authenticated: false,
      userId: '',
      token: '',

      playlistTitle: ''
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
      setTimeout(() => { setUnauthenticated() }, 60000); // timeout after 50 min (* 60 sec * 1000 ms)

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

      this.$router.push({ name: 'home' });
    }
  },
  setUnauthenticated() {
    console.log("unauthenticated");
    this.authenticated = false;
    this.token = '';
    this.user = '';
    // Check if this happens automatically - if not, uncomment:
    // this.$router.replace({ name: 'login' });

    // code for popup that  session has expired
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

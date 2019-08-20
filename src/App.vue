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
      userId: 'AlexHandeland',
      token: 'BQA8g0aumUeTiKf6zO2oUVFWY6Motue7Lb2Lx0jVSljpVNqnzJGFNmTs1aEoQf6JLTaSFDI116LX12nCBxYGoqpQ_pCFZjfjH2OdyXMEMN19TOC9OudEeF4vGD2lhg9HxwFp-iKk3y530FKO_Jlbv_5bgzuopGt6l1kfrQ'
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
    if(this.loggingIn) {
      this.$router.replace({ name: 'token' });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
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

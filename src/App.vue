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
      userId: 'AlexHandeland',
      token: 'BQBs-ppRH18cTwbptgE32BLJRknPgtEXU1NC0amfQN7Fq1F90YVUTzbpYM0Xqo9TarWivaZw7RaLJd0g56cBxqs3-m_zs2Zk7kfmostNcaVVlPnBlbsO8V21qcFQ_jT0RISFuNdr6XvB23LNWJXpyYZXwcNhnWx1Iuu0eA'
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

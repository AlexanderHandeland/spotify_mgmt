<template>
  <div class="home">
    <div class="main-content-div" :style="mainContentDivVars">

      <p>Welcome, <span style="font-weight: bold">{{ this.$parent.$data.userId}} </span></p>
      <p>Click below to browse your Spotify playlists</p>

      <GreenBtn v-on:button-click="goToPlaylists">Get playlists</GreenBtn>
    </div> 
  </div>

</template>


<script>
// @ is an alias to /src
import GreenBtn from '@/components/Mics/GreenBtn'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    GreenBtn
  },
  computed: {
      mainContentDivVars() {
          return {
              '--width-css': this.$parent.$data.mainContentDivWidth + '%',
              '--left-position-css': ( ( 50 -  this.$parent.$data.mainContentDivWidth / 2) ) + '%'
          }
      }
  },
  data() {
    return {
      playlists: []
    }
  },
  methods: {
    goToPlaylists: function() {
      this.$router.replace({ name: 'playlists' });
    }
  }
}
</script>


<style scoped>
  .main-content-div {
    padding: 40px 25px;
    position: fixed;
    width: var(--width-css);
    left: var(--left-position-css);
  }
  
  h2, p {
    padding: 10px;
  }

</style>
<template>
  <div class="home">
    <div class="main-content-div">

      <h2>Save your Spotify playlists</h2>

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
    padding: 60px 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
  h2, p {
    padding: 10px;
  }

</style>
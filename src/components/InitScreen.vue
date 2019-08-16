<template>
  <div class="init-screen">
    <GreenBtn v-on:button-click="$emit('get-all-playlists')">Get playlists</GreenBtn>
    <!-- <button class="fetch-playlists-button" @click="$emit('get-all-playlists')">Get playlists</button> -->
  </div>
</template>


<script>
// @ is an alias to /src
import GreenBtn from '@/components/Mics/GreenBtn.vue'

import axios from 'axios'

export default {
  name: 'InitScreen',
  components: {
    GreenBtn
  }
}
</script>


<style scoped>

</style>
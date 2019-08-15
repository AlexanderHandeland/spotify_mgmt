<template>
  <div class="init-screen">
    <button class="fetch-playlists-button" @click="$emit('get-all-playlists')">Get playlists</button>
  </div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'InitScreen',
  components: {
  }
}
</script>


<style scoped>
    .fetch-playlists-button, .get-token-button {
        background-color: var(--spotify-green);
        border: none;
        color: white;
        padding: 10px;
        margin: 10px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        /* display: inline-block; */
        cursor: pointer;
        user-select: none;
    }
</style>
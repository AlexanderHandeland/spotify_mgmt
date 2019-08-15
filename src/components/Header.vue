<template>
    <header class="header"> 
        <h1>Spot MGMT</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/chronologify">Chronologify</router-link>|
            <router-link to="/about">About</router-link>
         </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: black;
        border-bottom: 2px solid var(--spotify-black);
        color: #fff;
        text-align: center;
        padding: 10px;
    }

  .header a {
      color: #fff;
      padding-right: 5px;
      text-decoration: none;
  }
  
  .header a:hover {
      /* color: #FF9B0D; */
      color: var(--dark-orange-color);
  }
</style>


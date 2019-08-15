<template>
  <div class="about">
    <h1>About this app</h1>
    <div class="info-text">
      <p>
        <a>This app integrates with the </a>
        <a class="standout-text">Spotify Web API</a>
        <a>. Read more about how to use it in its </a>
        <a href="https://developer.spotify.com/documentation/web-api/" target="_blank">documentation</a>
        <a>.</a>
      </p>
      <p>
        <a>You must authorize with </a>
        <a class="standout-text">Oauth 2.0</a>
        <a> to use the app. Read more about how to authenticate in Spotify's </a>
        <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/" target="_blank">Authorization Guide</a>
        <a>.</a>
      </p>
      <p>
        <a>You are logged in as </a>
        <a class="standout-text"> AlexHandeland</a>
        <a>.</a>
      </p>        
    </div>
  </div>
</template>

<style scoped>
  .about {
    /* background: var(--spotify-black); */
    color: white;
    padding: 40px 25px;
    width: 100%;
    min-height: 80vh;
    /* text-align: center; */
    /* border-bottom: 1px #ccc solid; */
  }

  .main-content-div > * {
    max-width: 1200px;
    min-width: 90%;
    /* display: inline-block; */
  }

  * {
    color: white;
  }

  .info-text {
    padding: 10px 0px;
  }

  .standout-text {
    font-weight: bold;
  }

  p {
    padding: 8px 4px;
  }

</style>

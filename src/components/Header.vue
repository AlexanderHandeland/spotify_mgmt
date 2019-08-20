<template>
    <header class="header"> 

        <div id="nav">
            <a title="Logo placeholder" @click="verify">&#9889;</a>
            <router-link to="/home">Spotify Mgmt</router-link>
            <router-link to="/chronologify">Chronologify</router-link>
            <router-link to="/about">About</router-link>
        </div>

    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        verify: function() {
            console.log('clicked');
            console.log(this.$parent.$data.userId);
            console.log(this.$parent.$data.token);
        }
    }
}
</script>

<style scoped>
    .header {
        background: black;
        color: white;
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        border-bottom: 2px solid var(--playlist-hover-gray);
    }

    .header a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 12px;
        
        /* font-size: 10px; */
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    
    .header a:hover {
        background: var(--playlist-hover-gray);
    }
</style>
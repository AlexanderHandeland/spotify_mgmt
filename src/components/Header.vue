<template>
    <header class="header"> 

        <div id="nav">
            <a @click="verify" v-html="htmlUnicode"></a>
            <router-link to="/home">CSVify</router-link>
            <router-link to="/chronologify">Chronologify</router-link>
            <router-link to="/about">About</router-link>
        </div>

    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            htmlUnicode: ''
        }
    },
    methods: {
        verify: function() {
            console.log('clicked');
            console.log(this.$parent.$data.authenticated);
            console.log(this.$parent.$data.userId);
            console.log(this.$parent.$data.token);
        }
    },
    created() {
        this.htmlUnicode = '&#' + randomInteger(127789, 127891) + ';';

        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
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
        border-bottom: 1px solid var(--spotify-green);
    }

    .header a {
        float: right;
        display: block;
        color: white;
        text-align: center;
        padding: 12px 16px 12px;
        text-decoration: none;
        font-size: 12px;
        user-select: none;
        
        /* font-size: 10px; */
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .header a:first-child {
        float: left;
    }
    
    .header a:hover {
        background: var(--spotify-dark-green);
    }
</style>
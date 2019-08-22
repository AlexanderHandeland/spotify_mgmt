<template>
    <div class="main-div">
        <div id="login">
            <!-- <h1>Hello my fine man</h1> -->
            <h2>Holla Holla</h2>
            <p>Please log in with your Spotify account to continue</p>
            <a class="a-button" href="https://spotify-mgmt-backend.herokuapp.com/login">Take me there</a>
            <!-- <GreenBtn id="login-button" v-on:button-click="login">Login</GreenBtn> -->
        </div>
    </div>
</template>

<script>
import GreenBtn from '@/components/Mics/GreenBtn.vue'

import axios from 'axios'

export default {
    name: 'Login',
    components: {
        GreenBtn
    },
    mounted() {
        if (typeof this.$route.query.a !== 'undefined') {
            this.$emit('authenticated', true, this.$route.query.a);  
        }
        // else
        // Code to change button layout to 'Proceed' to manually click
        // If that doesn't work: Display 'oh no' message and prompt login again:-)
    }
}
</script>

<style scoped>
    .a-button {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;

        text-decoration: none;
        border: none;
        outline: none;
        color: #fff;
        font-size: 16px;
        border-radius: 20px;

        background: var(--spotify-dark-green);
        padding: 10px;
        /* margin: 10px 0; */
        text-align: center;
        /* font-size: 10px; */
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        cursor: pointer;
        width: 100%;
    }

    .a-button:hover {
        background: var(--spotify-green);
    }

    .main-div {
        text-align: center;
        color: white;
        margin: 0;
        padding: 0;
        background-size: cover;
        font-family: sans-serif;
    }

    #login {
        /* background: var(--playlist-backdrop-gray); */
        /* border: 2px solid var(--playlist-hover-gray); */
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 350px;
        height: 280px;
        padding: 80px 40px;
        box-sizing: border-box;
    }

    h2, p {
        margin: 0;
        padding: 0 0 20px;
    }
</style>

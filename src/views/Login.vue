<template>
    <div class="main-div">
        <div id="login">
            <!-- <h1>Hello my fine man</h1> -->
            <h2>Hello My Man</h2>
            <p>Log in with your Spotify account</p>
            <a class="a-button" href="https://spotify-mgmt-backend.herokuapp.com/login" @click="getToken">Login</a>
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
    methods: {
        getToken() {
            this.$parent.$data.loggingIn = true;
        }
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
        /* border: none; */
        /* color: white; */
        padding: 10px;
        margin: 10px 0;
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

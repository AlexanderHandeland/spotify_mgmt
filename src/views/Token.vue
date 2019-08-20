<template>
    <div class="main-div">
        <div id="token">
            <h2>Great</h2>
            <p></p>
            <a class="a-button" @click="proceed">Proceed</a>
            <!-- <GreenBtn id="login-button" v-on:button-click="login">Login</GreenBtn> -->
        </div>
    </div>
</template>


<script>
import GreenBtn from '@/components/Mics/GreenBtn'

export default {
    name: 'Token',
    methods: {
        proceed: function() {
            this.$emit("authenticated", true);
            this.$emit("token", this.$route.query.a);
            console.log(this.$route.query.a);
            this.$router.replace( { name: "home" });
            }
        },
    mounted() {
        this.$emit("token", this.$route.query.a);
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
        margin: 10px 0;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
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

    #token {
        /* background: var(--playlist-backdrop-gray); */
        border: 2px solid var(--playlist-hover-gray);
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


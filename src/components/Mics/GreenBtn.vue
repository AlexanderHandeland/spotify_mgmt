<template>
    <!-- Generic button  -->
    <button class="green-button" v-bind:class="{ 'disabled-button' : disabled }" @click="$emit('button-click')">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'GreenBtn',
    props: [ 'disabled' ]
}
</script>


<style scoped>

    .green-button {
        background-color: var(--spotify-dark-green);
        border: none;
        color: white;
        padding: 10px;
        margin: 10px 20px;
        text-align: center;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        user-select: none;
        /* display: inline-block; */
        cursor: pointer;
    }

    .green-button:focus {
        outline-color: white;
    }


    .disabled-button {
        background-color: var(--playlist-backdrop-gray);
        cursor: default;
        pointer-events: none;
    }

    .disabled-button:focus {
        outline: none;
    }
</style>

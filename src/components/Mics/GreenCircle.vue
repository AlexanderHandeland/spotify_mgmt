<template>
    <div class="circle" @click="$emit('button-click')">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'GreenCircle'
}
</script>


<style scoped>
    .circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 40px;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        background: var(--spotify-dark-green);
        user-select: none;
    }
</style>

<template>
    <div class="grid-background">
        <div class="grid-pattern"></div>
    </div>
</template>

<script>
export default {
    name: 'GridBackground'
}
</script>

<style scoped>
.grid-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -1;
    background: #0C0A09;
}

.grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
}
</style>

<template>
    <div class="portfolio-cta-wrapper" data-animate="fade-up">
        <button @click="$emit('open-form')" class="btn-primary">
            <span>Хочу сайт!</span>
            <div class="btn-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'PortfolioCTA',
    emits: ['open-form']
}
</script>

<style scoped>
.portfolio-cta-wrapper {
    margin-top: 160px;
    text-align: center;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
    padding: 0 var(--section-padding-x);
}

.portfolio-cta-wrapper.animate-in {
    opacity: 1;
    transform: translateY(0);
}
</style>

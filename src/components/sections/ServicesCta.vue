<template>
    <div class="services-cta-wrapper" data-animate="fade-up">
        <div class="services-cta">
            <button @click="$emit('open-form')" class="btn-primary">
                <span class="btn-text">Обсудить проект</span>
                <div class="btn-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </button>
            <div class="services-cta-text">
                <span>Готовы начать?</span>
                <span>Свяжемся в течение 30 минут</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesCta',
    emits: ['open-form']
}
</script>

<style scoped>
.services-cta-wrapper {
    margin-top: var(--gap-2xl);
    border-top: 1px solid var(--border-subtle);
    margin-top: 0 !important;
}

.services-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 48px;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
    max-width: 600px;
    margin: 0 auto;
}

.services-cta-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: right;
}

.services-cta-text span:first-child {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text-primary);
}

.services-cta-text span:last-child {
    font-size: var(--text-sm);
    color: var(--text-secondary);
}

@media (max-width: 1024px) {
    .services-cta {
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }

    .services-cta-text {
        text-align: center;
    }
}
</style>

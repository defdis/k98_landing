<template>
    <section class="features-cta-section">
        <div class="features-cta-wrapper">
            <div class="features-cta-content">
                <div class="features-cta-text">
                    <span class="cta-text-main">Есть вопросы?</span>
                    <span class="cta-text-sub">Мы всегда на связи</span>
                </div>
                <a href="#contact" class="features-cta-link" @click.prevent="$emit('open-form')">
                    <span>Связаться с нами</span>
                    <div class="link-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="features-cta-decor">
                <div class="decor-line"></div>
                <div class="decor-dot decor-dot-1"></div>
                <div class="decor-dot decor-dot-2"></div>
                <div class="decor-dot decor-dot-3"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeaturesCTA',
    emits: ['open-form']
}
</script>

<style scoped>
.features-cta-section {
    padding: 0 var(--section-padding-x);
    margin-bottom: 80px;
}

.features-cta-wrapper {
    position: relative;
    padding: 40px 48px;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
    max-width: 600px;
    margin: 0 auto;
}

.features-cta-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
}

.features-cta-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.cta-text-main {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
}

.cta-text-sub {
    font-size: var(--text-sm);
    color: var(--text-secondary);
}

.features-cta-link {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: var(--text-base);
    font-weight: 600;
    color: #0a0a0a;
    padding: 16px 32px;
    background: var(--text-primary);
    border-radius: var(--radius-full);
    text-decoration: none;
    transition: all var(--transition-fast);
}

.features-cta-link:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
}

.link-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-fast);
}

.features-cta-link:hover .link-arrow {
    transform: translateX(6px);
}

.features-cta-decor {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: var(--radius-xl);
}

.decor-line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
}

.decor-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: decorDotFloat 8s ease-in-out infinite;
}

.decor-dot-1 {
    bottom: 20px;
    left: 10%;
    animation-delay: 0s;
}

.decor-dot-2 {
    bottom: 30px;
    left: 50%;
    animation-delay: 2.5s;
}

.decor-dot-3 {
    bottom: 15px;
    left: 85%;
    animation-delay: 5s;
}

@keyframes decorDotFloat {
    0%, 100% { transform: translateY(0); opacity: 0.3; }
    50% { transform: translateY(-15px); opacity: 0.6; }
}

@media (max-width: 768px) {
    .features-cta {
        padding: 32px 24px;
    }
    
    .features-cta-content {
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }
    
    .features-cta-link {
        width: 100%;
        justify-content: center;
    }
}
</style>

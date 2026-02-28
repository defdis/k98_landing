<template>
    <div class="feature-card" :style="{ transitionDelay: `${index * 0.2}s` }">
        <div class="feature-card-icon-wrapper">
            <div class="feature-card-icon-bg"></div>
            <div class="feature-card-icon">
                <img :src="feature.icon" :alt="feature.title">
            </div>
            <div class="feature-card-icon-glow"></div>
        </div>

        <div class="feature-card-content">
            <h3 class="feature-card-title">{{ feature.title }}</h3>
            <p class="feature-card-text">{{ feature.text }}</p>
            
            <div class="feature-card-metric">
                <div class="metric-main">
                    <span class="metric-value">{{ feature.metric.value }}</span>
                    <span class="metric-unit">{{ feature.metric.unit }}</span>
                </div>
                <span class="metric-label">{{ feature.metric.label }}</span>
            </div>
            
            <div class="feature-card-progress">
                <div class="progress-track">
                    <div class="progress-fill"></div>
                </div>
            </div>
            
            <div class="feature-card-dots">
                <span class="dot" v-for="n in 5" :key="n"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureCard',
    props: {
        feature: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.feature-card {
    position: relative;
    padding: 24px;
    background: #111;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-fast);
    cursor: pointer;
}

.feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity var(--transition-fast);
    pointer-events: none;
}

.feature-card:hover::before {
    opacity: 1;
}

.feature-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
}

.feature-card-icon-wrapper {
    position: relative;
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
    z-index: 2;
}

.feature-card-icon-bg {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    transform: rotate(45deg);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-card-icon-bg {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) scale(1.1);
}

.feature-card-icon {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.feature-card-icon img {
    width: 40px;
    height: 40px;
    filter: invert(1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-card-icon img {
    transform: scale(1.15) rotate(5deg);
}

.feature-card-icon-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.feature-card:hover .feature-card-icon-glow {
    opacity: 1;
}

.feature-card-content {
    position: relative;
    z-index: 2;
}

.feature-card-title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--gap-sm);
    letter-spacing: -0.5px;
}

.feature-card-text {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.7;
    font-weight: 300;
    margin-bottom: var(--gap-lg);
}

.feature-card-metric {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-subtle);
}

.metric-main {
    display: flex;
    align-items: baseline;
    gap: 4px;
}

.metric-value {
    font-size: 32px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -1px;
    line-height: 1;
}

.metric-unit {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-secondary);
}

.metric-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
}

.feature-card-progress {
    margin-bottom: 16px;
}

.progress-track {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, var(--text-primary) 100%);
    border-radius: 10px;
    width: 30%;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .progress-fill {
    width: 100%;
}

.feature-card-dots {
    display: flex;
    gap: 6px;
}

.dot {
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.feature-card:hover .dot {
    opacity: 1;
    transform: scale(1.2);
}
</style>

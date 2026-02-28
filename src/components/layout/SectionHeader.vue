<template>
    <div class="section-header" data-animate="fade-up">
        <div class="section-header-top">
            <span class="section-label">
                <span class="section-label-dot"></span>
                <slot name="label-text">{{ labelText }}</slot>
            </span>
            <div class="section-line"></div>
        </div>
        <h2 class="section-title">
            <slot name="title">
                <span class="section-title-line" v-for="(line, i) in titleLines" :key="i">
                    {{ line }}
                </span>
            </slot>
        </h2>
        <p class="section-subtitle" v-if="subtitle || $slots.subtitle">
            <slot name="subtitle">{{ subtitle }}</slot>
        </p>
        <slot name="extra"></slot>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    props: {
        labelText: {
            type: String,
            default: '',
        },
        titleLines: {
            type: Array,
            default: () => [],
        },
        subtitle: {
            type: String,
            default: '',
        },
    },
}
</script>

<style scoped>
.section-header {
    margin-bottom: var(--gap-2xl);
    padding: 0;
}

.section-header-top {
    display: flex;
    align-items: center;
    gap: var(--gap-lg);
    margin-bottom: var(--gap-xl);
}

.section-label {
    display: inline-flex;
    align-items: center;
    gap: var(--gap-md);
    font-size: var(--text-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-secondary);
    padding: 8px 16px;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
    background: black;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.section-label-dot {
    width: 6px;
    height: 6px;
    background: var(--text-primary);
    border-radius: 50%;
    animation: labelDotPulse 2s ease-in-out infinite;
}

@keyframes labelDotPulse {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.4;
        transform: scale(0.8);
    }
}

.section-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
}

.section-title {
    font-size: clamp(var(--text-4xl), 7vw, var(--text-7xl));
    font-weight: 700;
    letter-spacing: -2px;
    color: var(--text-primary);
    margin-bottom: var(--gap-xl);
    line-height: 1.1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.section-title-line {
    display: inline-block;
    font-family: var(--font-sans);
    transition: font-family var(--transition-fast);
}

.section-title-line:hover {
    font-family: var(--font-mono);
}

.section-subtitle {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    font-weight: 300;
    line-height: 1.7;
    max-width: 600px;
}
</style>

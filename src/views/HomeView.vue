<template>
    <!-- Services Section (PageBlocks.blocks) -->
    <MainBlock @open-req="handleOpen" />

    <!-- Features Section -->
    <section class="features">
        <!-- Animated Background -->
        <div class="features-bg">
            <div class="features-gradient features-gradient-1"></div>
            <div class="features-gradient features-gradient-2"></div>
            <div class="features-gradient features-gradient-3"></div>
        </div>

        <div class="features-container">
            <!-- Section Header -->
            <div class="features-header" ref="featuresHeader">
                <div class="features-header-label">
                    <span class="label-pill">
                        <span class="label-pill-dot"></span>
                        Преимущества
                    </span>
                    <div class="label-line"></div>
                </div>

                <h2 class="features-title">
                    <span class="title-line">Почему выбирают</span>
                    <span class="title-line">именно нас</span>
                </h2>

                <p class="features-subtitle">
                    Каждый день мы прилагаем все усилия, чтобы сделать жизнь наших клиентов лучше и счастливее
                </p>

                <!-- Counters -->
                <div class="features-counters">
                    <div class="counter-item" v-for="(counter, i) in counters" :key="counter.label">
                        <span class="counter-value">{{ counter.value }}</span>
                        <span class="counter-suffix">{{ counter.suffix }}</span>
                        <span class="counter-label">{{ counter.label }}</span>
                    </div>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="features-grid">
                <div 
                    class="feature-card" 
                    v-for="(feature, index) in featuresList" 
                    :key="feature.id"
                    :data-animate="`feature-${index}`"
                    @mouseenter="hoveredFeature = index"
                    @mouseleave="hoveredFeature = null"
                >
                    <!-- Card Background Effects -->
                    <div class="feature-card-bg">
                        <div class="feature-card-shine"></div>
                        <div class="feature-card-grid"></div>
                    </div>
                    
                    <!-- Glow Ring -->
                    <div class="feature-card-ring" :style="{ 
                        opacity: hoveredFeature === index ? 1 : 0,
                        transform: hoveredFeature === index ? 'scale(1)' : 'scale(0.8)'
                    }"></div>
                    
                    <!-- Icon Container -->
                    <div class="feature-card-icon-wrapper">
                        <div class="feature-card-icon-bg"></div>
                        <div class="feature-card-icon">
                            <img :src="feature.icon" :alt="feature.title">
                        </div>
                        <div class="feature-card-icon-glow"></div>
                    </div>
                    
                    <!-- Card Number -->
                    <div class="feature-card-number">
                        <span>{{ String(index + 1).padStart(2, '0') }}</span>
                    </div>
                    
                    <!-- Card Content -->
                    <div class="feature-card-content">
                        <h3 class="feature-card-title">{{ feature.title }}</h3>
                        <p class="feature-card-text">{{ feature.text }}</p>
                        
                        <!-- Animated Metric -->
                        <div class="feature-card-metric">
                            <div class="metric-main">
                                <span class="metric-value">{{ feature.metric.value }}</span>
                                <span class="metric-unit">{{ feature.metric.unit }}</span>
                            </div>
                            <span class="metric-label">{{ feature.metric.label }}</span>
                        </div>
                        
                        <!-- Progress Bar -->
                        <div class="feature-card-progress">
                            <div class="progress-track">
                                <div class="progress-fill" :style="{ width: hoveredFeature === index ? '100%' : '30%' }"></div>
                            </div>
                        </div>
                        
                        <!-- Decorative Dots -->
                        <div class="feature-card-dots">
                            <span class="dot" v-for="n in 5" :key="n" :style="{ 
                                opacity: hoveredFeature === index ? 1 : 0.3,
                                transform: hoveredFeature === index ? 'scale(1.2)' : 'scale(1)'
                            }"></span>
                        </div>
                    </div>
                    
                    <!-- Corner Accent -->
                    <div class="feature-card-corner" :style="{ opacity: hoveredFeature === index ? 1 : 0 }">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M40 0V40H0" stroke="white" stroke-width="1" opacity="0.5"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="features-bottom-cta" data-animate="fade-up">
                <div class="bottom-cta-content">
                    <div class="bottom-cta-text">
                        <span class="cta-text-main">Есть вопросы?</span>
                        <span class="cta-text-sub">Мы всегда на связи</span>
                    </div>
                    <a href="#contact" class="bottom-cta-link">
                        <span>Связаться с нами</span>
                        <div class="link-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="bottom-cta-decor">
                    <div class="decor-line"></div>
                    <div class="decor-dot decor-dot-1"></div>
                    <div class="decor-dot decor-dot-2"></div>
                    <div class="decor-dot decor-dot-3"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Carousel -->
    <MainCorusel @open-req="handleOpen" />
</template>

<script>
import MainBlock from "../components/MainBlock.vue"
import MainCorusel from "../components/MainCorusel.vue"
import FormView from "./FormView.vue"

export default {
    components: {
        MainBlock,
        MainCorusel,
        FormView
    },
    data() {
        return {
            showModal: false,
            hoveredFeature: null,
            titleLines: ['Почему выбирают', 'именно нас'],
            counters: [
                { value: 'работаем с', suffix: '2018г.', label: 'опыт работы' },
                { value: '30', suffix: 'мин', label: 'среднее время ответа' },
                { value: '98', suffix: '%', label: 'довольных клиентов' }
            ],
            featuresList: [
                {
                    id: 1,
                    title: 'Качество',
                    text: 'Мы внимательны к задачам, отрасли и целям заказчика, чтобы предложить оптимальное решение',
                    icon: '../assets/img/quality.svg',
                    metric: { value: '100', unit: '%', label: 'гарантия качества' }
                },
                {
                    id: 2,
                    title: 'Время',
                    text: 'Наш специалист проведёт консультацию в течение 30 минут. Соблюдаем все дедлайны',
                    icon: '../assets/img/time.svg',
                    metric: { value: '24', unit: '/7', label: 'поддержка' }
                },
                {
                    id: 3,
                    title: 'Цена',
                    text: 'Наши цены фиксированы на стандартные предложения. Прозрачное ценообразование',
                    icon: '../assets/img/price.svg',
                    metric: { value: 'от', unit: '50к', label: 'стоимость проекта' }
                }
            ]
        }
    },
    emits: ['open-form'],
    mounted() {
        this.initAnimations()
        this.animateTitle()
        this.initCounterAnimation()
    },
    methods: {
        handleOpen() {
            this.showModal = true
            document.body.style.overflow = 'hidden'
            this.$emit('open-form')
        },
        handleClose() {
            this.showModal = false
            document.body.style.overflow = ''
        },
        initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                        
                        // Animate feature cards sequentially
                        if (entry.target.classList.contains('features-grid')) {
                            document.querySelectorAll('.feature-card').forEach((card, i) => {
                                setTimeout(() => {
                                    card.classList.add('animate-in')
                                }, 200 + i * 200)
                            })
                        }
                    }
                })
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            })
            
            document.querySelectorAll('[data-animate]').forEach(el => {
                observer.observe(el)
            })
            
            // Observe features grid
            const gridObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    document.querySelector('.features-grid')?.classList.add('animate-in')
                }
            }, { threshold: 0.1 })
            
            const grid = document.querySelector('.features-grid')
            if (grid) gridObserver.observe(grid)
        },
        
        animateTitle() {
            const lines = document.querySelectorAll('.title-line')
            lines.forEach((line, i) => {
                setTimeout(() => {
                    line.classList.add('animate-in')
                }, 400 + i * 150)
            })
        },

        initCounterAnimation() {
            // Counters are static text now, no animation needed
        }
    }
}
</script>

<style scoped>
/* ===== Section Base ===== */
.features {
    position: relative;
    padding: 160px 40px;
    background: transparent;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.features-gradient {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
    filter: blur(80px);
    animation: gradientFloat 12s ease-in-out infinite;
}

@keyframes gradientFloat {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    33% { opacity: 0.8; transform: translate(-30%, -40%) scale(1.15); }
    66% { opacity: 0.6; transform: translate(-60%, -60%) scale(0.9); }
}

.features-gradient-1 {
    width: 500px;
    height: 500px;
    top: -200px;
    right: -150px;
    animation-delay: 0s;
}

.features-gradient-2 {
    width: 400px;
    height: 400px;
    bottom: -150px;
    left: -100px;
    animation-delay: 4s;
}

.features-gradient-3 {
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 8s;
}

@keyframes gradientFloat {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    33% { opacity: 0.8; transform: translate(-30%, -40%) scale(1.15); }
    66% { opacity: 0.6; transform: translate(-60%, -60%) scale(0.9); }
}

/* ===== Container ===== */
.features-container {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
}

/* ===== Header ===== */
.features-header {
    text-align: center;
    margin-bottom: 100px;
}

.features-header-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 32px;
}

.label-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.5);
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
}

.label-pill-dot {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    animation: labelDotPulse 2s ease-in-out infinite;
}

@keyframes labelDotPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
}

.label-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
}

.features-title {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
}

.title-line {
    font-size: clamp(42px, 7vw, 72px);
    font-weight: 700;
    letter-spacing: -2px;
    color: #fff;
    line-height: 1.1;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    transition: font-family 0.3s ease;
    display: inline-block;
}

.title-line:hover {
    font-family: 'Courier New', monospace;
}

.features-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto 64px;
}

/* ===== Counters ===== */
.features-counters {
    display: flex;
    justify-content: center;
    gap: 80px;
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.counter-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.counter-value {
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -2px;
    line-height: 1;
    background: linear-gradient(180deg, #fff 0%, #666 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.counter-suffix {
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    opacity: 0.5;
    margin-left: 2px;
}

.counter-label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
}

/* ===== Features Grid ===== */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 32px;
    margin-bottom: 100px;
}

/* ===== Feature Card ===== */
.feature-card {
    position: relative;
    padding: 48px;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.feature-card:hover {
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-12px);
}

/* Card Background */
.feature-card-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.feature-card-shine {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.feature-card:hover .feature-card-shine {
    opacity: 1;
}

.feature-card-grid {
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 50px 50px;
}

/* Glow Ring */
.feature-card-ring {
    position: absolute;
    inset: -2px;
    border-radius: 24px;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
    pointer-events: none;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 1;
}

/* Icon Container */
.feature-card-icon-wrapper {
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 32px;
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

/* Card Number */
.feature-card-number {
    position: absolute;
    top: 48px;
    right: 48px;
    z-index: 2;
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.2);
    font-family: 'Courier New', monospace;
    transition: color 0.3s ease;
}

.feature-card:hover .feature-card-number {
    color: rgba(255, 255, 255, 0.4);
}

/* Card Content */
.feature-card-content {
    position: relative;
    z-index: 2;
}

.feature-card-title {
    font-size: 26px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
}

.feature-card-text {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 28px;
}

/* Metric */
.feature-card-metric {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.metric-main {
    display: flex;
    align-items: baseline;
    gap: 4px;
}

.metric-value {
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
    line-height: 1;
}

.metric-unit {
    font-size: 20px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
}

.metric-label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
}

/* Progress Bar */
.feature-card-progress {
    margin-bottom: 20px;
}

.progress-track {
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, #fff 100%);
    border-radius: 10px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Decorative Dots */
.feature-card-dots {
    display: flex;
    gap: 8px;
}

.dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
}

/* Corner Accent */
.feature-card-corner {
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 2;
}

/* ===== Bottom CTA ===== */
.features-bottom-cta {
    position: relative;
    padding: 40px 48px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
    max-width: 600px;
    margin: 0 auto;
}

.features-bottom-cta.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.bottom-cta-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
}

.bottom-cta-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.cta-text-main {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
}

.cta-text-sub {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}

.bottom-cta-link {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    padding: 16px 32px;
    background: #fff;
    color: #0a0a0a;
    border-radius: 100px;
    transition: all 0.3s ease;
}

.bottom-cta-link:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
}

.link-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.bottom-cta-link:hover .link-arrow {
    transform: translateX(6px);
}

/* Bottom CTA Decor */
.features-bottom-cta .bottom-cta-decor {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: 20px;
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

/* ===== Mobile ===== */
@media (max-width: 1024px) {
    .features {
        padding: 120px 24px;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .features-counters {
        flex-wrap: wrap;
        gap: 40px;
    }
    
    .bottom-cta-content {
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }
}

@media (max-width: 768px) {
    .features {
        padding: 80px 20px;
    }
    
    .features-header {
        margin-bottom: 60px;
    }
    
    .features-title {
        font-size: 32px;
    }
    
    .features-subtitle {
        font-size: 15px;
    }
    
    .features-counters {
        gap: 32px;
    }
    
    .counter-value,
    .counter-suffix {
        font-size: 42px;
    }
    
    .feature-card {
        padding: 32px 24px;
    }
    
    .feature-card-icon-wrapper {
        width: 64px;
        height: 64px;
    }
    
    .feature-card-icon img {
        width: 32px;
        height: 32px;
    }
    
    .bottom-cta-link {
        width: 100%;
        justify-content: center;
    }
}
</style>

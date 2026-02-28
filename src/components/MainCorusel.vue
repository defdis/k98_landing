<template>
    <section class="portfolio" id="profile">
        <div class="portfolio-container">
                <div class="portfolio-header" data-animate="fade-up">
                    <div class="portfolio-header-top">
                        <span class="portfolio-label">
                            <span class="label-dot"></span>
                            Наши работы
                        </span>
                        <div class="portfolio-line"></div>
                    </div>
                    <h2 class="portfolio-title">
                        <span class="title-line">Портфолио</span>
                    </h2>
                    <p class="portfolio-subtitle">Проекты, которыми мы гордимся</p>
                </div>

            <div class="carousel-wrapper" data-animate="fade-up">
                <Carousel
                    id="gallery"
                    :autoplay="4000"
                    :itemsToShow="1.5"
                    :itemsToScroll="1"
                    :pauseAutoplayOnHover="true"
                    :wrapAround="true"
                    :transition="600"
                    v-model="current_slide"
                >
                    <Slide v-for="item in lists.corusel" :key="item.id">
                        <div class="carousel-slide">
                            <div class="slide-image-wrapper">
                                <div class="slide-image">
                                    <img :src="item.img" :alt="item.title">
                                </div>
                                <div class="slide-image-overlay"></div>
                            </div>
                            <div class="slide-content">
                                <span class="slide-number">{{ String(item.id).padStart(2, '0') }}</span>
                                <span class="slide-title">{{ item.title }}</span>
                                <div class="slide-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>

            <div class="portfolio-cta" data-animate="fade-up">
                <button @click="open" class="cta-button">
                    <span>Хочу сайт!</span>
                    <div class="cta-button-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { PageBlocks } from "../stores/pageblocks.js"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'PortfolioCarousel',
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
            lists: [],
            current_slide: 0
        }
    },
    async beforeCreate() {
        try {
            this.lists = await PageBlocks()
        } catch (error) {
            console.log("Ошибка: ", error)
        }
    },
    emits: ['open-req'],
    mounted() {
        this.initAnimations()
    },
    methods: {
        open() {
            this.$emit('open-req')
        },
        initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            }, {
                threshold: 0.1
            })
            
            document.querySelectorAll('[data-animate]').forEach(el => {
                observer.observe(el)
            })
        }
    }
}
</script>

<style scoped>
.portfolio {
    padding: 160px 40px;
    background: #0f0f0f;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.portfolio-container {
    max-width: 1440px;
    margin: 0 auto;
}

.portfolio-header {
    margin-bottom: 80px;
}

.portfolio-header-top {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 32px;
}

.portfolio-label {
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

.label-dot {
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

.portfolio-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
}

.portfolio-title {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.title-line {
    font-size: clamp(36px, 5vw, 56px);
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

.portfolio-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    line-height: 1.7;
}

.carousel-wrapper {
    margin-bottom: 0;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.carousel-wrapper.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.carousel-slide {
    padding: 20px 16px;
    cursor: pointer;
}

.slide-image-wrapper {
    position: relative;
    width: 100%;
    height: 450px;
    border-radius: 16px;
    overflow: hidden;
    background: #1a1a1a;
}

.slide-image {
    width: 100%;
    height: 100%;
}

.slide-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.6) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.carousel-slide:hover .slide-image img {
    transform: scale(1.08);
}

.carousel-slide:hover .slide-image-overlay {
    opacity: 1;
}

.slide-content {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px 8px 8px;
}

.slide-number {
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.3);
    font-family: 'Courier New', monospace;
}

.slide-title {
    flex: 1;
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    transition: color 0.3s ease;
}

.carousel-slide:hover .slide-title {
    color: rgba(255, 255, 255, 0.8);
}

.slide-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
}

.carousel-slide:hover .slide-arrow {
    opacity: 1;
    transform: translateX(0);
}

.slide-arrow:hover {
    background: #fff;
    color: #0a0a0a;
}

/* Carousel Navigation */
:deep(.carousel__pagination) {
    bottom: -50px;
    gap: 12px;
}

:deep(.carousel__pagination-button) {
    background: rgba(255, 255, 255, 0.2);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

:deep(.carousel__pagination-button::after) {
    display: none;
}

:deep(.carousel__pagination-button--active) {
    background: #fff;
    transform: scale(1.3);
}

:deep(.carousel__pagination-button:hover) {
    background: rgba(255, 255, 255, 0.5);
}

:deep(.carousel__prev),
:deep(.carousel__next) {
    color: rgba(255, 255, 255, 0.5);
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    transition: all 0.3s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

:deep(.carousel__prev--disabled),
:deep(.carousel__next--disabled) {
    opacity: 0.2;
}

.portfolio-cta {
    text-align: center;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.portfolio-cta.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding: 22px 56px;
    background: #fff;
    color: #0a0a0a;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
}

.cta-button-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.cta-button:hover .cta-button-arrow {
    transform: translateX(6px);
}

/* Mobile */
@media (max-width: 768px) {
    .portfolio {
        padding: 100px 20px;
    }
    
    .portfolio-header {
        margin-bottom: 60px;
    }
    
    .slide-image-wrapper {
        height: 300px;
    }
    
    .slide-content {
        flex-wrap: wrap;
    }
    
    .slide-arrow {
        opacity: 1;
        transform: none;
        width: 36px;
        height: 36px;
    }
}
</style>

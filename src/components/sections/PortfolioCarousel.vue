<template>
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
            <Slide v-for="item in items" :key="item.id">
                <div class="carousel-slide">
                    <div class="slide-image-wrapper">
                        <div class="slide-image">
                            <img :src="item.img" :alt="item.title">
                        </div>
                    </div>
                    <div class="slide-content">
                        <span class="slide-number">{{ String(item.id).padStart(2, '0') }}</span>
                        <span class="slide-title">{{ item.title }}</span>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'PortfolioCarousel',
    components: {
        Carousel,
        Slide,
        Navigation
    },
    emits: ['open-form'],
    data() {
        return {
            current_slide: 0,
            items: [
                { id: 1, title: 'Загородный комплекс Dolphin Planet', img: new URL('../../assets/img/carousel/5467818845180918234.jpg', import.meta.url).href },
                { id: 2, title: 'Интернет магазин BABAROMA', img: new URL('../../assets/img/carousel/5467818845180918235.jpg', import.meta.url).href },
                { id: 3, title: 'Интернет магазин BABAROMA', img: new URL('../../assets/img/carousel/5467818845180918236.jpg', import.meta.url).href },
                { id: 4, title: 'Загородный комплекс Dolphin Planet', img: new URL('../../assets/img/carousel/5467818845180918237.jpg', import.meta.url).href },
                { id: 5, title: 'Загородный комплекс Dolphin Planet', img: new URL('../../assets/img/carousel/5467818845180918238.jpg', import.meta.url).href },
                { id: 6, title: 'Интернет магазин ТД Строй Хит', img: new URL('../../assets/img/carousel/photo_5260396333087003190_y.jpg', import.meta.url).href },
                { id: 7, title: 'Интернет магазин ТД Строй Хит', img: new URL('../../assets/img/carousel/photo_5260396333087003191_y.jpg', import.meta.url).href },
                { id: 8, title: 'Block Chain стартап HuntBet', img: new URL('../../assets/img/carousel/photo_5260475356190283631_y.jpg', import.meta.url).href },
                { id: 9, title: 'Загородный комплекс Nero Planet', img: new URL('../../assets/img/carousel/5467818845180918240.jpg', import.meta.url).href }
            ]
        }
    }
}
</script>

<style scoped>

.carousel-wrapper {
    margin-top: 80px;
    margin-bottom: 0;
    width: 100%;
    min-height: 500px;
}

.carousel-wrapper :deep(.carousel) {
    width: 100%;
    height: 500px;
}

.carousel-wrapper :deep(.carousel__track) {
    width: 100%;
    height: 100%;
}

.carousel-wrapper :deep(.carousel__viewport) {
    height: 500px;
    margin-top: 50px;
    overflow: visible;
}

.carousel-wrapper :deep(.carousel__slide) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: calc(100% / 1.5);
    padding: 0 30px;
    overflow: visible;
}

.carousel-wrapper :deep(.carousel__slide--active) {
    height: 500px;
    z-index: 1;
}

.carousel-wrapper :deep(.carousel__slide--active) .slide-image-wrapper {
    filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.5));
}

.carousel-wrapper :deep(.carousel__slide--active) .slide-image img {
    transform: scale(1.05);
}

.carousel-wrapper :deep(.carousel__slide:not(.carousel__slide--active)) {
    opacity: 0.7;
    transform: scale(0.95);
}

.carousel-wrapper :deep(.carousel__slide:not(.carousel__slide--active)) .slide-image-wrapper {
    filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 0.4));
}

.carousel-slide {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}

.slide-image-wrapper {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: visible;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.5));
    transition: filter 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-image img {
    width: auto;
    max-height: 100%;
    max-width: 100%;
    display: block;
    border-radius: var(--radius-lg);
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide:hover .slide-image-wrapper {
    filter: drop-shadow(0 25px 70px rgba(0, 0, 0, 0.8));
}

.carousel-slide:hover .slide-image img {
    transform: scale(1.08);
}

.carousel-slide:hover .slide-title {
    color: var(--text-primary);
}

.slide-content {
    display: flex;
    align-items: center;
    gap: var(--gap-md);
    padding: var(--gap-md) var(--gap-sm) 0;
}

.slide-number {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-muted);
    font-family: 'Courier New', monospace;
}

.slide-title {
    flex: 1;
    font-size: var(--text-base);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    transition: color var(--transition-fast);
}

.carousel-slide:hover .slide-title {
    color: var(--text-primary);
}

/* Carousel Navigation */
:deep(.carousel__pagination) {
    bottom: -40px;
    gap: 12px;
}

:deep(.carousel__pagination-button) {
    background: rgba(255, 255, 255, 0.2);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

:deep(.carousel__pagination-button--active) {
    background: var(--text-primary);
    transform: scale(1.3);
}

:deep(.carousel__prev),
:deep(.carousel__next) {
    color: rgba(255, 255, 255, 0.5);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    transition: all 0.3s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
    .slide-image-wrapper {
        height: 280px;
    }
}
</style>

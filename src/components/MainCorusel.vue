<template>
  <section class="portfolio" id="profile">
    <div class="portfolio-container">
      <div class="portfolio-header">
        <h2 class="portfolio-title">Портфолио</h2>
        <p class="portfolio-subtitle">Проекты, которыми мы гордимся</p>
      </div>

      <div class="carousel-wrapper">
        <Carousel
          id="gallery"
          :autoplay="4000"
          :itemsToShow="1.5"
          :pauseAutoplayOnHover="true"
          :wrapAround="true"
          :transition="500"
          v-model="current_slide"
        >
          <Slide v-for="item in lists.corusel" :key="item.id">
            <div class="carousel-slide">
              <div class="slide-image">
                <img :src="item.img" :alt="item.title">
              </div>
              <div class="slide-content">
                <span class="slide-title">{{ item.title }}</span>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <div class="portfolio-cta">
        <button @click="open" class="cta-button">Хочу сайт!</button>
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
  methods: {
    open() {
      this.$emit('open-req')
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding: 120px 40px;
  background: #0f0f0f;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.portfolio-container {
  max-width: 1400px;
  margin: 0 auto;
}

.portfolio-header {
  margin-bottom: 64px;
}

.portfolio-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: #fff;
  margin-bottom: 16px;
}

.portfolio-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
}

.carousel-wrapper {
  margin-bottom: 64px;
}

.carousel-slide {
  padding: 16px;
}

.slide-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  background: #1a1a1a;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-slide:hover .slide-image img {
  transform: scale(1.05);
}

.slide-content {
  padding: 20px 8px 8px;
}

.slide-title {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}

/* Carousel Navigation Styling */
:deep(.carousel__pagination) {
  bottom: -40px;
}

:deep(.carousel__pagination-button) {
  background: rgba(255, 255, 255, 0.3);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

:deep(.carousel__pagination-button--active) {
  background: #fff;
  transform: scale(1.2);
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: rgba(255, 255, 255, 0.5);
  width: 40px;
  height: 40px;
  transition: color 0.2s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  color: #fff;
}

:deep(.carousel__prev--disabled),
:deep(.carousel__next--disabled) {
  opacity: 0.3;
}

.portfolio-cta {
  text-align: center;
}

.cta-button {
  display: inline-block;
  padding: 20px 56px;
  background: #fff;
  color: #0a0a0a;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Mobile */
@media (max-width: 768px) {
  .portfolio {
    padding: 80px 20px;
  }

  .portfolio-header {
    margin-bottom: 40px;
  }

  .carousel-wrapper {
    margin-bottom: 48px;
  }

  .slide-image {
    height: 280px;
  }
}
</style>

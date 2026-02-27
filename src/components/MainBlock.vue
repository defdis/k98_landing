<template>
  <section class="services" id="about">
    <div class="services-container">
      <div class="services-header">
        <h2 class="services-title">Услуги</h2>
        <p class="services-subtitle">Полный цикл веб-разработки: от идеи до запуска и поддержки</p>
      </div>

      <div class="services-grid">
        <div 
          v-for="(item, index) in lists.blocks" 
          :key="item.id" 
          class="service-card"
          :class="{ 'service-card--alt': index % 2 === 1 }"
        >
          <div class="service-card-image">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="service-card-content">
            <span class="service-card-tag">{{ getTag(item.title) }}</span>
            <h3 class="service-card-title">{{ item.title }}</h3>
            <p class="service-card-text">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div class="services-cta">
        <button @click="open" class="cta-button">Обсудить проект</button>
      </div>
    </div>
  </section>
</template>

<script>
import { PageBlocks } from "../stores/pageblocks.js"

export default {
  data() {
    return {
      lists: [],
      tags: {
        'Лендинги': 'LANDING',
        'Корпоративные сайты': 'CORPORATE',
        'Интернет-магазины': 'ECOMMERCE',
        'Веб-приложения': 'WEB APP'
      }
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
    },
    getTag(title) {
      return this.tags[title] || 'WEB'
    }
  }
}
</script>

<style scoped>
.services {
  padding: 120px 40px;
  background: #0a0a0a;
}

.services-container {
  max-width: 1400px;
  margin: 0 auto;
}

.services-header {
  margin-bottom: 80px;
}

.services-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: #fff;
  margin-bottom: 16px;
}

.services-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  line-height: 1.6;
  max-width: 600px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
}

.service-card {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.service-card-image {
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.service-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-card-image img {
  transform: scale(1.05);
}

.service-card-content {
  padding: 32px;
}

.service-card-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.service-card-title {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}

.service-card-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  font-weight: 300;
}

.services-cta {
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
  .services {
    padding: 80px 20px;
  }

  .services-header {
    margin-bottom: 48px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .service-card-image {
    height: 240px;
  }

  .service-card-content {
    padding: 24px;
  }
}
</style>

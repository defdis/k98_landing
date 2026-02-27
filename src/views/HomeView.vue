<template>
  <!-- Services Section -->
  <MainBlock @open-req="handleOpen" />

  <!-- Features Section -->
  <section class="features">
    <div class="features-container">
      <div class="features-header">
        <h2 class="features-title">Почему K98</h2>
        <p class="features-subtitle">Мы создаём цифровые продукты, которые помогают бизнесу расти</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <img src="../assets/img/quality.svg" alt="Качество">
          </div>
          <h3 class="feature-title">Качество</h3>
          <p class="feature-text">Внимательны к задачам, отрасли и целям заказчика. Предлагаем оптимальное решение для каждого проекта.</p>
          <div class="feature-metric">
            <span class="metric-value">100+</span>
            <span class="metric-label">проектов</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img src="../assets/img/time.svg" alt="Время">
          </div>
          <h3 class="feature-title">Время</h3>
          <p class="feature-text">Ценим ваше время. Консультация в течение 30 минут. Соблюдаем дедлайны.</p>
          <div class="feature-metric">
            <span class="metric-value">30 мин</span>
            <span class="metric-label">на связь</span>
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img src="../assets/img/price.svg" alt="Цена">
          </div>
          <h3 class="feature-title">Цена</h3>
          <p class="feature-text">Прозрачное ценообразование. Фиксированные цены на стандартные решения.</p>
          <div class="feature-metric">
            <span class="metric-value">от 50к</span>
            <span class="metric-label">стоимость</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Carousel Section -->
  <MainCorusel @open-req="handleOpen" />

  <!-- Form Modal -->
  <FormView v-if="showModal" @close-req="handleClose" />
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
      showModal: false
    }
  },
  methods: {
    handleOpen() {
      this.showModal = true
    },
    handleClose() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.features {
  padding: 120px 40px;
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.features-header {
  margin-bottom: 80px;
}

.features-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: #fff;
  margin-bottom: 16px;
}

.features-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  line-height: 1.6;
  max-width: 600px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}

.feature-card {
  padding: 40px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
  color: #fff;
}

.feature-icon img {
  width: 100%;
  height: 100%;
}

.feature-title {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}

.feature-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 32px;
}

.feature-metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.metric-value {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;
}

.metric-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

/* Mobile */
@media (max-width: 768px) {
  .features {
    padding: 80px 20px;
  }

  .features-header {
    margin-bottom: 48px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .feature-card {
    padding: 32px 24px;
  }
}
</style>

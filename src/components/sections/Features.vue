<template>
    <section class="features section">
        <!-- Animated Background -->
        <div class="features-bg">
            <div class="features-gradient features-gradient-1"></div>
            <div class="features-gradient features-gradient-2"></div>
            <div class="features-gradient features-gradient-3"></div>
        </div>

        <div class="container">
            <!-- Section Header -->
            <SectionHeader label-text="Преимущества">
                <template #title>
                    <span class="section-title-line">Почему выбирают</span>
                    <span class="section-title-line">именно нас</span>
                </template>
                <template #subtitle>
                    Каждый день мы прилагаем все усилия, чтобы сделать жизнь наших клиентов лучше и счастливее
                </template>
                <template #extra>
                    <!-- Counters -->
                    <div class="counters">
                        <div class="counter-item" v-for="counter in counters" :key="counter.label">
                            <span class="counter-value">{{ counter.value }}</span>
                            <span class="counter-suffix">{{ counter.suffix }}</span>
                            <span class="counter-label">{{ counter.label }}</span>
                        </div>
                    </div>
                </template>
            </SectionHeader>

            <!-- Features Grid -->
            <div class="features-grid" data-animate="fade-up">
                <FeatureCard
                    v-for="(feature, index) in featuresList"
                    :key="feature.id"
                    :feature="feature"
                    :index="index"
                />
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '../layout/SectionHeader.vue'
import FeatureCard from './FeatureCard.vue'

export default {
    name: 'Features',
    components: {
        SectionHeader,
        FeatureCard
    },
    data() {
        return {
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
                    icon: new URL('../../assets/img/quality.svg', import.meta.url).href,
                    metric: { value: '100', unit: '%', label: 'гарантия качества' }
                },
                {
                    id: 2,
                    title: 'Время',
                    text: 'Наш специалист проведёт консультацию в течение 30 минут. Соблюдаем все дедлайны',
                    icon: new URL('../../assets/img/time.svg', import.meta.url).href,
                    metric: { value: '24', unit: '/7', label: 'поддержка' }
                },
                {
                    id: 3,
                    title: 'Цена',
                    text: 'Наши цены фиксированы на стандартные предложения. Прозрачное ценообразование',
                    icon: new URL('../../assets/img/price.svg', import.meta.url).href,
                    metric: { value: 'от', unit: '50к', label: 'стоимость проекта' }
                }
            ]
        }
    }
}
</script>

<style scoped>
.features {
    position: relative;
}

.features-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.features-gradient {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
    filter: blur(80px);
    animation: gradientFloat 12s ease-in-out infinite;
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

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--gap-xl);
}
</style>

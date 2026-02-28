<template>
    <section class="services section" id="about">
        <!-- Animated Background -->
        <div class="services-bg">
            <div class="glow services-glow-1"></div>
            <div class="glow services-glow-2"></div>
        </div>

        <div class="container">
            <!-- Section Header -->
            <SectionHeader label-text="Наши услуги">
                <template #title>
                    <span class="section-title-line">Что мы умеем?</span>
                </template>
                <template #subtitle>
                    Полный цикл веб-разработки: от первой идеи до технической поддержки
                </template>
            </SectionHeader>

            <!-- Services Grid -->
            <div class="services-grid" data-animate="fade-up">
                <div 
                    v-for="(item, index) in items" 
                    :key="item.id" 
                    class="card service-card"
                >
                    <!-- Card Number -->
                    <div class="card-number">
                        <span>{{ String(index + 1).padStart(2, '0') }}</span>
                    </div>

                    <!-- Card Tag -->
                    <div class="card-tag">
                        <span class="card-tag-text">{{ item.tag }}</span>
                        <div class="card-tag-line"></div>
                    </div>

                    <!-- Card Image -->
                    <div class="card-image-wrapper">
                        <div class="card-image">
                            <img :src="item.img" :alt="item.title">
                        </div>
                    </div>

                    <!-- Card Content -->
                    <div class="card-content">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.text }}</p>

                        <!-- Features List -->
                        <ul class="card-features">
                            <li v-for="feature in item.features" :key="feature">
                                <span class="feature-dot"></span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Card Background -->
                    <div class="card-bg">
                        <div class="card-gradient"></div>
                        <div class="card-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '../layout/SectionHeader.vue'

export default {
    name: 'Services',
    components: {
        SectionHeader
    },
    emits: ['open-form'],
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Лендинги',
                    text: 'Одностраничные сайты для продвижения товаров и услуг. Высокая конверсия, современный дизайн.',
                    tag: 'LANDING PAGE',
                    img: new URL('../../assets/img/foto/5247098216686680846_cZ0SJgO.jpg', import.meta.url).href,
                    features: ['Высокая конверсия', 'Современный дизайн', 'Адаптивная вёрстка', 'SEO-оптимизация']
                },
                {
                    id: 2,
                    title: 'Корпоративные сайты',
                    text: 'Многостраничные сайты для компаний. Каталог услуг, новости, форма обратной связи.',
                    tag: 'CORPORATE',
                    img: new URL('../../assets/img/foto/5247098216686680853_ht4fUoT.jpg', import.meta.url).href,
                    features: ['Многостраничная структура', 'CMS для управления', 'Интеграция с CRM', 'Техподдержка']
                },
                {
                    id: 3,
                    title: 'Интернет-магазины',
                    text: 'Полноценные онлайн-магазины с корзиной, оплатой и интеграцией с системами учёта.',
                    tag: 'ECOMMERCE',
                    img: new URL('../../assets/img/foto/5247098216686680860.jpg', import.meta.url).href,
                    features: ['Онлайн-оплата', 'Учёт товаров', 'Личный кабинет', 'Аналитика продаж']
                },
                {
                    id: 4,
                    title: 'Веб-приложения',
                    text: 'Сложные интерактивные системы для автоматизации бизнес-процессов.',
                    tag: 'WEB APP',
                    img: new URL('../../assets/img/foto/photo_2026-02-27_16-01-03.jpg', import.meta.url).href,
                    features: ['Сложная логика', 'API интеграции', 'Безопасность', 'Масштабируемость']
                },
                {
                    id: 5,
                    title: 'Встраиваемые системы',
                    text: 'Разработка программного обеспечения для микроконтроллеров и промышленного оборудования.',
                    tag: 'EMBEDDED',
                    img: new URL('../../assets/img/foto/5247098216686680846_cZ0SJgO.jpg', import.meta.url).href,
                    features: ['Реальное время', 'Низкое энергопотребление', 'Периферийные интерфейсы', 'Отказоустойчивость']
                }
            ]
        }
    }
}
</script>

<style scoped>
.services {
    position: relative;
}

.services-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.services-glow-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
}

.services-glow-2 {
    width: 300px;
    height: 300px;
    bottom: 20%;
    right: 10%;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--gap-xl);
    margin-bottom: 0;
}

.service-card {
    position: relative;
    overflow: hidden;
}

.card-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.card-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.card:hover .card-gradient {
    opacity: 1;
}

.card-grid {
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 40px 40px;
}
</style>
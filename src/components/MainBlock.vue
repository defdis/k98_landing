<template>
    <section class="services" id="about">
        <!-- Animated Background -->
        <div class="services-bg">
            <div class="services-glow services-glow-1"></div>
            <div class="services-glow services-glow-2"></div>
        </div>

        <div class="services-container">
            <!-- Section Header -->
            <div class="services-header" data-animate="fade-up">
                <div class="services-header-top">
                    <span class="services-label">
                        <span class="services-label-dot"></span>
                        Наши услуги
                    </span>
                    <div class="services-header-line"></div>
                </div>
                <h2 class="services-title">
                    <span class="services-title-line">Что мы умеем?</span>
                </h2>
                <p class="services-subtitle">Полный цикл веб-разработки: от первой идеи до технической поддержки</p>
            </div>

            <!-- Services Grid -->
            <div class="services-grid" data-animate="fade-up">
                <div class="service-card" v-for="(item, index) in lists.blocks" :key="item.id">
                    <!-- Card Number -->
                    <div class="service-card-number">
                        <span>{{ String(index + 1).padStart(2, '0') }}</span>
                    </div>

                    <!-- Card Tag -->
                    <div class="service-card-tag">
                        <span>{{ getTag(item.title) }}</span>
                        <div class="service-card-tag-line"></div>
                    </div>

                    <!-- Card Image -->
                    <div class="service-card-image-wrapper">
                        <div class="service-card-image">
                            <img :src="item.img" :alt="item.title">
                        </div>
                        <div class="service-card-image-overlay"></div>
                        <div class="service-card-image-border"></div>
                    </div>

                    <!-- Card Content -->
                    <div class="service-card-content">
                        <h3 class="service-card-title">{{ item.title }}</h3>
                        <p class="service-card-text">{{ item.text }}</p>

                        <!-- Features List -->
                        <ul class="service-card-features">
                            <li v-for="feature in getFeatures(item.title)" :key="feature">
                                <span class="feature-dot"></span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Card Background -->
                    <div class="service-card-bg">
                        <div class="service-card-gradient"></div>
                        <div class="service-card-grid"></div>
                    </div>

                    <!-- Hover Glow -->
                    <div class="service-card-glow"></div>
                </div>
            </div>

            <!-- Key Projects Section -->
            <div class="key-projects" data-animate="fade-up">
                <div class="key-projects-header">
                    <div class="key-projects-header-top">
                        <span class="key-projects-label">
                            <span class="label-dot"></span>
                            На примерах
                        </span>
                        <div class="key-projects-line"></div>
                    </div>
                </div>
                <div class="key-projects-grid">
                    <div class="key-project-card" v-for="project in keyProjects" :key="project.id">
                        <div class="project-card-header">
                            <div class="project-tags">
                                <span class="project-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                            </div>
                        </div>
                        <h4 class="project-title">{{ project.title }}</h4>
                        <p class="project-description">{{ project.description }}</p>
                        <div class="project-result" v-if="project.result">
                            <span class="result-text">{{ project.result }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="services-cta-wrapper" data-animate="fade-up">
                <div class="services-cta">
                    <button @click="open" class="cta-button">
                        <span class="cta-button-text">Обсудить проект</span>
                        <div class="cta-button-bg"></div>
                        <div class="cta-button-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </button>
                    
                    <div class="services-cta-text">
                        <span>Готовы начать?</span>
                        <span>Свяжемся в течение 30 минут</span>
                    </div>
                </div>
                
                <!-- Decorative Elements -->
                <div class="services-cta-decor">
                    <div class="decor-circle decor-circle-1"></div>
                    <div class="decor-circle decor-circle-2"></div>
                    <div class="decor-circle decor-circle-3"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { PageBlocks } from "../stores/pageblocks.js"

export default {
    data() {
        return {
            lists: { blocks: [], corusel: [] },
            hoveredCard: null,
            titleWords: ['Что', 'мы', 'умеем'],
            features: {
                'Лендинги': ['Высокая конверсия', 'Современный дизайн', 'Адаптивная вёрстка', 'SEO-оптимизация'],
                'Корпоративные сайты': ['Многостраничная структура', 'CMS для управления', 'Интеграция с CRM', 'Техподдержка'],
                'Интернет-магазины': ['Онлайн-оплата', 'Учёт товаров', 'Личный кабинет', 'Аналитика продаж'],
                'Веб-приложения': ['Сложная логика', 'API интеграции', 'Безопасность', 'Масштабируемость'],
                'Встраиваемые системы': ['Реальное время', 'Низкое энергопотребление', 'Периферийные интерфейсы', 'Отказоустойчивость']
            },
            keyProjects: [
                {
                    id: 1,
                    title: 'Сайт для сети пекарен',
                    period: 'Июнь 2021 — Наст. время',
                    tags: ['Django', 'DRF', 'Nuxt.js', 'PrimeVue', 'PostgreSQL'],
                    description: 'Цифровой канал продаж для сети пекарен с каталогом продукции, формированием заказов с выбором параметров и интеграцией с Telegram для уведомлений менеджеров.',
                    result: '10 000+ заказов processed через систему'
                },
                {
                    id: 2,
                    title: '«Умный холодильник» (IoT вендинг)',
                    period: '2020 — 2023',
                    tags: ['Django', 'DRF', 'FastAPI', 'Vue.js', 'Raspberry Pi', 'MQTT', 'PostgreSQL'],
                    description: 'Аппаратно-программный комплекс, превращающий обычный холодильник в умный вендинговый автомат с контролем веса, видеозаписью и полным циклом онлайн-покупок.',
                    result: '0 хищений за год работы'
                },
                {
                    id: 3,
                    title: 'Система автоматизации документооборота',
                    period: 'Май 2025 — Наст. время',
                    tags: ['Django', 'DRF', 'Vue.js', '1C Integration', 'PostgreSQL'],
                    description: 'B2B система для автоматической генерации договоров и актов на основе шаблонов с переменными. Интеграция с 1С обеспечивает точность данных.',
                    result: '11 500+ документов сгенерировано'
                },
                {
                    id: 4,
                    title: '«Умный шлагбаум» (Computer Vision)',
                    period: '',
                    tags: ['Django', 'DRF', 'OpenCV', 'PyTorch', 'YOLO', 'EasyOCR', 'PostgreSQL'],
                    description: 'Система контроля доступа, автоматически распознающая автомобильные номера и открывающая шлагбаум для транспортных средств из белого списка.',
                    result: 'Заменила ручное управление'
                },
                {
                    id: 5,
                    title: 'Портал для гостиничного комплекса с дельфинарием',
                    period: '',
                    tags: ['Django', 'DRF', 'Vue.js', 'PostgreSQL'],
                    description: 'Комплексный портал с онлайн-бронированием мест (схема зала как в кинотеатре), системой управления заказами, обработкой платежей и управлением услугами.',
                    result: '20 000+ заказов processed'
                },
                {
                    id: 6,
                    title: 'Интернет-магазин стройматериалов',
                    period: '',
                    tags: ['Django', 'DRF', 'Vue.js', '1C Integration', 'PostgreSQL'],
                    description: 'Крупный интернет-магазин с каталогом из 4000+ товаров, полной интеграцией с 1С для синхронизации остатков, цен и заказов.',
                    result: '4000+ товаров в каталоге'
                }
            ]
        }
    },
    async beforeCreate() {
        try {
            this.lists = await PageBlocks()
        } catch (error) {
            console.log("Ошибка: ", error)
            this.lists = { blocks: [], corusel: [] }
        }
    },
    emits: ['open-req'],
    mounted() {
        this.initAnimations()
        this.animateTitle()
    },
    methods: {
        open() {
            this.$emit('open-req')
        },
        getTag(title) {
            const tags = {
                'Лендинги': 'LANDING PAGE',
                'Корпоративные сайты': 'CORPORATE',
                'Интернет-магазины': 'ECOMMERCE',
                'Веб-приложения': 'WEB APP',
                'Встраиваемые системы': 'EMBEDDED'
            }
            return tags[title] || 'WEB'
        },
        getFeatures(title) {
            return this.features[title] || ['Индивидуальный подход', 'Качественная реализация']
        },
        initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')

                        // Animate service cards sequentially
                        if (entry.target.classList.contains('services-grid')) {
                            document.querySelectorAll('.service-card').forEach((card, i) => {
                                setTimeout(() => {
                                    card.classList.add('animate-in')
                                }, 100 + i * 150)
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
        },
        animateTitle() {
            const words = document.querySelectorAll('.services-title-word')
            words.forEach((word, i) => {
                setTimeout(() => {
                    word.classList.add('animate-in')
                }, 500 + i * 100)
            })
        }
    }
}
</script>

<style scoped>
/* ===== Section Base ===== */
.services {
    position: relative;
    padding: 160px 40px;
    background: transparent;
    overflow: hidden;
}

/* ===== Animated Background ===== */
.services-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: transparent;
}

/* Additional glow layers */
.services-glow {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
    filter: blur(60px);
    animation: glowPulse 8s ease-in-out infinite;
}

.services-glow-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.services-glow-2 {
    width: 300px;
    height: 300px;
    bottom: 20%;
    right: 10%;
    animation-delay: 4s;
}

@keyframes glowPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
}

/* ===== Container ===== */
.services-container {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
}

/* ===== Header ===== */
.services-header {
    margin-bottom: 100px;
}

.services-header-top {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 32px;
}

.services-label {
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

.services-label-dot {
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

.services-header-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
}

.services-title {
    margin-bottom: 24px;
}

.services-title-line {
    font-size: clamp(42px, 7vw, 80px);
    font-weight: 700;
    letter-spacing: -2px;
    color: #fff;
    line-height: 1.1;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    transition: font-family 0.3s ease;
    display: inline-block;
}

.services-title-line:hover {
    font-family: 'Courier New', monospace;
}

.services-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    line-height: 1.7;
    max-width: 600px;
    margin-bottom: 48px;
}

/* ===== Stats Row ===== */
.services-stats {
    display: flex;
    gap: 64px;
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.service-stat {
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-stat.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.stat-number {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -2px;
    line-height: 1;
    background: linear-gradient(180deg, #fff 0%, #666 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* ===== Services Grid ===== */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
    margin-bottom: 100px;
    opacity: 0;
    transform: translateY(60px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.services-grid.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* ===== Service Card ===== */
.service-card {
    position: relative;
    padding: 32px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(40px);
}

.service-card.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.service-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
}

/* Card Background */
.service-card-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.service-card-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.service-card:hover .service-card-gradient {
    opacity: 1;
}

.service-card-grid {
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 40px 40px;
}

/* Card Number */
.service-card-number {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 2;
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.2);
    font-family: 'Courier New', monospace;
    transition: color 0.3s ease;
}

.service-card:hover .service-card-number {
    color: rgba(255, 255, 255, 0.4);
}

/* Card Tag */
.service-card-tag {
    position: absolute;
    top: 24px;
    left: 24px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
}

.service-card-tag span {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #0a0a0a;
    padding: 8px 14px;
    background: #fff;
    border-radius: 100px;
}

.service-card-tag-line {
    width: 20px;
    height: 1px;
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-card-tag-line {
    transform: scaleX(1);
}

/* Card Image */
.service-card-image-wrapper {
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
    z-index: 1;
    margin-bottom: 24px;
    border-radius: 12px;
}

.service-card-image {
    width: 100%;
    height: 100%;
}

.service-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-card-image img {
    transform: scale(1.1);
}

.service-card-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.9) 100%);
    pointer-events: none;
}

.service-card-image-border {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
}

/* Card Content */
.service-card-content {
    position: relative;
    z-index: 1;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.service-card-title {
    font-size: 20px;
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
    margin-bottom: 16px;
    flex: 1;
}

/* Features List */
.service-card-features {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
    list-style: none;
}

.service-card-features li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}

.feature-dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.service-card:hover .feature-dot {
    background: #fff;
    transform: scale(1.2);
}

/* Card Link */
.service-card-link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    transition: gap 0.3s ease;
}

.service-card-link-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.service-card-link-arrow svg {
    transition: transform 0.3s ease;
}

.service-card:hover .service-card-link {
    gap: 16px;
}

.service-card:hover .service-card-link-arrow {
    background: #fff;
    color: #0a0a0a;
}

.service-card:hover .service-card-link-arrow svg {
    transform: translateX(4px);
}

/* Card Glow Effect */
.service-card-glow {
    position: absolute;
    inset: -2px;
    background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
    border-radius: 24px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 3;
}

/* ===== CTA Section ===== */
.services-cta-wrapper {
    position: relative;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.services-cta-wrapper.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.services-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 48px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    max-width: 600px;
    margin: 0 auto;
}

.cta-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 22px 56px;
    background: #fff;
    color: #0a0a0a;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button-text {
    position: relative;
    z-index: 1;
}

.cta-button-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, #fff 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.cta-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.15);
}

.cta-button:hover .cta-button-bg {
    opacity: 1;
}

.cta-button-arrow {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover .cta-button-arrow {
    transform: translateX(8px);
}

.services-cta-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: right;
}

.services-cta-text span:first-child {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
}

.services-cta-text span:last-child {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
}

/* CTA Decorative Elements */
.services-cta-decor {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: 20px;
    max-width: 600px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
}

.decor-circle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
    animation: decorFloat 10s ease-in-out infinite;
}

.decor-circle-1 {
    width: 200px;
    height: 200px;
    top: -100px;
    right: -50px;
    animation-delay: 0s;
}

.decor-circle-2 {
    width: 150px;
    height: 150px;
    bottom: -75px;
    left: -30px;
    animation-delay: 3s;
}

.decor-circle-3 {
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    animation-delay: 6s;
}

@keyframes decorFloat {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    33% { transform: translate(20px, -20px) scale(1.1); opacity: 0.8; }
    66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.6; }
}

/* ===== Key Projects Section ===== */
.key-projects {
    margin-bottom: 100px;
}

.key-projects-header {
    margin-bottom: 48px;
}

.key-projects-header-top {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 32px;
}

.key-projects-label {
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

.key-projects-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
}

.key-projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
}

.key-project-card {
    padding: 32px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.key-project-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
}

.project-card-header {
    margin-bottom: 16px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.project-tag {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.7);
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
}

.project-title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
}

.project-description {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    font-weight: 300;
    margin-bottom: 16px;
    flex: 1;
}

.project-result {
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
}

.result-text {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
}

/* ===== Mobile ===== */
@media (max-width: 1024px) {
    .services {
        padding: 120px 24px;
    }

    .key-projects-grid {
        grid-template-columns: 1fr;
    }

    .services-stats {
        flex-wrap: wrap;
        gap: 32px;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .services-cta {
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }

    .services-cta-text {
        text-align: center;
    }
}

@media (max-width: 768px) {
    .services {
        padding: 80px 20px;
    }
    
    .services-header {
        margin-bottom: 60px;
    }
    
    .services-title {
        font-size: 32px;
    }
    
    .services-stats {
        gap: 24px;
    }
    
    .stat-number {
        font-size: 36px;
    }
    
    .service-card-image-wrapper {
        height: 260px;
    }
    
    .cta-button {
        padding: 18px 40px;
        width: 100%;
        justify-content: center;
    }
}
</style>

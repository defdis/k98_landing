<template>
    <section class="services-examples section">
        <div class="container">
            <!-- Section Header -->
            <SectionHeader label-text="На примерах" />

            <!-- Projects Grid -->
            <div class="grid-3" data-animate="fade-up">
                <div v-for="project in projects" :key="project.id" class="card project-card">
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
    </section>
</template>

<script>
import SectionHeader from '../layout/SectionHeader.vue'

export default {
    name: 'ServicesExamples',
    components: {
        SectionHeader
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Сайт для сети пекарен',
                    tags: ['Django', 'DRF', 'Nuxt.js', 'PrimeVue', 'PostgreSQL'],
                    description: 'Цифровой канал продаж для сети пекарен с каталогом продукции, формированием заказов и интеграцией с Telegram.',
                    result: '10 000+ заказов через систему'
                },
                {
                    id: 2,
                    title: '«Умный холодильник» (IoT вендинг)',
                    tags: ['Django', 'DRF', 'FastAPI', 'Vue.js', 'Raspberry Pi', 'MQTT', 'PostgreSQL'],
                    description: 'Аппаратно-программный комплекс, превращающий обычный холодильник в умный вендинговый автомат.',
                    result: '0 хищений за год работы'
                },
                {
                    id: 3,
                    title: 'Система автоматизации документооборота',
                    tags: ['Django', 'DRF', 'Vue.js', '1C Integration', 'PostgreSQL'],
                    description: 'B2B система для автоматической генерации договоров и актов на основе шаблонов с переменными.',
                    result: '11 500+ документов сгенерировано'
                },
                {
                    id: 4,
                    title: '«Умный шлагбаум» (Computer Vision)',
                    tags: ['Django', 'DRF', 'OpenCV', 'PyTorch', 'YOLO', 'EasyOCR', 'PostgreSQL'],
                    description: 'Система контроля доступа, автоматически распознающая автомобильные номера.',
                    result: 'Заменила ручное управление'
                },
                {
                    id: 5,
                    title: 'Портал для гостиничного комплекса',
                    tags: ['Django', 'DRF', 'Vue.js', 'PostgreSQL'],
                    description: 'Комплексный портал с онлайн-бронированием мест, системой управления заказами и обработкой платежей.',
                    result: '20 000+ заказов processed'
                },
                {
                    id: 6,
                    title: 'Интернет-магазин стройматериалов',
                    tags: ['Django', 'DRF', 'Vue.js', '1C Integration', 'PostgreSQL'],
                    description: 'Крупный интернет-магазин с каталогом из 4000+ товаров, полной интеграцией с 1С.',
                    result: '4000+ товаров в каталоге'
                }
            ]
        }
    }
}
</script>

<style scoped>
.services-examples {
    position: relative;
    padding-top: 0 !important;
}

.services-examples .container {
    padding: 0 var(--section-padding-x);
}

.project-card {
    display: flex;
    flex-direction: column;
}

.project-card-header {
    margin-bottom: var(--gap-md);
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-sm);
}

.project-tag {
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    padding: 4px 10px;
    background: var(--bg-card);
    border-radius: var(--radius-sm);
}

.project-title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--gap-md);
    letter-spacing: -0.5px;
}

.project-description {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.7;
    font-weight: 300;
    margin-bottom: var(--gap-md);
    flex: 1;
}

.project-result {
    padding-top: var(--gap-md);
    border-top: 1px solid var(--border-subtle);
    text-align: center;
}

.result-text {
    color: var(--text-primary);
    font-weight: 600;
    font-size: var(--text-sm);
}
</style>
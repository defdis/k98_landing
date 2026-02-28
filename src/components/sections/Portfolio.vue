<template>
    <section class="portfolio" id="profile">
        <div class="portfolio-container">
            <!-- Section Header -->
            <SectionHeader label-text="Наши работы" class="custom-header">
                <template #title>
                    <span class="section-title-line">Портфолио</span>
                </template>
                <template #subtitle>
                    Проекты, которыми мы гордимся
                </template>
            </SectionHeader>
            <!-- Carousel -->
            <PortfolioCarousel @open-form="$emit('open-form')" />
        </div>
    </section>
</template>

<script>
import SectionHeader from '../layout/SectionHeader.vue'
import PortfolioCarousel from './PortfolioCarousel.vue'

export default {
    name: 'Portfolio',
    components: {
        SectionHeader,
        PortfolioCarousel,
    },
    emits: ['open-form']
}
</script>

<style scoped>
.portfolio {
    position: relative;
    padding-top: 80px;
    background: #0C0A09;

}
.custom-header {
    padding: 0 80px;
}

.portfolio-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}
</style>

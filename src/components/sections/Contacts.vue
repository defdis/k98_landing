<template>
    <section class="contacts section" id="contact">
        <div class="contacts-container">
            <!-- Section Header -->
            <SectionHeader label-text="Контакты">
                <template #title>
                    <span class="section-title-line">Давайте работать</span>
                    <span class="section-title-line">вместе</span>
                </template>
                <template #subtitle>
                    Свяжитесь с нами — обсудим ваш проект
                </template>
            </SectionHeader>
            
            <div class="contacts-grid">
                <a href="tel:+79138282320" class="contact-card">
                    <span class="contact-card-label">Телефон</span>
                    <span class="contact-card-value">+7 (913) 828-23-20</span>
                    <span class="contact-card-arrow">→</span>
                </a>
                <a href="mailto:k98@k-98.ru" class="contact-card">
                    <span class="contact-card-label">E-mail</span>
                    <span class="contact-card-value">k98@k-98.ru</span>
                    <span class="contact-card-arrow">→</span>
                </a>
                <div class="contact-card">
                    <span class="contact-card-label">Адрес</span>
                    <span class="contact-card-value">Томск, пр. Ленина, 55, офис 506</span>
                    <span class="contact-card-arrow">→</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '../layout/SectionHeader.vue'

export default {
    name: 'Contacts',
    components: {
        SectionHeader
    }
}
</script>

<style scoped>
.contacts {
    position: relative;
}

.contacts-container {
    max-width: 1440px;
    margin: 0 auto;
}

.contacts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--gap-xl);
}

.contact-card {
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
    padding: 40px;
    background: #111;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    text-decoration: none;
    transition: all var(--transition-fast);
    position: relative;
    overflow: hidden;
}

.contact-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.contact-card:hover::before {
    opacity: 1;
}

.contact-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
}

.contact-card-label {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    font-weight: 500;
}

.contact-card-value {
    font-size: var(--text-xl);
    color: var(--text-primary);
    font-weight: 400;
}

.contact-card-arrow {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 20px;
    color: var(--text-muted);
    transition: all var(--transition-fast);
}

.contact-card:hover .contact-card-arrow {
    color: var(--text-primary);
    transform: translateX(8px);
}

@media (max-width: 768px) {
    .contacts-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-brand">
                <span class="footer-logo">K98</span>
                <span class="footer-tagline">Web Studio</span>
            </div>
            <div class="footer-links">
                <a href="#about" class="footer-link">Услуги</a>
                <a href="#profile" class="footer-link">Портфолио</a>
                <a href="#contact" class="footer-link">Контакты</a>
            </div>
            <div class="footer-copy">
                <span>© 2024 K98 Studio</span>
                <span class="footer-separator">•</span>
                <span>Все права защищены</span>
            </div>
            <a href="#" class="footer-top" @click.prevent="scrollToTop">
                <span>Наверх</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },
}
</script>

<style scoped>
.footer {
    padding: 60px 40px;
    background: var(--bg-primary);
    border-top: 1px solid var(--border-subtle);
}

.footer-container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.footer-logo {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
}

.footer-tagline {
    font-size: 14px;
    color: var(--text-secondary);
}

.footer-links {
    display: flex;
    gap: 32px;
}

.footer-link {
    font-size: 14px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-link:hover {
    color: var(--text-primary);
}

.footer-copy {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: var(--text-muted);
}

.footer-separator {
    color: var(--border-subtle);
}

.footer-top {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all var(--transition-fast);
}

.footer-top:hover {
    color: var(--text-primary);
}

.footer-top svg {
    transition: transform var(--transition-fast);
}

.footer-top:hover svg {
    transform: translateY(-4px);
}

@media (max-width: 768px) {
    .footer {
        padding: 40px 20px;
    }

    .footer-container {
        flex-direction: column;
        text-align: center;
    }

    .footer-links {
        order: 1;
    }

    .footer-copy {
        order: 2;
    }

    .footer-top {
        order: 3;
    }
}
</style>

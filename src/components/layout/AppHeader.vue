<template>
    <header class="header" :class="{ 'header--scrolled': isScrolled }">
        <div class="header-container">
            <a href="#" class="logo">
                <span class="logo-text">K98</span>
                <span class="logo-dot"></span>
            </a>
            <nav class="nav">
                <a href="#about" class="nav-link">
                    <span class="nav-link-text">Услуги</span>
                    <span class="nav-link-line"></span>
                </a>
                <a href="#profile" class="nav-link">
                    <span class="nav-link-text">Портфолио</span>
                    <span class="nav-link-line"></span>
                </a>
                <a href="#contact" class="nav-link">
                    <span class="nav-link-text">Контакты</span>
                    <span class="nav-link-line"></span>
                </a>
            </nav>
            <button class="header-cta" @click="$emit('open-form')">
                <span>Обсудить проект</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            isScrolled: false,
        }
    },
    emits: ['open-form'],
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 100
        },
    },
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 24px 40px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header--scrolled {
    padding: 16px 40px;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
}

.logo-text {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1px;
    color: var(--text-primary);
}

.logo-dot {
    width: 8px;
    height: 8px;
    background: var(--text-primary);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

.nav {
    display: flex;
    gap: 48px;
}

.nav-link {
    position: relative;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
    transition: color var(--transition-fast);
}

.nav-link:hover {
    color: var(--text-primary);
}

.nav-link-line {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--text-primary);
    transition: width var(--transition-fast);
}

.nav-link:hover .nav-link-line {
    width: 100%;
}

.header-cta {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: transparent;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.header-cta:hover {
    background: var(--text-primary);
    color: #0a0a0a;
    border-color: var(--text-primary);
}

.header-cta svg {
    transition: transform var(--transition-fast);
}

.header-cta:hover svg {
    transform: translateX(4px);
}

@media (max-width: 1024px) {
    .header {
        padding: 20px 24px;
    }

    .header--scrolled {
        padding: 14px 24px;
    }

    .nav {
        gap: 24px;
    }
}
</style>

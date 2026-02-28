<template>
    <section class="first-screen">
        <div class="first-screen-bg">
            <div class="first-screen-bg-overlay"></div>
        </div>
        
        <div class="first-screen-content">
            <div class="first-screen-subtitle" data-animate="fade-up">
                <span class="first-screen-subtitle-line">Веб-студия полного цикла</span>
            </div>
            
            <h1 class="first-screen-title" data-animate="stagger">
                <span class="first-screen-title-line">Создаём сайты</span>
                <span class="first-screen-title-line">для роста</span>
                <span class="first-screen-title-line">вашего бизнеса</span>
            </h1>
            
            <p class="first-screen-description" data-animate="fade-up">
                Лендинги • Корпоративные сайты • Интернет-магазины • Веб-приложения
            </p>
            
            <div class="first-screen-cta-group" data-animate="fade-up">
                <a href="#contact" class="first-screen-cta">
                    <span>Начать проект</span>
                    <div class="first-screen-cta-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </a>
            </div>
        </div>

        <div class="first-screen-scroll">
            <span class="first-screen-scroll-text">Листайте вниз</span>
            <div class="first-screen-scroll-indicator">
                <div class="first-screen-scroll-dot"></div>
            </div>
        </div>

        <!-- Floating Elements -->
        <div class="first-screen-float first-screen-float-1"></div>
        <div class="first-screen-float first-screen-float-2"></div>
        <div class="first-screen-float first-screen-float-3"></div>
    </section>
</template>

<script>
export default {
    name: 'FirstScreen',
    mounted() {
        this.animateHero()
    },
    methods: {
        animateHero() {
            const lines = document.querySelectorAll('.first-screen-title-line')
            lines.forEach((line, i) => {
                setTimeout(() => {
                    line.classList.add('animate-in')
                }, 200 + i * 150)
            })
            
            setTimeout(() => {
                document.querySelector('.first-screen-subtitle')?.classList.add('animate-in')
            }, 800)
            
            setTimeout(() => {
                document.querySelector('.first-screen-description')?.classList.add('animate-in')
            }, 1000)
            
            setTimeout(() => {
                document.querySelector('.first-screen-cta-group')?.classList.add('animate-in')
            }, 1200)
        }
    }
}
</script>

<style scoped>
.first-screen {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 160px 40px 80px;
    overflow: hidden;
}

.first-screen-bg {
    position: absolute;
    inset: 0;
    background: url('../../assets/img/5247098216686680738.jpg') center/cover no-repeat;
    z-index: 0;
}

.first-screen-bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(10, 10, 10, 0.9) 100%);
}

.first-screen-content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.first-screen-subtitle {
    margin-bottom: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.first-screen-subtitle-line {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-secondary);
    padding: 8px 16px;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
    background: var(--bg-card);
    font-family: var(--font-sans);
}

.first-screen-subtitle.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.first-screen-title {
    margin-bottom: 32px;
}

.first-screen-title-line {
    display: block;
    font-size: clamp(48px, 10vw, 120px);
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 1.05;
    color: var(--text-primary);
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: var(--font-sans);
}

.first-screen-title-line:hover {
    font-family: var(--font-mono);
}

.first-screen-title-line:nth-child(2) {
    background: linear-gradient(180deg, var(--text-primary) 0%, #666 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.first-screen-title-line:nth-child(2):hover {
    -webkit-text-fill-color: var(--text-primary);
    background: none;
}

.first-screen-title-line.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.first-screen-description {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    font-weight: 300;
    margin-bottom: 48px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    font-family: var(--font-sans);
}

.first-screen-description.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.first-screen-cta-group {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.first-screen-cta-group.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.first-screen-cta {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding: 20px 40px;
    background: var(--text-primary);
    color: #0a0a0a;
    text-decoration: none;
    font-size: var(--text-base);
    font-weight: 600;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
    font-family: var(--font-sans);
}

.first-screen-cta:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
}

.first-screen-cta-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-fast);
}

.first-screen-cta:hover .first-screen-cta-arrow {
    transform: translateX(6px);
}

.first-screen-scroll {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 1;
}

.first-screen-scroll-text {
    font-size: 12px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.first-screen-scroll-indicator {
    width: 24px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
}

.first-screen-scroll-dot {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--text-primary);
    border-radius: 2px;
    animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
}

.first-screen-float {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

.first-screen-float-1 {
    width: 300px;
    height: 300px;
    top: 20%;
    left: 10%;
}

.first-screen-float-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 15%;
}

.first-screen-float-3 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 20%;
}

@media (max-width: 768px) {
    .first-screen {
        padding: 120px 20px 60px;
    }
}
</style>

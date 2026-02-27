<template>
  <div class="app">
    <!-- Custom Cursor -->
    <div class="cursor" ref="cursor"></div>
    <div class="cursor-follower" ref="cursorFollower"></div>

    <!-- Progress Bar -->
    <div class="scroll-progress" ref="scrollProgress"></div>

    <!-- Header -->
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
        <button class="header-cta" @click="openForm">
          <span>Обсудить проект</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-bg-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-subtitle" data-animate="fade-up">
          <span class="hero-subtitle-line">Веб-студия полного цикла</span>
        </div>
        
        <h1 class="hero-title" data-animate="stagger">
          <span class="hero-title-line">Создаём сайты</span>
          <span class="hero-title-line">для роста</span>
          <span class="hero-title-line">вашего бизнеса</span>
        </h1>
        
        <p class="hero-description" data-animate="fade-up">
          Лендинги • Корпоративные сайты • Интернет-магазины • Веб-приложения
        </p>
        
        <div class="hero-cta-group" data-animate="fade-up">
          <a href="#contact" class="hero-cta">
            <span>Начать проект</span>
            <div class="hero-cta-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div class="hero-scroll">
        <span class="hero-scroll-text">Листайте вниз</span>
        <div class="hero-scroll-indicator">
          <div class="hero-scroll-dot"></div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="hero-float hero-float-1"></div>
      <div class="hero-float hero-float-2"></div>
      <div class="hero-float hero-float-3"></div>
    </section>

    <!-- Main Content -->
    <main class="main">
      <HomeView @open-form="openForm" />
    </main>

    <!-- Contacts Section -->
    <section class="contacts" id="contact">
      <div class="contacts-container">
        <div class="contacts-header">
          <h2 class="contacts-title">
            <span class="contacts-title-line">Давайте работать</span>
            <span class="contacts-title-line">вместе</span>
          </h2>
          <p class="contacts-subtitle">Готовы обсудить ваш проект?</p>
        </div>
        
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

    <!-- Footer -->
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </a>
      </div>
    </footer>

    <!-- Form Modal -->
    <FormView v-if="showForm" @close="closeForm" />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import FormView from './views/FormView.vue'

export default {
  components: {
    HomeView,
    FormView
  },
  data() {
    return {
      isScrolled: false,
      showForm: false,
      scrollProgress: 0
    }
  },
  mounted() {
    // Scroll handler
    window.addEventListener('scroll', this.handleScroll)
    
    // Custom cursor
    this.initCursor()
    
    // Animate elements on scroll
    this.initScrollAnimations()
    
    // Initial animation
    this.animateHero()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      
      this.isScrolled = scrollTop > 100
      this.scrollProgress = (scrollTop / docHeight) * 100
      
      // Update progress bar
      if (this.$refs.scrollProgress) {
        this.$refs.scrollProgress.style.width = `${this.scrollProgress}%`
      }
      
      // Animate elements on scroll
      this.animateOnScroll()
    },
    
    initCursor() {
      const cursor = this.$refs.cursor
      const follower = this.$refs.cursorFollower
      
      if (!cursor || !follower) return
      
      let mouseX = 0, mouseY = 0
      let posX = 0, posY = 0
      let followerX = 0, followerY = 0
      
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      })
      
      const animateCursor = () => {
        posX += (mouseX - posX) / 9
        posY += (mouseY - posY) / 9
        followerX += (mouseX - followerX) / 15
        followerY += (mouseY - followerY) / 15
        
        follower.style.left = followerX + 'px'
        follower.style.top = followerY + 'px'
        
        requestAnimationFrame(animateCursor)
      }
      animateCursor()
      
      // Hover states
      document.querySelectorAll('a, button, .contact-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          follower.classList.add('cursor-follower--hover')
        })
        el.addEventListener('mouseleave', () => {
          follower.classList.remove('cursor-follower--hover')
        })
      })
    },
    
    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      })
      
      document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el)
      })
    },
    
    animateHero() {
      const elements = document.querySelectorAll('.hero-title-line')
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-in')
        }, 200 + i * 150)
      })
      
      setTimeout(() => {
        document.querySelector('.hero-subtitle')?.classList.add('animate-in')
      }, 800)
      
      setTimeout(() => {
        document.querySelector('.hero-description')?.classList.add('animate-in')
      }, 1000)
      
      setTimeout(() => {
        document.querySelector('.hero-cta-group')?.classList.add('animate-in')
      }, 1200)
    },
    
    animateOnScroll() {
      // Add parallax to floating elements
      const scrollY = window.scrollY
      document.querySelectorAll('.hero-float').forEach((el, i) => {
        const speed = 0.1 + (i * 0.05)
        el.style.transform = `translateY(${scrollY * speed}px)`
      })
    },
    
    openForm() {
      this.showForm = true
      document.body.style.overflow = 'hidden'
    },
    
    closeForm() {
      this.showForm = false
      document.body.style.overflow = ''
    },
    
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
/* ===== Base ===== */
.app {
  position: relative;
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ===== Custom Cursor ===== */
.cursor {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10001;
  mix-blend-mode: difference;
  transition: transform 0.15s ease;
}

.cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.cursor-follower--hover {
  transform: scale(1.5);
  border-color: rgba(255, 255, 255, 0.6);
}

/* ===== Scroll Progress ===== */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.5));
  z-index: 10002;
  width: 0%;
  transition: width 0.1s ease;
}

/* ===== Header ===== */
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
  color: #fff;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.nav {
  display: flex;
  gap: 48px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-link-line {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.header-cta:hover {
  background: #fff;
  color: #0a0a0a;
  border-color: #fff;
}

.header-cta svg {
  transition: transform 0.3s ease;
}

.header-cta:hover svg {
  transform: translateX(4px);
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 160px 40px 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('../src/assets/img/5247098216686680738.jpg') center/cover no-repeat;
  z-index: 0;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.85) 0%,
    rgba(10, 10, 10, 0.7) 50%,
    rgba(10, 10, 10, 0.9) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-subtitle {
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-subtitle-line {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
}

.hero-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  margin-bottom: 32px;
}

.hero-title-line {
  display: block;
  font-size: clamp(48px, 10vw, 120px);
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.05;
  color: #fff;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-title-line:nth-child(2) {
  background: linear-gradient(180deg, #fff 0%, #666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title-line.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  margin-bottom: 48px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.hero-description.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-cta-group {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.hero-cta-group.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 40px;
  background: #fff;
  color: #0a0a0a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  transition: all 0.3s ease;
}

.hero-cta:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
}

.hero-cta-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.hero-cta:hover .hero-cta-arrow {
  transform: translateX(6px);
}

/* Hero Scroll Indicator */
.hero-scroll {
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

.hero-scroll-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-scroll-indicator {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.hero-scroll-dot {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
}

/* Floating Elements */
.hero-float {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-float-1 {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
}

.hero-float-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 15%;
}

.hero-float-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 20%;
}

/* ===== Main ===== */
.main {
  position: relative;
  z-index: 1;
  background: #0a0a0a;
}

/* ===== Contacts ===== */
.contacts {
  padding: 160px 40px;
  background: #0f0f0f;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.contacts-container {
  max-width: 1440px;
  margin: 0 auto;
}

.contacts-header {
  margin-bottom: 80px;
}

.contacts-title {
  margin-bottom: 24px;
}

.contacts-title-line {
  display: block;
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.1;
  color: #fff;
}

.contacts-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.contact-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
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
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.contact-card-label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

.contact-card-value {
  font-size: 22px;
  color: #fff;
  font-weight: 400;
}

.contact-card-arrow {
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.contact-card:hover .contact-card-arrow {
  color: #fff;
  transform: translateX(8px);
}

/* ===== Footer ===== */
.footer {
  padding: 60px 40px;
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}

.footer-tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
}

.footer-links {
  display: flex;
  gap: 32px;
}

.footer-link {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #fff;
}

.footer-copy {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
}

.footer-separator {
  color: rgba(255, 255, 255, 0.2);
}

.footer-top {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-top:hover {
  color: #fff;
}

.footer-top svg {
  transition: transform 0.3s ease;
}

.footer-top:hover svg {
  transform: translateY(-4px);
}

/* ===== Mobile ===== */
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
  
  .header-cta span {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 20px 60px;
  }
  
  .contacts,
  .footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .nav {
    display: none;
  }
  
  .contacts-grid {
    grid-template-columns: 1fr;
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
  
  .cursor,
  .cursor-follower {
    display: none;
  }
}
</style>

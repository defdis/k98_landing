<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="header-container">
        <div class="logo">K98</div>
        <nav class="nav">
          <a href="#about">Услуги</a>
          <a href="#profile">Портфолио</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Веб-студия K98</h1>
        <p class="hero-subtitle">Создаём сайты, которые работают на ваш бизнес</p>
        <a href="#contact" class="hero-cta">Обсудить проект</a>
      </div>
    </section>

    <!-- Main Content -->
    <main class="main">
      <HomeView />
    </main>

    <!-- Contacts Section -->
    <section class="contacts" id="contact">
      <div class="contacts-container">
        <h2 class="contacts-title">Контакты</h2>
        <p class="contacts-subtitle">Свяжитесь с нами — обсудим ваш проект</p>
        <div class="contacts-grid">
          <div class="contact-item">
            <span class="contact-label">Адрес</span>
            <span class="contact-value">Томск, пр. Ленина, 55, офис 506</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">Телефон</span>
            <a class="contact-value" href="tel:+79138282320">+7 (913) 828-23-20</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">E-mail</span>
            <a class="contact-value" href="mailto:k98@k-98.ru">k98@k-98.ru</a>
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
        <div class="footer-copy">© 2024 K98. Все права защищены</div>
      </div>
    </footer>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  components: {
    HomeView
  }
}
</script>

<style scoped>
/* Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #fff;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: #fff;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 40px 80px;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.5) 100%),
              url('../src/assets/img/5247098216686680738.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-content {
  text-align: center;
  max-width: 900px;
}

.hero-title {
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #fff 0%, #888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 48px;
  line-height: 1.6;
}

.hero-cta {
  display: inline-block;
  padding: 18px 48px;
  background: #fff;
  color: #0a0a0a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.hero-cta:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Main */
.main {
  background: #0a0a0a;
}

/* Contacts */
.contacts {
  padding: 120px 40px;
  background: #0f0f0f;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.contacts-container {
  max-width: 1400px;
  margin: 0 auto;
}

.contacts-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -1.5px;
  margin-bottom: 16px;
}

.contacts-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  margin-bottom: 64px;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

.contact-value {
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;
}

.contact-value:hover {
  color: rgba(255, 255, 255, 0.7);
}

/* Footer */
.footer {
  padding: 40px;
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.footer-tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 12px;
}

.footer-copy {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
}

/* Mobile */
@media (max-width: 768px) {
  .header-container {
    padding: 16px 20px;
  }

  .nav {
    gap: 20px;
  }

  .nav a {
    font-size: 13px;
  }

  .hero,
  .contacts {
    padding-left: 20px;
    padding-right: 20px;
  }

  .footer-container {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>

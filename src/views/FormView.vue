<template>
  <Teleport to="#form">
    <div class="modal-overlay" @click.self="close">
      <div class="modal">
        <button @click="close" class="modal-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="modal-content">
          <h2 class="modal-title">Обсудить проект</h2>
          <p class="modal-subtitle">Заполните форму — мы свяжемся с вами в течение 30 минут</p>
          
          <form @submit.prevent="submitForm" class="modal-form">
            <div class="form-group">
              <input 
                class="form-input" 
                type="text" 
                placeholder="Ф.И.О." 
                v-model="application.full_name"
                required
              >
            </div>
            <div class="form-group">
              <input 
                class="form-input" 
                type="text" 
                placeholder="Телефон или email" 
                v-model="application.contact"
                required
              >
            </div>
            <div class="form-group">
              <textarea 
                class="form-input form-textarea" 
                placeholder="Расскажите о проекте" 
                v-model="application.message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="form-submit">
              Отправить заявку
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  data() {
    return {
      application: {
        full_name: '',
        message: '',
        contact: ''
      }
    }
  },
  emits: ['close-req'],
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    },
    close() {
      this.$emit('close-req')
    },
    async submitForm() {
      try {
        const csrfToken = this.getCookie('csrftoken')
        const response = await fetch("/api/application/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          credentials: 'include',
          body: JSON.stringify(this.application)
        });
        console.log("Ответ Сервера: ", await response.json())
        this.close()
      } catch (error) {
        console.error("Ошибка при отправке:", error)
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  position: relative;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: #fff;
}

.modal-content {
  padding: 48px 40px;
}

.modal-title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.modal-subtitle {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.6;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.form-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 32px;
  background: #fff;
  color: #0a0a0a;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.form-submit:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.form-submit svg {
  transition: transform 0.3s ease;
}

.form-submit:hover svg {
  transform: translateX(4px);
}

/* Mobile */
@media (max-width: 768px) {
  .modal-content {
    padding: 40px 24px;
  }

  .modal-title {
    font-size: 24px;
  }

  .modal-subtitle {
    font-size: 14px;
  }
}
</style>

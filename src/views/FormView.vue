<template>
    <Teleport to="#form">
        <div class="modal-backdrop" @click.self="close">
            <div class="modal" ref="modal">
                <button @click="close" class="modal-close" aria-label="Закрыть">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="modal-label">Свяжитесь с нами</span>
                        <h2 class="modal-title">Обсудить проект</h2>
                        <p class="modal-subtitle">Заполните форму — мы свяжемся с вами в течение +/- 30 минут </p>
                    </div>
                    
                    <form @submit.prevent="submitForm" class="modal-form">
                        <div class="form-group">
                            <label class="form-label">
                                <span>Ваше имя</span>
                                <span class="form-required">*</span>
                            </label>
                            <input 
                                class="form-input" 
                                type="text" 
                                placeholder="Как к Вам обращаться?"
                                v-model="application.full_name"
                                required
                            >
                            <div class="form-input-line"></div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">
                                <span>Контакты</span>
                                <span class="form-required">*</span>
                            </label>
                            <input 
                                class="form-input" 
                                type="text" 
                                placeholder="Телефон или email" 
                                v-model="application.contact"
                                required
                            >
                            <div class="form-input-line"></div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">
                                <span>О проекте</span>
                            </label>
                            <textarea 
                                class="form-input form-textarea" 
                                placeholder="Расскажите о вашей задаче" 
                                v-model="application.message"
                                rows="4"
                            ></textarea>
                            <div class="form-input-line"></div>
                        </div>
                        
                        <button type="submit" class="form-submit">
                            <span>Отправить заявку</span>
                            <div class="form-submit-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </button>
                        
                        <p class="form-privacy">
                            Отправляя форму, вы соглашаетесь с 
                            <a href="#" class="form-privacy-link">политикой конфиденциальности</a>
                        </p>
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
    mounted() {
        // Animate modal entrance
        this.$nextTick(() => {
            if (this.$refs.modal) {
                this.$refs.modal.classList.add('modal--visible')
            }
        })
        
        // ESC to close
        document.addEventListener('keydown', this.handleKeydown)
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    },
    methods: {
        handleKeydown(e) {
            if (e.key === 'Escape') {
                this.close()
            }
        },
        handleBackdropClick(e) {
            if (e.target === e.currentTarget) {
                this.close()
            }
        },
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
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: backdropFadeIn 0.3s ease;
}

@keyframes backdropFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal {
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    width: 100%;
    max-width: 520px;
    position: relative;
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal--visible {
    opacity: 1;
    transform: scale(1) translateY(0);
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 1;
}

.modal-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: rotate(90deg);
}

.modal-content {
    padding: 56px 48px 48px;
}

.modal-header {
    margin-bottom: 40px;
}

.modal-label {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 16px;
    padding: 6px 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
}

.modal-title {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
    letter-spacing: -1px;
    line-height: 1.2;
}

.modal-subtitle {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    line-height: 1.6;
}

.modal-form {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.form-group {
    position: relative;
}

.form-label {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 12px;
}

.form-required {
    color: rgba(255, 255, 255, 0.3);
}

.form-input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    transition: all 0.3s ease;
}

.form-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

.form-input:focus {
    outline: none;
    border-bottom-color: rgba(255, 255, 255, 0.5);
}

.form-input-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #fff;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-input:focus ~ .form-input-line {
    width: 100%;
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
}

.form-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px 40px;
    background: #fff;
    color: #0a0a0a;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 8px;
}

.form-submit:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(255, 255, 255, 0.1);
}

.form-submit-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.form-submit:hover .form-submit-arrow {
    transform: translateX(6px);
}

.form-privacy {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    line-height: 1.6;
    margin-top: 8px;
}

.form-privacy-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.3s ease;
}

.form-privacy-link:hover {
    color: rgba(255, 255, 255, 0.8);
}

/* Mobile */
@media (max-width: 768px) {
    .modal-content {
        padding: 48px 32px 40px;
    }
    
    .modal-title {
        font-size: 26px;
    }
    
    .modal-subtitle {
        font-size: 14px;
    }
    
    .form-input {
        font-size: 15px;
    }
}
</style>

<template>
    <div class="app">
        <!-- Grid Background -->
        <GridBackground />

        <!-- Pixel Particles -->
        <div class="pixel-particles" ref="pixelContainer"></div>

        <!-- Progress Bar -->
        <div class="scroll-progress" ref="scrollProgress"></div>

        <!-- Header -->
        <AppHeader @open-form="openForm" />

        <!-- Main Content -->
        <MainView @open-form="openForm" />

        <!-- Footer -->
        <AppFooter />

        <!-- Form Modal -->
        <FormView v-if="showForm" @close-req="closeForm" />
    </div>
</template>

<script>
import MainView from './views/MainView.vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import FormView from './views/FormView.vue'
import GridBackground from './components/layout/GridBackground.vue'

export default {
    components: {
        MainView,
        AppHeader,
        AppFooter,
        FormView,
        GridBackground
    },
    data() {
        return {
            isScrolled: false,
            showForm: false,
            scrollProgress: 0,
            pixelInterval: null,
            lastMouseX: window.innerWidth / 2,
            lastMouseY: window.innerHeight / 2
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('mousemove', this.handleMouseMove)
        this.initScrollAnimations()
        this.startPixelEmission()
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('mousemove', this.handleMouseMove)
        if (this.pixelInterval) clearInterval(this.pixelInterval)
    },
    methods: {
        handleMouseMove(e) {
            this.lastMouseX = e.clientX
            this.lastMouseY = e.clientY
        },
        handleScroll() {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            
            this.isScrolled = scrollTop > 100
            this.scrollProgress = (scrollTop / docHeight) * 100
            
            if (this.$refs.scrollProgress) {
                this.$refs.scrollProgress.style.width = `${this.scrollProgress}%`
            }
            
            this.animateOnScroll()
        },
        startPixelEmission() {
            this.pixelInterval = setInterval(() => {
                this.emitPixels()
            }, 3000)

            window.addEventListener('click', () => {
                this.emitPixels()
            })
        },
        emitPixels() {
            const container = this.$refs.pixelContainer
            if (!container) return

            const mouseX = this.lastMouseX || window.innerWidth / 2
            const mouseY = this.lastMouseY || window.innerHeight / 2

            this.createPixel(container, mouseX, mouseY)
        },
        createPixel(container, startX, startY) {
            const pixel = document.createElement('div')
            pixel.className = 'pixel'

            const colors = [
                '#d11010',
                '#02bd24',
                '#ffd800',
                '#06458a',
                '#f66600',
                '#6d41df',
                '#ef005e',
                '#0079f1'
            ]
            const color = colors[Math.floor(Math.random() * colors.length)]
            pixel.style.background = color

            const size = 4 + Math.random() * 3
            pixel.style.width = `${size}px`
            pixel.style.height = `${size}px`

            // Set initial position
            pixel.style.position = 'fixed'
            pixel.style.left = '0px'
            pixel.style.top = '0px'

            // Random direction and distance
            const baseAngle = Math.random() * Math.PI * 2
            const distance = 300 + Math.random() * 100

            // Create smooth sine wave trajectory with multiple control points
            const points = []
            const numPoints = 8

            for (let i = 0; i <= numPoints; i++) {
                const progress = i / numPoints
                const angle = baseAngle + Math.sin(progress * Math.PI) * 0.8
                const dist = distance * progress
                points.push({
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    scale: 1 + Math.sin(progress * Math.PI) * 0.3,
                    opacity: 1 - progress * 0.9
                })
            }

            const rotation = Math.random() * 720 - 360
            const duration = 2000 + Math.random() * 3000

            container.appendChild(pixel)

            // Force reflow to ensure initial position is applied
            pixel.offsetHeight

            // Smooth sine wave animation with 9 keyframes using transform
            const keyframes = [
                {
                    transform: `translate(${startX}px, ${startY}px) rotate(0deg) scale(1)`,
                    opacity: 1
                }
            ]

            points.forEach((point, i) => {
                keyframes.push({
                    transform: `translate(${startX + point.x}px, ${startY + point.y}px) rotate(${rotation * (i + 1) / (numPoints + 1)}deg) scale(${point.scale})`,
                    opacity: point.opacity,
                    offset: (i + 1) / (numPoints + 1)
                })
            })

            pixel.animate(keyframes, {
                duration: duration,
                easing: 'linear'
            })

            setTimeout(() => { pixel.remove() }, duration)
        },
        initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
            
            document.querySelectorAll('[data-animate]').forEach(el => {
                observer.observe(el)
            })
        },
        openForm() {
            this.showForm = true
            document.body.style.overflow = 'hidden'
        },
        closeForm() {
            this.showForm = false
            document.body.style.overflow = ''
        }
    }
}
</script>

<style scoped>
.app {
    position: relative;
    background: transparent;
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
}

.pixel-particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
}

.pixel {
    position: fixed;
    border-radius: 2px;
    will-change: left, top, transform, opacity;
}

.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--text-primary), rgba(255, 255, 255, 0.5));
    z-index: 10002;
    width: 0%;
    transition: width 0.1s ease;
}
</style>

<template>
  <div ref="wrapper" class="canvas__wrapper"></div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const wrapper = ref(null)

let canvas
let ctx
let animationId
let resizeObserver

let wrapperWidth = 0
let wrapperHeight = 0
let w = 0
let h = 0
let dpr = 1

const particlesList = []
const particlesCount = 200

const colors = [
  '#03045e',
  '#023e8a',
  '#0077b6',
  '#0096c7',
  '#00b4d8',
  '#48cae4'
]

const rand = (max = 1, min = 0, round = false) => {
  const n = Math.random() * (max - min) + min
  return round ? Math.round(n) : n
}

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

const circle = (x, y, radius) => {
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
}

class Particle {
  constructor() {
    this.reset()
  }

  reset() {
    this.radius = rand(2, 1, true)
    this.x = rand(w, 0)
    this.y = rand(h - this.radius, this.radius)
    this.speedY = rand(-0.25, -0.5)
    this.RotateX = 0
    this.color = getRandomElement(colors)
  }

  update() {
    this.y += this.speedY
    this.x += this.RotateX

    if (
      this.y <= this.radius ||
      this.x <= this.radius ||
      this.x >= w - this.radius
    ) {
      this.reset()
    }
  }
}

const canvasSetup = () => {
  if (!wrapper.value || !ctx) return

  wrapperWidth = wrapper.value.clientWidth
  wrapperHeight = wrapper.value.clientHeight

  w = Math.round(wrapperWidth)
  h = Math.round(wrapperHeight)

  dpr = Math.min(window.devicePixelRatio || 1, 2)

  canvas.width = Math.round(w * dpr)
  canvas.height = Math.round(h * dpr)

  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`

  // Réinitialise la transformation pour éviter
  // de multiplier le scale à chaque redimensionnement.
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const draw = () => {
  if (!ctx) return

  ctx.clearRect(0, 0, w, h)

  for (const p of particlesList) {
    ctx.fillStyle = p.color
    ctx.beginPath()
    circle(p.x, p.y, p.radius)
    ctx.closePath()
    ctx.fill()
  }
}

const tick = () => {
  for (const p of particlesList) {
    p.update()
  }

  draw()
  animationId = window.requestAnimationFrame(tick)
}

const handleResize = () => {
  canvasSetup()
  draw()
}

onMounted(() => {
  if (!wrapper.value) return

  canvas = document.createElement('canvas')
  ctx = canvas.getContext('2d')

  if (!ctx) return

  wrapper.value.appendChild(canvas)

  canvasSetup()

  for (let i = 0; i < particlesCount; i++) {
    particlesList.push(new Particle())
  }

  draw()
  animationId = window.requestAnimationFrame(tick)

  window.addEventListener('resize', handleResize)

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(wrapper.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)

  if (resizeObserver) {
    resizeObserver.disconnect()
  }

  if (animationId !== undefined) {
    window.cancelAnimationFrame(animationId)
  }

  particlesList.length = 0
  canvas?.remove()
})
</script>

<style scoped>
.canvas__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.canvas__wrapper canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
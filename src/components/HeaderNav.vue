<template>
  <header class="border-base-content/20 bg-base-100 py-0.25 fixed top-0 z-10 w-full border-b">
    <nav class="navbar mx-auto max-w-[1280px] rounded-b-xl px-4 sm:px-6 lg:px-8">
      <div class="w-full lg:flex lg:items-center lg:gap-2">
        <div class="navbar-start items-center justify-between max-lg:w-full">
          <router-link to="/" class="text-base-content flex items-center gap-3 text-xl font-semibold">
            <span class="text-primary">
              <svg width="32" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_nav)">
                  <mask id="mask0_nav" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <path d="M25.5 0H8.5C3.80558 0 0 3.80558 0 8.5V25.5C0 30.1944 3.80558 34 8.5 34H25.5C30.1944 34 34 30.1944 34 25.5V8.5C34 3.80558 30.1944 0 25.5 0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_nav)">
                    <path d="M25.5 0H8.5C3.80558 0 0 3.80558 0 8.5V25.5C0 30.1944 3.80558 34 8.5 34H25.5C30.1944 34 34 30.1944 34 25.5V8.5C34 3.80558 30.1944 0 25.5 0Z" fill="url(#paint0_nav)" />
                    <path
                      d="M16.1238 20.1522C16.511 19.662 17.2479 19.6428 17.66 20.1122L20.5526 23.41C21.1194 24.0563 20.6611 25.0689 19.8016 25.0692H14.3055C13.47 25.0692 13.0026 24.1059 13.5203 23.4501L16.1238 20.1522ZM16.1326 8.45497C16.5308 7.95801 17.286 7.95453 17.6883 8.44813L27.5164 20.5077C28.0488 21.161 27.5838 22.1395 26.741 22.1395H24.4442C24.1428 22.1395 23.8577 22.0034 23.6678 21.7694L17.7029 14.4188C17.2962 13.9175 16.5285 13.927 16.1346 14.4384L10.7303 21.454C10.5411 21.6996 10.2484 21.8435 9.9383 21.8436H7.4881C6.64925 21.8436 6.18332 20.8733 6.70783 20.2186L16.1326 8.45497Z"
                      fill="url(#paint1_nav)" />
                  </g>
                  <path d="M25.5002 0.707886H8.50017C4.19695 0.707886 0.708496 4.19634 0.708496 8.49956V25.4996C0.708496 29.8028 4.19695 33.2912 8.50017 33.2912H25.5002C29.8034 33.2912 33.2918 29.8028 33.2918 25.4996V8.49956C33.2918 4.19634 29.8034 0.707886 25.5002 0.707886Z" stroke="url(#paint2_nav)" stroke-width="2" />
                </g>
                <defs>
                  <linearGradient id="paint0_nav" x1="30.2812" y1="2.65625" x2="4.25" y2="32.4063" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="currentColor" />
                    <stop offset="1" stop-color="currentColor" />
                  </linearGradient>
                  <linearGradient id="paint1_nav" x1="17.1147" y1="8.08008" x2="17.1147" y2="25.0692" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.6" />
                  </linearGradient>
                  <linearGradient id="paint2_nav" x1="17.0002" y1="-0.000447931" x2="17.0002" y2="33.9996" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="white" stop-opacity="0.28" />
                    <stop offset="1" stop-color="white" stop-opacity="0.04" />
                  </linearGradient>
                  <clipPath id="clip0_nav">
                    <rect width="34" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Restaurant
          </router-link>
          <div class="flex items-center gap-5 lg:hidden">
            <router-link to="/#contact-us" class="btn btn-primary btn-sm">Book A Table</router-link>
            <button type="button" class="btn btn-outline btn-secondary btn-square" @click="toggleMenu" aria-label="Toggle navigation">
              <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div :class="['lg:navbar-center transition-all duration-300 grow overflow-hidden font-medium lg:flex', isMenuOpen ? 'max-lg:max-h-96' : 'max-lg:max-h-0']">
          <div class="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
            <router-link 
              v-for="link in navLinks" 
              :key="link.href" 
              :to="link.href" 
              :class="['hover:text-primary nav-link transition-colors', { 'text-primary': isActive(link.section) }]"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>
        <div class="navbar-end max-lg:hidden">
          <router-link to="/#contact-us" class="btn btn-primary">Book A Table</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { href: '/#home', label: 'Home', section: 'home' },
  { href: '/#about-us', label: 'About Us', section: 'about-us' },
  { href: '/#services', label: 'Services', section: 'services' },
  { href: '/#team', label: 'Team', section: 'team' },
  { href: '/#faqs', label: 'FAQS', section: 'faqs' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isActive = (section) => {
  if (route.path !== '/') return false
  return activeSection.value === section
}

const handleScroll = () => {
  if (route.path !== '/') return
  
  const sections = document.querySelectorAll('section')
  let current = ''
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id')
    }
  })
  
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

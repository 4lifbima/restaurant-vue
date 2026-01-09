<template>
  <div class="bg-base-100">
    <HeaderNav />
    <router-view />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

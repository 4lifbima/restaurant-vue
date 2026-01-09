<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CustomerReviews />
    <CTASection />
    <div class="via-primary/20 mx-auto h-px w-3/5 bg-gradient-to-r from-transparent to-transparent"></div>
    <TeamSection />
    <ContactSection />
    <FAQSection />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import CustomerReviews from '../components/CustomerReviews.vue'
import CTASection from '../components/CTASection.vue'
import TeamSection from '../components/TeamSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FAQSection from '../components/FAQSection.vue'
</script>

<template>
  <div class="bg-base-100 min-h-screen">
    <!-- Loading Skeleton -->
    <template v-if="isLoading">
      <!-- Hero Banner Skeleton -->
      <div class="bg-gradient-to-r from-primary/10 to-error/10 py-16 pt-32">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <!-- Breadcrumb Skeleton -->
          <div class="flex mb-6 gap-2">
            <div class="h-4 w-12 bg-base-300 rounded animate-pulse"></div>
            <div class="h-4 w-4 bg-base-300 rounded animate-pulse"></div>
            <div class="h-4 w-24 bg-base-300 rounded animate-pulse"></div>
          </div>
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <!-- Title Skeleton -->
              <div class="h-12 w-3/4 bg-base-300 rounded-lg animate-pulse mb-4"></div>
              <!-- Description Skeleton -->
              <div class="space-y-2 mb-6">
                <div class="h-4 w-full bg-base-300 rounded animate-pulse"></div>
                <div class="h-4 w-5/6 bg-base-300 rounded animate-pulse"></div>
              </div>
              <!-- Buttons Skeleton -->
              <div class="flex gap-4">
                <div class="h-12 w-32 bg-base-300 rounded-lg animate-pulse"></div>
                <div class="h-12 w-32 bg-base-300 rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div class="flex-1">
              <!-- Image Skeleton -->
              <div class="h-64 w-full max-w-md mx-auto bg-base-300 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Skeleton -->
      <section class="py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <!-- Section Title Skeleton -->
              <div class="h-8 w-48 bg-base-300 rounded animate-pulse mb-6"></div>
              <!-- Paragraph Skeleton -->
              <div class="space-y-2 mb-6">
                <div class="h-4 w-full bg-base-300 rounded animate-pulse"></div>
                <div class="h-4 w-full bg-base-300 rounded animate-pulse"></div>
                <div class="h-4 w-3/4 bg-base-300 rounded animate-pulse"></div>
              </div>
              <!-- Features Skeleton -->
              <div class="h-6 w-32 bg-base-300 rounded animate-pulse mb-4"></div>
              <div class="space-y-3">
                <div v-for="i in 6" :key="i" class="flex items-center gap-3">
                  <div class="h-5 w-5 bg-base-300 rounded-full animate-pulse"></div>
                  <div class="h-4 w-48 bg-base-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            <div>
              <!-- Benefits Section Skeleton -->
              <div class="h-8 w-40 bg-base-300 rounded animate-pulse mb-6"></div>
              <div class="grid gap-4">
                <div v-for="i in 4" :key="i" class="card card-border">
                  <div class="card-body p-4">
                    <div class="flex items-center gap-4">
                      <div class="h-12 w-12 bg-base-300 rounded-full animate-pulse"></div>
                      <div class="flex-1">
                        <div class="h-5 w-32 bg-base-300 rounded animate-pulse mb-2"></div>
                        <div class="h-3 w-48 bg-base-300 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Skeleton -->
      <section class="bg-base-200 py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div class="h-8 w-40 bg-base-300 rounded animate-pulse mb-8 mx-auto"></div>
          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="card bg-base-100 shadow-lg">
              <div class="card-body text-center">
                <div class="h-6 w-24 bg-base-300 rounded animate-pulse mx-auto mb-4"></div>
                <div class="h-10 w-20 bg-base-300 rounded animate-pulse mx-auto mb-4"></div>
                <div class="space-y-2 mb-6">
                  <div v-for="j in 4" :key="j" class="h-4 w-32 bg-base-300 rounded animate-pulse mx-auto"></div>
                </div>
                <div class="h-12 w-full bg-base-300 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <!-- Hero Banner -->
      <div class="bg-gradient-to-r from-primary/10 to-error/10 py-16 pt-32">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <nav class="flex mb-6" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-2 text-sm">
              <li>
                <router-link to="/" class="text-base-content/60 hover:text-primary">Home</router-link>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-base-content/40 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-base-content">{{ service?.title }}</span>
              </li>
            </ol>
          </nav>
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <h1 class="text-base-content text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{{ service?.title }}</h1>
              <p class="text-base-content/80 text-lg mb-6">{{ service?.description }}</p>
              <div class="flex gap-4">
                <a href="#contact-us" class="btn btn-primary">
                  Order Now
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <router-link to="/" class="btn btn-outline">Back to Home</router-link>
              </div>
            </div>
            <div class="flex-1">
              <img :src="service?.image" :alt="service?.title" class="rounded-2xl shadow-xl w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <!-- Service Details -->
      <section class="py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-base-content text-2xl font-semibold mb-6">About This Service</h2>
              <p class="text-base-content/80 mb-6">{{ service?.fullDescription }}</p>
              
              <h3 class="text-base-content text-xl font-semibold mb-4">What We Offer</h3>
              <ul class="space-y-3">
                <li v-for="(feature, index) in service?.features" :key="index" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-base-content/80">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 class="text-base-content text-2xl font-semibold mb-6">Why Choose Us?</h2>
              <div class="grid gap-4">
                <div v-for="(benefit, index) in service?.benefits" :key="index" class="card card-border hover:border-primary transition-all duration-300">
                  <div class="card-body p-4">
                    <div class="flex items-center gap-4">
                      <div class="bg-primary/10 rounded-full p-3">
                        <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-base-content font-medium">{{ benefit.title }}</h4>
                        <p class="text-base-content/60 text-sm">{{ benefit.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="bg-base-200 py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 class="text-base-content text-2xl font-semibold mb-8 text-center">Pricing Plans</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="(plan, index) in service?.pricing" :key="index" class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="card-body text-center">
                <h3 class="text-lg font-semibold text-base-content">{{ plan.name }}</h3>
                <div class="my-4">
                  <span class="text-4xl font-bold text-primary">${{ plan.price }}</span>
                  <span class="text-base-content/60">/{{ plan.unit }}</span>
                </div>
                <ul class="space-y-2 mb-6">
                  <li v-for="(item, i) in plan.includes" :key="i" class="text-base-content/80 text-sm">{{ item }}</li>
                </ul>
                <button class="btn btn-primary w-full">Select Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-base-content text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Best?</h2>
          <p class="text-base-content/80 mb-6 max-w-2xl mx-auto">Book your table now and enjoy an unforgettable dining experience.</p>
          <router-link to="/#contact-us" class="btn btn-primary btn-lg">
            Book a Table
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(true)

const services = {
  'buffet': {
    id: 'buffet',
    title: 'Buffet Service',
    description: 'All-you-can-eat dining experience with our finest selections.',
    image: '/img/free-blog-1.png',
    fullDescription: 'Our buffet service offers an extensive selection of cuisines from around the world. From fresh salads and appetizers to main courses and decadent desserts, there\'s something for everyone. Enjoy unlimited servings in a comfortable and elegant atmosphere.',
    features: [
      'Wide variety of international cuisines',
      'Fresh ingredients prepared daily',
      'Live cooking stations',
      'Vegetarian and vegan options available',
      'Kid-friendly menu options',
      'Complimentary beverages included'
    ],
    benefits: [
      { title: 'Quality Ingredients', description: 'We source only the freshest ingredients.' },
      { title: 'Expert Chefs', description: 'Our chefs have decades of combined experience.' },
      { title: 'Unlimited Servings', description: 'Eat as much as you like.' },
      { title: 'Elegant Ambiance', description: 'Dine in style and comfort.' }
    ],
    pricing: [
      { name: 'Lunch Buffet', price: 25, unit: 'person', includes: ['Appetizers', 'Main Course', 'Desserts', 'Soft Drinks'] },
      { name: 'Dinner Buffet', price: 45, unit: 'person', includes: ['Premium Appetizers', 'Gourmet Main Course', 'Dessert Station', 'Wine Selection'] },
      { name: 'Weekend Special', price: 55, unit: 'person', includes: ['Full Menu Access', 'Live Cooking', 'Champagne', 'Private Seating'] }
    ]
  },
  'delivery': {
    id: 'delivery',
    title: 'Food Delivery',
    description: 'Restaurant-quality food delivered fresh to your doorstep.',
    image: '/img/free-blog-2.png',
    fullDescription: 'Can\'t make it to the restaurant? No problem! Our food delivery service brings the same quality and taste directly to your home or office. We ensure every dish is carefully packed to maintain freshness and presentation.',
    features: [
      'Fast and reliable delivery',
      'Temperature-controlled packaging',
      'Real-time order tracking',
      'Contactless delivery option',
      'Special dietary accommodations',
      'Bulk order discounts'
    ],
    benefits: [
      { title: 'Quick Delivery', description: '30-45 minutes average delivery time.' },
      { title: 'Fresh & Hot', description: 'Specially designed containers keep food fresh.' },
      { title: 'Easy Ordering', description: 'Order through our website or app.' },
      { title: 'Safe Handling', description: 'Strict hygiene protocols followed.' }
    ],
    pricing: [
      { name: 'Standard', price: 0, unit: 'order', includes: ['Free delivery above $30', 'Standard packaging', 'SMS updates'] },
      { name: 'Express', price: 5, unit: 'order', includes: ['Priority handling', '20 min faster', 'Premium packaging'] },
      { name: 'Premium', price: 10, unit: 'order', includes: ['Scheduled delivery', 'Premium packaging', 'Gift wrapping', 'Personal note'] }
    ]
  },
  'cafeteria': {
    id: 'cafeteria',
    title: 'Cafeteria',
    description: 'Casual dining with quick service and delicious options.',
    image: '/img/free-blog-3.png',
    fullDescription: 'Our cafeteria offers a relaxed dining environment perfect for a quick lunch, coffee break, or casual meeting. With a rotating menu of fresh options and quick service, it\'s the ideal spot for any time of day.',
    features: [
      'Quick service counter',
      'Fresh daily specials',
      'Premium coffee and beverages',
      'Comfortable seating areas',
      'Free WiFi for guests',
      'Meeting room available'
    ],
    benefits: [
      { title: 'Fast Service', description: 'Get your food in under 10 minutes.' },
      { title: 'Affordable', description: 'Quality food at great prices.' },
      { title: 'Convenient', description: 'Perfect for busy professionals.' },
      { title: 'Cozy Space', description: 'Relaxing atmosphere to unwind.' }
    ],
    pricing: [
      { name: 'Light Meal', price: 12, unit: 'meal', includes: ['Sandwich/Wrap', 'Side Salad', 'Beverage'] },
      { name: 'Full Meal', price: 18, unit: 'meal', includes: ['Main Course', 'Side Dish', 'Dessert', 'Beverage'] },
      { name: 'Combo Deal', price: 22, unit: 'meal', includes: ['Any Main', 'Any Side', 'Premium Dessert', 'Coffee/Tea'] }
    ]
  }
}

const service = computed(() => services[route.params.id] || services['buffet'])

onMounted(() => {
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

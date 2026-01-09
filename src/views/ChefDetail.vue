<template>
  <div class="bg-base-100 min-h-screen">
    <!-- Loading Skeleton -->
    <template v-if="isLoading">
      <!-- Hero Banner Skeleton -->
      <div class="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 pt-32">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <!-- Breadcrumb Skeleton -->
          <div class="flex mb-6 gap-2">
            <div class="h-4 w-12 bg-base-300 rounded animate-pulse"></div>
            <div class="h-4 w-4 bg-base-300 rounded animate-pulse"></div>
            <div class="h-4 w-16 bg-base-300 rounded animate-pulse"></div>
            <div class="h-4 w-4 bg-base-300 rounded animate-pulse"></div>
            <div class="h-4 w-32 bg-base-300 rounded animate-pulse"></div>
          </div>
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <!-- Image Skeleton -->
            <div class="flex-shrink-0">
              <div class="bg-base-200 rounded-2xl p-4 shadow-xl">
                <div class="h-64 md:h-80 w-48 md:w-56 bg-base-300 rounded-xl animate-pulse"></div>
              </div>
            </div>
            <div class="flex-1">
              <!-- Name Skeleton -->
              <div class="h-12 w-64 bg-base-300 rounded-lg animate-pulse mb-2"></div>
              <!-- Role Skeleton -->
              <div class="h-6 w-32 bg-base-300 rounded animate-pulse mb-4"></div>
              <!-- Tagline Skeleton -->
              <div class="h-5 w-full max-w-md bg-base-300 rounded animate-pulse mb-6"></div>
              <!-- Meta Skeleton -->
              <div class="flex gap-4 flex-wrap">
                <div class="flex items-center gap-2">
                  <div class="h-5 w-5 bg-base-300 rounded animate-pulse"></div>
                  <div class="h-4 w-24 bg-base-300 rounded animate-pulse"></div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="h-5 w-5 bg-base-300 rounded animate-pulse"></div>
                  <div class="h-4 w-28 bg-base-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bio Section Skeleton -->
      <section class="py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <!-- About Title Skeleton -->
              <div class="h-8 w-48 bg-base-300 rounded animate-pulse mb-6"></div>
              <!-- Bio Paragraph Skeleton -->
              <div class="space-y-2 mb-8">
                <div class="h-4 w-full bg-base-300 rounded animate-pulse"></div>
                <div class="h-4 w-full bg-base-300 rounded animate-pulse"></div>
                <div class="h-4 w-full bg-base-300 rounded animate-pulse"></div>
                <div class="h-4 w-3/4 bg-base-300 rounded animate-pulse"></div>
              </div>
              
              <!-- Journey Title Skeleton -->
              <div class="h-6 w-36 bg-base-300 rounded animate-pulse mt-8 mb-4"></div>
              <!-- Timeline Skeleton -->
              <div class="space-y-4">
                <div v-for="i in 4" :key="i" class="flex gap-4">
                  <div class="flex flex-col items-center">
                    <div class="w-3 h-3 rounded-full bg-base-300 animate-pulse"></div>
                    <div class="w-0.5 h-16 bg-base-300 animate-pulse" v-if="i < 4"></div>
                  </div>
                  <div class="pb-6 flex-1">
                    <div class="h-4 w-16 bg-base-300 rounded animate-pulse mb-2"></div>
                    <div class="h-5 w-40 bg-base-300 rounded animate-pulse mb-1"></div>
                    <div class="h-3 w-56 bg-base-300 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <!-- Achievements Title Skeleton -->
              <div class="h-6 w-32 bg-base-300 rounded animate-pulse mb-4"></div>
              <!-- Awards Skeleton -->
              <div class="space-y-3">
                <div v-for="i in 3" :key="i" class="card card-border">
                  <div class="card-body p-4">
                    <div class="flex items-center gap-3">
                      <div class="h-9 w-9 bg-base-300 rounded-full animate-pulse"></div>
                      <div class="flex-1">
                        <div class="h-4 w-32 bg-base-300 rounded animate-pulse mb-1"></div>
                        <div class="h-3 w-12 bg-base-300 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Signature Dishes Title Skeleton -->
              <div class="h-6 w-36 bg-base-300 rounded animate-pulse mt-8 mb-4"></div>
              <!-- Dishes Skeleton -->
              <div class="grid gap-3">
                <div v-for="i in 3" :key="i" class="bg-base-200 rounded-lg p-4">
                  <div class="h-5 w-32 bg-base-300 rounded animate-pulse mb-2"></div>
                  <div class="h-3 w-48 bg-base-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Skeleton -->
      <section class="bg-base-200 py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <div class="h-8 w-80 bg-base-300 rounded animate-pulse mx-auto mb-4"></div>
          <div class="h-4 w-96 max-w-full bg-base-300 rounded animate-pulse mx-auto mb-6"></div>
          <div class="flex gap-4 justify-center">
            <div class="h-12 w-36 bg-base-300 rounded-lg animate-pulse"></div>
            <div class="h-12 w-36 bg-base-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <!-- Hero Banner -->
      <div class="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 pt-32">
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
                <router-link to="/#team" class="text-base-content/60 hover:text-primary">Team</router-link>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-base-content/40 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-base-content">{{ chef?.name }}</span>
              </li>
            </ol>
          </nav>
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-shrink-0">
              <div class="bg-base-200 rounded-2xl p-4 shadow-xl">
                <img :src="chef?.image" :alt="chef?.name" class="h-68 md:h-80 w-auto rounded-md" />
              </div>
            </div>
            <div class="flex-1">
              <h1 class="text-base-content text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{{ chef?.name }}</h1>
              <p class="text-primary text-xl font-medium mb-4">{{ chef?.role }}</p>
              <p class="text-base-content/80 text-lg mb-6">{{ chef?.tagline }}</p>
              <div class="flex gap-4 flex-wrap">
                <div class="flex items-center gap-2 text-base-content/80">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ chef?.experience }} experience</span>
                </div>
                <div class="flex items-center gap-2 text-base-content/80">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                  <span>{{ chef?.specialty }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chef Bio -->
      <section class="py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="text-base-content text-2xl font-semibold mb-6">About {{ chef?.name }}</h2>
              <div class="text-base-content/80 space-y-4">
                <p>{{ chef?.bio }}</p>
              </div>
              
              <h3 class="text-base-content text-xl font-semibold mt-8 mb-4">Culinary Journey</h3>
              <div class="space-y-4">
                <div v-for="(milestone, index) in chef?.journey" :key="index" class="flex gap-4">
                  <div class="flex flex-col items-center">
                    <div class="w-3 h-3 rounded-full bg-primary"></div>
                    <div class="w-0.5 h-full bg-primary/20" v-if="index < chef?.journey.length - 1"></div>
                  </div>
                  <div class="pb-6">
                    <p class="text-primary font-medium">{{ milestone.year }}</p>
                    <p class="text-base-content font-medium">{{ milestone.title }}</p>
                    <p class="text-base-content/60 text-sm">{{ milestone.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-base-content text-xl font-semibold mb-4">Achievements</h3>
              <div class="space-y-3">
                <div v-for="(award, index) in chef?.awards" :key="index" class="card card-border hover:border-primary transition-all duration-300">
                  <div class="card-body p-4">
                    <div class="flex items-center gap-3">
                      <div class="bg-primary/10 rounded-full p-2">
                        <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-base-content font-medium text-sm">{{ award.title }}</p>
                        <p class="text-base-content/60 text-xs">{{ award.year }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="text-base-content text-xl font-semibold mt-8 mb-4">Signature Dishes</h3>
              <div class="grid gap-3">
                <div v-for="(dish, index) in chef?.signatureDishes" :key="index" class="bg-base-200 rounded-lg p-4">
                  <p class="text-base-content font-medium">{{ dish.name }}</p>
                  <p class="text-base-content/60 text-sm">{{ dish.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-base-200 py-16">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-base-content text-2xl md:text-3xl font-bold mb-4">Ready to taste {{ chef?.name }}'s creations?</h2>
          <p class="text-base-content/80 mb-6 max-w-2xl mx-auto">Book your table now and experience culinary excellence.</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <router-link to="/#contact-us" class="btn btn-primary btn-lg">
              Book a Table
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
            <router-link to="/" class="btn btn-outline btn-lg">Back to Home</router-link>
          </div>
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

const chefs = {
  'cheyenne-workman': {
    id: 'cheyenne-workman',
    name: 'Cheyenne Workman',
    role: 'Head Chef',
    image: '/img/chef-1.png',
    tagline: 'A visionary leader driving innovation and collaboration in the kitchen.',
    experience: '15+ years',
    specialty: 'French Cuisine',
    bio: 'Chef Cheyenne brings over 15 years of culinary excellence to our restaurant. Trained at the prestigious Le Cordon Bleu in Paris, she has worked in Michelin-starred restaurants across Europe before joining our team. Her passion for combining traditional techniques with modern innovation has made her a celebrated figure in the culinary world.',
    journey: [
      { year: '2009', title: 'Le Cordon Bleu Graduate', description: 'Completed culinary training in Paris' },
      { year: '2012', title: 'Sous Chef at L\'Atelier', description: 'Worked under a 3-Michelin star chef' },
      { year: '2016', title: 'Executive Chef', description: 'Led kitchen at award-winning bistro' },
      { year: '2020', title: 'Head Chef', description: 'Joined our restaurant as Head Chef' }
    ],
    awards: [
      { title: 'Best New Chef Award', year: '2018' },
      { title: 'Culinary Innovation Prize', year: '2019' },
      { title: 'Restaurant of the Year (Team)', year: '2021' }
    ],
    signatureDishes: [
      { name: 'Truffle Risotto', description: 'Arborio rice with black truffle and parmesan' },
      { name: 'Seared Duck Breast', description: 'With cherry reduction and roasted vegetables' },
      { name: 'Chocolate Soufflé', description: 'Classic French dessert with vanilla crème' }
    ]
  },
  'corey-rosser': {
    id: 'corey-rosser',
    name: 'Corey Rosser',
    role: 'Kitchen Manager',
    image: '/img/chef-2.png',
    tagline: 'Leading teams to build smart, scalable solutions in the kitchen.',
    experience: '12+ years',
    specialty: 'Italian Cuisine',
    bio: 'Chef Corey is the backbone of our kitchen operations. With a background in Italian cuisine and extensive experience in high-volume restaurants, he ensures every dish meets our exacting standards. His ability to manage complex operations while maintaining quality has been invaluable to our success.',
    journey: [
      { year: '2011', title: 'Culinary School Graduate', description: 'Specialized in Italian cuisine' },
      { year: '2014', title: 'Line Cook to Sous Chef', description: 'Rapid advancement in NYC restaurants' },
      { year: '2017', title: 'Kitchen Manager', description: 'Managed 50+ seat restaurant' },
      { year: '2021', title: 'Operations Lead', description: 'Joined our team to optimize kitchen flow' }
    ],
    awards: [
      { title: 'Manager of the Year', year: '2019' },
      { title: 'Food Safety Excellence', year: '2020' }
    ],
    signatureDishes: [
      { name: 'Handmade Pasta', description: 'Fresh tagliatelle with ragù bolognese' },
      { name: 'Osso Buco', description: 'Braised veal shanks with gremolata' },
      { name: 'Tiramisu', description: 'Traditional recipe with espresso and mascarpone' }
    ]
  },
  'marilyn-westervelt': {
    id: 'marilyn-westervelt',
    name: 'Marilyn Westervelt',
    role: 'Sous Chef',
    image: '/img/chef-3.png',
    tagline: 'Crafting intuitive and engaging user experiences through food.',
    experience: '8+ years',
    specialty: 'Asian Fusion',
    bio: 'Chef Marilyn brings a unique perspective to our kitchen with her expertise in Asian fusion cuisine. Her creative approach to blending Eastern and Western flavors has resulted in some of our most popular dishes. She\'s known for her meticulous attention to detail and artistic presentation.',
    journey: [
      { year: '2015', title: 'Culinary Arts Degree', description: 'Focused on Asian cuisines' },
      { year: '2017', title: 'Stage in Tokyo', description: 'Trained at renowned sushi restaurant' },
      { year: '2019', title: 'Junior Sous Chef', description: 'Developed fusion menu concepts' },
      { year: '2022', title: 'Sous Chef', description: 'Promoted to lead creative menu development' }
    ],
    awards: [
      { title: 'Rising Star Chef', year: '2020' },
      { title: 'Best Fusion Dish', year: '2021' }
    ],
    signatureDishes: [
      { name: 'Miso Glazed Salmon', description: 'With bok choy and jasmine rice' },
      { name: 'Korean BBQ Tacos', description: 'Fusion of Korean flavors in a taco' },
      { name: 'Matcha Crème Brûlée', description: 'Japanese green tea meets French classic' }
    ]
  },
  'ryan-arcand': {
    id: 'ryan-arcand',
    name: 'Ryan Passaquindici Arcand',
    role: 'Culinary Director',
    image: '/img/chef-4.png',
    tagline: 'Bringing designs to life with seamless interfaces between kitchen and table.',
    experience: '20+ years',
    specialty: 'Modern American',
    bio: 'Chef Ryan is the visionary behind our restaurant\'s culinary direction. With two decades of experience across multiple continents and cuisines, he brings a global perspective to modern American cooking. His philosophy centers on using local, seasonal ingredients to create dishes that are both familiar and surprising.',
    journey: [
      { year: '2003', title: 'CIA Graduate', description: 'Culinary Institute of America' },
      { year: '2008', title: 'Executive Chef', description: 'Led kitchen at boutique hotel' },
      { year: '2014', title: 'Restaurant Owner', description: 'Opened farm-to-table concept' },
      { year: '2019', title: 'Culinary Director', description: 'Joined to shape our culinary vision' }
    ],
    awards: [
      { title: 'James Beard Nominee', year: '2016' },
      { title: 'Best Chef - Regional', year: '2018' },
      { title: 'Sustainability Award', year: '2020' }
    ],
    signatureDishes: [
      { name: 'Farm Fresh Salad', description: 'Seasonal greens from local farms' },
      { name: 'Dry-Aged Ribeye', description: '28-day aged with compound butter' },
      { name: 'Deconstructed Apple Pie', description: 'Modern take on a classic dessert' }
    ]
  }
}

const chef = computed(() => chefs[route.params.id] || chefs['cheyenne-workman'])

onMounted(() => {
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

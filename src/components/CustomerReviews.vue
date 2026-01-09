<template>
  <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div class="relative flex w-full gap-12 max-lg:flex-col md:gap-16 lg:items-center lg:gap-24">
        <div>
          <div class="space-y-4">
            <h2 class="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">Customers Feedback</h2>
            <p class="text-base-content/80 text-xl">From career changes to dream jobs, here's how FlyonUI helped.</p>
            <div class="flex gap-4">
              <button 
                class="btn btn-square btn-sm btn-primary relative hover:text-white"
                :class="{ 'btn-outline': currentSlide > 0 }"
                :disabled="currentSlide === 0"
                @click="prevSlide"
              >
                <span class="icon-[tabler--arrow-left] size-5"></span>
              </button>
              <button 
                class="btn btn-square btn-sm btn-primary relative hover:text-white"
                :class="{ 'btn-outline': currentSlide < maxSlide }"
                @click="nextSlide"
              >
                <span class="icon-[tabler--arrow-right] size-5"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="carousel rounded-box overflow-hidden">
          <div class="flex gap-6 transition-transform duration-300" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
            <!-- Slide 1 -->
            <div class="flex-shrink-0 w-full md:w-[calc(50%-12px)]">
              <div class="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
                <div class="card-body gap-5">
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="size-10 rounded-full">
                        <img src="/img/avatars/7.png" alt="Craig Bator" />
                      </div>
                    </div>
                    <div>
                      <h4 class="text-base-content font-medium">Craig Bator</h4>
                      <p class="text-base-content/80 text-sm">Food Blogger</p>
                    </div>
                  </div>
                  <div class="flex gap-1">
                    <span v-for="i in 5" :key="i" class="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  <p class="text-base-content/80">Chef Marilyn's signature curry is hands-down the best I've ever had. The flavors are bold and unforgettable!"</p>
                </div>
              </div>
            </div>
            <!-- Slide 2 -->
            <div class="flex-shrink-0 w-full md:w-[calc(50%-12px)]">
              <div class="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
                <div class="card-body gap-5">
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="size-10 rounded-full">
                        <img src="/img/avatars/2.png" alt="Lindsey Saris" />
                      </div>
                    </div>
                    <div>
                      <h4 class="text-base-content font-medium">Lindsey Saris</h4>
                      <p class="text-base-content/80 text-sm">Travel Chef Reviewer</p>
                    </div>
                  </div>
                  <div class="flex gap-1">
                    <span v-for="i in 4" :key="i" class="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span class="icon-[tabler--star-half-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  <p class="text-base-content/80">"Takahiro's sushi is pure perfection. So fresh, delicate, and beautifully presented — a five-star experience."</p>
                </div>
              </div>
            </div>
            <!-- Slide 3 -->
            <div class="flex-shrink-0 w-full md:w-[calc(50%-12px)]">
              <div class="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
                <div class="card-body gap-5">
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="size-10 rounded-full">
                        <img src="/img/avatars/3.png" alt="Alexandra Lee" />
                      </div>
                    </div>
                    <div>
                      <h4 class="text-base-content font-medium">Alexandra Lee</h4>
                      <p class="text-base-content/80 text-sm">Master Chief Judge</p>
                    </div>
                  </div>
                  <div class="flex gap-1">
                    <span v-for="i in 5" :key="i" class="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  <p class="text-base-content/80">The ambiance is amazing, and the food is even better! The grilled salmon was perfectly cooked. A must-try place!</p>
                </div>
              </div>
            </div>
            <!-- Slide 4 -->
            <div class="flex-shrink-0 w-full md:w-[calc(50%-12px)]">
              <div class="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
                <div class="card-body gap-5">
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="size-10 rounded-full">
                        <img src="/img/avatars/12.png" alt="Jason Wu" />
                      </div>
                    </div>
                    <div>
                      <h4 class="text-base-content font-medium">Jason Wu</h4>
                      <p class="text-base-content/80 text-sm">Food Blogger</p>
                    </div>
                  </div>
                  <div class="flex gap-1">
                    <span v-for="i in 5" :key="i" class="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  <p class="text-base-content/80">The service was exceptional. From the moment we walked in, the staff made us feel like family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const slideWidth = computed(() => {
  return isMobile.value ? 100 : 50
})

const maxSlide = computed(() => {
  return isMobile.value ? 3 : 2
})

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

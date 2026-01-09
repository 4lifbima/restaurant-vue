<template>
  <div class="bg-base-100 py-8 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <!-- Gradient border wrapper -->
      <div class="overflow-hidden rounded-3xl p-[2px]" style="background: linear-gradient(to right, rgba(139, 92, 246, 0.3), rgba(239, 68, 68, 0.3));">
        <!-- Inner white background -->
        <div class="bg-base-100 rounded-3xl p-[2px]">
          <!-- Content with gradient background -->
          <div class="relative rounded-3xl p-8 lg:p-16" style="background: linear-gradient(to right, rgba(139, 92, 246, 0.06), rgba(239, 68, 68, 0.06) 50%);">
            <div class="flex justify-between gap-8 max-md:flex-col max-sm:items-center max-sm:text-center md:items-center">
              <div class="max-w-xs space-y-4 lg:max-w-lg z-10 relative">
                <h2 class="text-base-content text-xl font-bold md:text-3xl">Order Now & Satisfy Your Cravings</h2>
                <p class="text-base-content/80">Let us bring the flavors you love straight to your door. From classic comfort dishes to chef-curated specials, every bite is made with care and delivered fresh. Skip the wait — your next favorite meal is just a click away.</p>
                <a class="btn btn-primary" href="#">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
              <img src="/img/mint.png" alt="mint" class="absolute end-[21%] top-0 h-20 max-w-sm max-md:hidden" />
              <img src="/img/pizza.png" alt="Pizza" class="absolute end-0 top-0 h-full max-w-md rounded-br-3xl max-md:hidden object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

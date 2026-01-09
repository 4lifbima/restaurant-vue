<template>
  <section id="services">
    <div class="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 class="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">Crafting Moments, Serving You</h2>
          <p class="text-base-content/80 text-xl">From unforgettable flavors to seamless service, we're here to make every meal feel special. Whether you dine in, take out, or order online we've got your cravings covered.</p>
        </div>
        <!-- Blog Grid -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Blog Card 1 -->
          <div class="card card-border shadow-none hover:border-primary transition-all duration-300">
            <figure>
              <img src="/img/free-blog-1.png" alt="Buffet Service" class="w-full h-48 object-cover" />
            </figure>
            <div class="card-body gap-3">
              <h5 class="card-title text-xl">Buffet Service</h5>
              <p class="mb-5 text-base-content/80">Navigate effortlessly with our intuitive design, optimized for all devices. Enjoy a seamless experience whether you're on a computer or mobile device.</p>
              <div class="card-actions">
                <router-link to="/service/buffet" class="btn btn-primary">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
          <!-- Blog Card 2 -->
          <div class="card card-border shadow-none hover:border-primary transition-all duration-300">
            <figure>
              <img src="/img/free-blog-2.png" alt="Food Delivery" class="w-full h-48 object-cover" />
            </figure>
            <div class="card-body gap-3">
              <h5 class="card-title text-xl">Food Delivery</h5>
              <p class="mb-5 text-base-content/80">Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.</p>
              <div class="card-actions">
                <router-link to="/service/delivery" class="btn btn-primary">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
          <!-- Blog Card 3 -->
          <div class="card card-border shadow-none hover:border-primary transition-all duration-300">
            <figure>
              <img src="/img/free-blog-3.png" alt="Cafeteria" class="w-full h-48 object-cover" />
            </figure>
            <div class="card-body gap-3">
              <h5 class="card-title text-xl">Cafeteria</h5>
              <p class="mb-5 text-base-content/80">Find products quickly with advanced filters, sorting options, and suggestion. Save time and effortlessly locate exactly what you need with ease.</p>
              <div class="card-actions">
                <router-link to="/service/cafeteria" class="btn btn-primary">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

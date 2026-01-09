<template>
  <section id="team">
    <div class="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center sm:mb-16 lg:mb-24">
          <h2 class="text-base-content mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">Get to Know Our Amazing Team</h2>
          <p class="text-base-content/80 text-xl">Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.</p>
        </div>
        <!-- Team Members -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <!-- Team Member 1 -->
          <router-link to="/chef/cheyenne-workman" class="card card-border hover:border-primary h-max shadow-none transition-all duration-300 cursor-pointer group">
            <figure class="bg-base-200 pt-10.5 overflow-hidden">
              <img src="/img/chef-1.png" alt="Cheyenne Workman" class="h-60 w-auto group-hover:scale-105 transition-transform duration-300" />
            </figure>
            <div class="card-body gap-3 p-5">
              <h3 class="text-base-content text-lg font-medium group-hover:text-primary transition-colors">Cheyenne Workman</h3>
              <div class="divider my-1"></div>
              <div>
                <p class="text-primary mb-1 font-medium">Head Chef</p>
                <p class="text-base-content/80 text-sm">A visionary leader driving innovation and collaboration.</p>
              </div>
            </div>
          </router-link>
          <!-- Team Member 2 -->
          <router-link to="/chef/corey-rosser" class="card card-border hover:border-primary h-max shadow-none transition-all duration-300 cursor-pointer group">
            <figure class="bg-base-200 pt-10.5 overflow-hidden">
              <img src="/img/chef-2.png" alt="Corey Rosser" class="h-60 w-auto group-hover:scale-105 transition-transform duration-300" />
            </figure>
            <div class="card-body gap-3 p-5">
              <h3 class="text-base-content text-lg font-medium group-hover:text-primary transition-colors">Corey Rosser</h3>
              <div class="divider my-1"></div>
              <div>
                <p class="text-primary mb-1 font-medium">Kitchen Manager</p>
                <p class="text-base-content/80 text-sm">Leading teams to build smart, scalable solutions.</p>
              </div>
            </div>
          </router-link>
          <!-- Team Member 3 -->
          <router-link to="/chef/marilyn-westervelt" class="card card-border hover:border-primary h-max shadow-none transition-all duration-300 cursor-pointer group">
            <figure class="bg-base-200 pt-10.5 overflow-hidden">
              <img src="/img/chef-3.png" alt="Marilyn Westervelt" class="h-60 w-auto group-hover:scale-105 transition-transform duration-300" />
            </figure>
            <div class="card-body gap-3 p-5">
              <h3 class="text-base-content text-lg font-medium group-hover:text-primary transition-colors">Marilyn Westervelt</h3>
              <div class="divider my-1"></div>
              <div>
                <p class="text-primary mb-1 font-medium">Sous Chef</p>
                <p class="text-base-content/80 text-sm">Crafting intuitive and engaging user experiences.</p>
              </div>
            </div>
          </router-link>
          <!-- Team Member 4 -->
          <router-link to="/chef/ryan-arcand" class="card card-border hover:border-primary h-max shadow-none transition-all duration-300 cursor-pointer group">
            <figure class="bg-base-200 pt-10.5 overflow-hidden">
              <img src="/img/chef-4.png" alt="Ryan Passaquindici Arcand" class="h-60 w-auto group-hover:scale-105 transition-transform duration-300" />
            </figure>
            <div class="card-body gap-3 p-5">
              <h3 class="text-base-content text-lg font-medium group-hover:text-primary transition-colors">Ryan Passaquindici Arcand</h3>
              <div class="divider my-1"></div>
              <div>
                <p class="text-primary mb-1 font-medium">Culinary Director</p>
                <p class="text-base-content/80 text-sm">Bringing designs to life with seamless interfaces.</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

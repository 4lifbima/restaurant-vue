<template>
  <section id="contact-us">
    <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <!-- Heading Section -->
        <div class="mb-12 text-center text-white sm:mb-16 lg:mb-24">
          <h2 class="text-base-content mb-4 text-2xl font-semibold md:text-3xl md:text-6xl lg:text-4xl">Get in Touch to Reserve Your Table</h2>
          <p class="text-base-content/80 text-xl">Whether you're planning a casual dinner or a special celebration, we're here to make your experience seamless.</p>
        </div>
        <div class="card shadow-md">
          <div class="card-body grid gap-10 lg:grid-cols-7">
            <!-- Form Section -->
            <div class="lg:col-span-4">
              <h2 class="text-base-content mb-6 text-3xl font-semibold">Book a Table</h2>
              <form class="space-y-6" @submit.prevent="handleSubmit">
                <div class="flex gap-6 max-md:flex-col">
                  <div class="w-full">
                    <label class="label-text" for="username">Your Name</label>
                    <div class="input input-lg">
                      <input type="text" class="grow" placeholder="Enter your name here..." id="username" v-model="form.name" />
                      <span class="icon-[tabler--user] text-base-content/80 size-5.5 my-auto ms-3 shrink-0"></span>
                    </div>
                  </div>
                  <div class="w-full">
                    <label class="label-text" for="userphone">Phone Number</label>
                    <div class="input input-lg">
                      <input type="text" class="grow" placeholder="+1 (212) 555-1234" id="userphone" v-model="form.phone" />
                      <span class="icon-[tabler--phone] text-base-content/80 size-5.5 my-auto ms-3 shrink-0"></span>
                    </div>
                  </div>
                </div>
                <div class="flex gap-6 max-md:flex-col">
                  <div class="w-full">
                    <label class="label-text" for="userdate">Enter The Date</label>
                    <div class="input input-lg">
                      <input type="text" ref="dateInput" class="grow" placeholder="06/11/25" id="userdate" v-model="form.date" />
                      <span class="icon-[tabler--calendar-event] text-base-content/80 size-5.5 my-auto ms-3 shrink-0"></span>
                    </div>
                  </div>
                  <div class="w-full">
                    <label class="label-text" for="usertime">Enter Time</label>
                    <div class="input input-lg">
                      <input type="text" class="grow" placeholder="06:00:00" id="usertime" v-model="form.time" />
                      <span class="icon-[tabler--calendar-time] text-base-content/80 size-5.5 my-auto ms-3 shrink-0"></span>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="label-text" for="usermessage">Message</label>
                  <div class="textarea">
                    <textarea class="grow resize-none" aria-label="Textarea" placeholder="Enter your message" id="usermessage" v-model="form.message"></textarea>
                    <span class="icon-[tabler--message-circle-2] text-base-content/80 mx-4 mt-2 size-6 shrink-0"></span>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary w-full">Book a Reservation</button>
              </form>
            </div>
            <!-- Contact Information -->
            <div class="space-y-6 lg:col-span-3">
              <div class="border-base-content/20 rounded-box border p-6 text-center">
                <h3 class="text-base-content mb-4 text-xl font-semibold">Email/Phone</h3>
                <p class="text-base-content/80 mb-2 break-all">johndoe@gmail.com</p>
                <p class="text-base-content/80">+148 589 2001 2466</p>
              </div>
              <div class="border-base-content/20 rounded-box border p-6 text-center">
                <h3 class="text-base-content mb-4 text-xl font-semibold">Our Location</h3>
                <p class="text-base-content/80">Office 149,</p>
                <p class="text-base-content/80">450 South Brand Brooklyn</p>
                <p class="text-base-content/80">San Diego County,</p>
                <p class="text-base-content/80">CA 91905, USA</p>
              </div>
              <p class="text-base-content text-center font-medium">
                Opening Hours
                <span class="text-primary">9AM - 11PM</span>
                Everyday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import flatpickr from 'flatpickr'

const dateInput = ref(null)
const form = ref({
  name: '',
  phone: '',
  date: '',
  time: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}

onMounted(() => {
  if (dateInput.value) {
    flatpickr(dateInput.value, {
      monthSelectorType: 'static'
    })
  }
})
</script>

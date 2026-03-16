<template>
  <section class="hero relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-[#001151] z-0">
      <img 
        src="https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/08/co-b-l.svg" 
        alt="Background" 
        class="w-full h-full object-cover "
      >
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 text-center">
      <!-- Welcome Text -->
      <div class="mb-6">
        <p class="text-blue-300 text-2xl font-medium">Welcome to daddytemplate 老爹模板</p>
      </div>

      <!-- Main Heading -->
      <div class="mb-8">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-[800px] mx-auto">
         Your Global Business Journey Starts Here
        </h1>
      </div>

      <!-- Subtitle -->
      <div class="mb-12 max-w-3xl mx-auto">
        <p class="text-blue-100 text-lg leading-relaxed">
          We exist to help your financial journey from start to finish. Just tell us your goals and we make it happen.
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <button class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all font-medium">
          Discover our services
        </button>
        <button class="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0c1a38] transition-all font-medium">
          Get a quote now
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 ">
        <div class="text-center">
          <p class="text-5xl font-bold text-white mb-2">25+</p>
          <p class="text-blue-300">Years in Business</p>
        </div>
        <div class="text-center">
          <p class="text-5xl font-bold text-white mb-2">$6.5M</p>
          <p class="text-blue-300">Transactions processed</p>
        </div>
        <div class="text-center">
          <p class="text-5xl font-bold text-white mb-2">97.2%</p>
          <p class="text-blue-300">Customer satisfaction</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-white mb-2">+86 (136) 5661-7631</p>
          <p class="text-blue-300">Phone (24/7 support)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  /**
   * Welcome text
   */
  welcomeText: {
    type: String,
    default: 'Welcome to Seven Corporate'
  },
  /**
   * Main heading
   */
  heading: {
    type: String,
    default: 'Your Global Business Journey Starts Here'
  },
  /**
   * Subtitle
   */
  subtitle: {
    type: String,
    default: 'We exist to help your financial journey from start to finish. Just tell us your goals and we make it happen.'
  },
  /**
   * Primary button text
   */
  primaryButtonText: {
    type: String,
    default: 'Discover our services'
  },
  /**
   * Secondary button text
   */
  secondaryButtonText: {
    type: String,
    default: 'Get a quote now'
  }
});
</script>

<style scoped>
.hero {
  position: relative;
}



.hero > .container {
  position: relative;
  z-index: 2;
}
</style>
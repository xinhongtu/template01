<template>
    <section class="hero relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 bg-[#001151] z-0">
            <img src="https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/08/co-b-l.svg" alt="Background"
                class="w-full h-full object-cover ">
        </div>

        <!-- Content -->
         <ClientOnly>
        <div v-scroll-group class="container mx-auto px-4 relative z-10 text-center">
            <!-- Welcome Text -->
            <div
                class="mb-8 w-fit mx-auto flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></span>
                <p class="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                    {{ siteConfig?.hero?.welcomeText || 'Welcome My Business' }}
                </p>
            </div>

            <!-- Main Heading -->
            <div class="mb-8">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-[800px] mx-auto">
                    {{ siteConfig?.hero?.mainHeading || 'Your Global Business Journey Starts Here' }}
                </h1>
            </div>

            <!-- Subtitle -->
            <div class="mb-12 max-w-3xl mx-auto">
                <p class="text-blue-100 text-lg leading-relaxed">
                    {{ siteConfig?.hero?.subtitle || 'We exist to help your financial journey from start to finish.Justtell us your goals and we make it happen.' }}
                </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <NuxtLink to="/products"
                    class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all font-medium">
                    {{ siteConfig?.hero?.ctaButton || 'Discover our products' }}
                </NuxtLink>
                <NuxtLink to="/contact"
                    class="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0c1a38] transition-all font-medium">
                    {{ siteConfig?.hero?.secondaryButton || 'Contact us' }}
                </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 ">
                <div class="text-center">
                    
                    <p v-if="siteConfig?.hero?.yearsInBusiness" v-count="siteConfig.hero.yearsInBusiness"
                        class="text-5xl font-bold text-white mb-2">
                        0
                    </p>
                    <p class="text-blue-300">Years in Business</p>
                </div>
                <div class="text-center">
                    <p v-if="siteConfig?.hero?.transactionsProcessed" v-count="siteConfig.hero.transactionsProcessed"
                        class="text-5xl font-bold text-white mb-2">{{ siteConfig?.hero?.transactionsProcessed || '$6.5M'
                    }}</p>
                    <p class="text-blue-300">Transactions processed</p>
                </div>
                <div class="text-center">
                    <p v-if="siteConfig?.hero?.customerSatisfaction" v-count="siteConfig.hero.customerSatisfaction"
                        class="text-5xl font-bold text-white mb-2">{{ siteConfig?.hero?.customerSatisfaction || '97.2%'
                    }}</p>
                    <p class="text-blue-300">Customer satisfaction</p>
                </div>
                <div class="">
                    <div class="flex items-center">
                        <Phone class="w-8 h-8 inline-block mr-2 text-blue-300" />
                        <div>
                            <p class="text-3xl font-bold text-white mb-2">{{ siteConfig?.hero?.phoneNumber || '+86 (136) 5661-7631' }}</p>
                            <p class="text-blue-300">Phone (24/7 support)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
    Phone,
} from 'lucide-vue-next'
const siteConfig = ref({

})
onMounted(async () => {
    try {
        const response = await fetch('/setting.json')
        if (response.ok) {
            const data = await response.json()
            siteConfig.value = { ...siteConfig.value, ...data }
        }
    } catch (e) {
        console.warn("Setting.json not found")
    }
})
</script>

<style scoped>
.hero {
    position: relative;
}



.hero>.container {
    position: relative;
    z-index: 2;
}
</style>
<template>
  <div class="about-page pt-24 pb-16 bg-white overflow-hidden">
    
    <!-- 1. Hero Section (公司简介) -->
    <section class="container mx-auto px-4 mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="content order-2 lg:order-1">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 tracking-wide border border-blue-100 uppercase">
            {{ displayAbout.hero.subtitle }}
          </div>
          <h1 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {{ displayAbout.hero.title }}
          </h1>
          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            {{ displayAbout.hero.description }}
          </p>
          <ul class="space-y-4 mb-8">
            <li v-for="(item, index) in displayAbout.hero.highlights" :key="index" class="flex items-center text-slate-700 font-medium">
              <CheckCircle class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="relative order-1 lg:order-2">
          <!-- 装饰背景 -->
          <div class="absolute -top-6 -right-6 w-full h-full bg-slate-100 rounded-3xl -z-10"></div>
          <img :src="displayAbout.hero.image" :alt="displayAbout.hero.title" class="w-full h-[500px] object-cover rounded-3xl shadow-xl" />
        </div>
      </div>
    </section>

    <!-- 2. Stats Section (核心数据) -->
    <section class="bg-[#001151] py-16 mb-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          <div v-for="(stat, index) in displayAbout.stats" :key="index" class="px-4">
            <div class="text-4xl lg:text-5xl font-black text-white mb-2">{{ stat.value }}</div>
            <div class="text-blue-200 font-medium tracking-wide uppercase text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Why Choose Us (核心优势 - 外贸买家最关心) -->
    <section class="container mx-auto px-4 mb-24">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">{{ displayAbout.features.title }}</h2>
        <p class="text-lg text-slate-600">{{ displayAbout.features.description }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in displayAbout.features.list" :key="index" 
             class="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-slate-100">
          <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <!-- 动态渲染图标 -->
            <component :is="iconMap[feature.icon]" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">{{ feature.title }}</h3>
          <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
// 引入所有可能用到的 Lucide 图标
import { CheckCircle, Factory, ShieldCheck, Globe, Truck, Settings, Users } from 'lucide-vue-next'

// 构建图标映射表，方便 JSON 里通过字符串匹配组件
const iconMap: Record<string, any> = {
  Factory, ShieldCheck, Globe, Truck, Settings, Users
}

const props = defineProps({
  aboutData: {
    type: Object,
    default: () => ({
      hero: {
        subtitle: "About Our Company",
        title: "Your Trusted Global Manufacturing Partner",
        description: "We are a leading manufacturer and exporter with over 15 years of experience. We specialize in providing high-quality OEM & ODM solutions for clients worldwide. Our commitment to innovation, strict quality control, and customer satisfaction has made us a preferred partner in the global market.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
        highlights: [
          "15+ Years of Manufacturing Experience",
          "Comprehensive OEM/ODM Services",
          "ISO 9001 Certified Quality Control",
          "Global Supply Chain Network"
        ]
      },
      stats: [
        { value: "15+", label: "Years Experience" },
        { value: "50+", label: "Countries Exported" },
        { value: "10,000㎡", label: "Factory Area" },
        { value: "100%", label: "Quality Inspection" }
      ],
      features: {
        title: "Why Partner With Us?",
        description: "We don't just supply products; we provide complete solutions to help your business grow and stay competitive in the market.",
        list: [
          {
            icon: "Factory",
            title: "OEM & ODM Capability",
            description: "Strong R&D team and flexible production lines to meet your customized requirements perfectly."
          },
          {
            icon: "ShieldCheck",
            title: "Strict Quality Control",
            description: "From raw materials to final packaging, every step is strictly monitored to ensure zero defects."
          },
          {
            icon: "Globe",
            title: "Global Export Experience",
            description: "Familiar with international trade standards, certifications, and smooth customs clearance."
          },
          {
            icon: "Truck",
            title: "Fast & Reliable Delivery",
            description: "Optimized supply chain and strategic logistics partnerships ensure your goods arrive on time."
          },
          {
            icon: "Settings",
            title: "Advanced Technology",
            description: "Equipped with state-of-the-art machinery to guarantee precision, efficiency, and scale."
          },
          {
            icon: "Users",
            title: "24/7 Professional Support",
            description: "Our multilingual sales team is always ready to provide rapid responses and dedicated service."
          }
        ]
      }
    })
  }
})

const siteConfig = ref<Record<string, any>>({})

onMounted(async () => {
  try {
    const response = await fetch('/setting.json')
    if (response.ok) {
      const data = await response.json()
      siteConfig.value = { ...siteConfig.value, ...data }
    }
  } catch (e) {
    console.warn("Setting.json not found or invalid format")
  }
})

// 计算属性：优先使用 json 里的 about 数据
const displayAbout = computed(() => {
  if (siteConfig.value?.about) {
    return siteConfig.value.about
  }
  return props.aboutData
})


// seo meta
useSeoMeta({
  title: () => siteConfig.value?.seo?.about.title || 'Default Title',
  description: () => siteConfig.value?.seo?.about.description || 'Default description',
  ogTitle: () => siteConfig.value?.seo?.about.title || 'Default Title',
  ogDescription: () => siteConfig.value?.seo?.about.description || 'Default description',
  ogImage: () => siteConfig.value?.seo?.about.ogImage || '/default-og.jpg',
  twitterCard: () => siteConfig.value?.seo?.about.twitterCard || 'summary_large_image', 
})
</script>
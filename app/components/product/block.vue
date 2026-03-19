<template>
  <section class="products py-24 bg-slate-50/50 overflow-hidden">
    <!-- Second Section -->
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="content order-2 lg:order-1 lg:pr-8">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 tracking-wide border border-blue-100">
             {{ displaySecondSection.subtitle }}
          </div>
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            {{ displaySecondSection.title }}
          </h2>
          <p class="text-lg text-slate-600 mb-10 leading-relaxed">
            {{ displaySecondSection.description }}
          </p>

          <!-- Feature Badges -->
          <div class="grid grid-cols-1 gap-5 mb-8">
            <div v-for="(badge, index) in displaySecondSection.featureBadges" :key="index" 
                 class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group/card">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                  <img :src="badge.icon" :alt="badge.title" class="w-6 h-6" />
                </div>
                <div>
                  <div class="font-bold text-slate-900 mb-1 text-lg">{{ badge.title }}</div>
                  <div class="text-slate-500 text-sm leading-relaxed">{{ badge.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image with Satisfaction Badge -->
        <div class="relative order-1 lg:order-2 group">
          <!-- Decorative shape -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 transition-all group-hover:scale-125"></div>

          <div class="relative overflow-hidden rounded-2xl shadow-2xl  max-w-lg ml-auto">
            <img 
              :src="displaySecondSection.image" 
              :alt="displaySecondSection.imageAlt"
              class="w-full h-auto object-cover max-h-[500px] "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 定义 Props 并赋值给变量，方便 computed 读取
const props = defineProps({
  firstSection: {
    type: Object as () => {
      subtitle: string; title: string; description: string; image: string; imageAlt: string; yearsInBusiness: string; features: string[];
    },
    default: () => ({
      subtitle: 'Premier investment company',
      title: 'Products that meet your investment needs',
      description: 'Ut elit tellus - luctus nec, luctus consectetur adipiscing elit tellus mattis pulvinar dapibus. Donec vestibulum, lorem aliquam commodo, eros nisl pellentesque elit tellus nec elit tellus nec ullam lorvm nulla ipsum corper mattis pulvinar dapibus luctus consectetur adipiscing!',
      image: 'https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/03/landsc-2x3-m401.webp',
      imageAlt: 'Modern office building',
      yearsInBusiness: '25+',
      features: ['Simple & transparent process', 'Financial stability & strength', 'Expert financial advisors', 'Hands-on support']
    })
  },
  secondSection: {
    type: Object as () => {
      subtitle: string; title: string; description: string; image: string; imageAlt: string; customerSatisfaction: string;
      featureBadges: Array<{ title: string; description: string; icon: string; }>;
    },
    default: () => ({
      subtitle: 'Top-notch financial stability',
      title: 'Investing with clarity, navigating with confidence',
      description: 'Ut elit tellus - luctus nec, luctus consectetur adipiscing elit tellus mattis pulvinar corper mattis nisl pellentesque elit tellus nec elit dapibus. Lorem aliquam commodo, ipsum corper mattis pulvinar dapibus luctus consectetur adipiscing eros nisl pellentesque elit tellus nec elit tellus nec ullam lorvm nulla ipsum corper mattis pulvinar dapibu.',
      image: 'https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/03/landsc-2x3-094.webp',
      imageAlt: 'Professional working on laptop',
      customerSatisfaction: '95%',
      featureBadges: [
        {
          title: 'Modern professional approach',
          description: 'Tailored strategies for your unique financial goals',
          icon: 'https://api.iconify.design/lucide:shield-check.svg?color=%233b82f6'
        },
        {
          title: 'Guaranteed capital growth',
          description: 'Secure investments with proven returns',
          icon: 'https://api.iconify.design/lucide:trending-up.svg?color=%233b82f6'
        }
      ]
    })
  }
});

// 定义响应式配置数据
const siteConfig = ref<Record<string, any>>({});

// 挂载时请求 setting.json
onMounted(async () => {
  try {
    const response = await fetch('/setting.json');
    if (response.ok) {
      const data = await response.json();
      siteConfig.value = { ...siteConfig.value, ...data };
    }
  } catch (e) {
    console.warn("Setting.json not found or invalid format");
  }
});

// 使用计算属性：优先使用 json 里的 productFeature.secondSection，没有就用 props 默认值
const displaySecondSection = computed(() => {
  if (siteConfig.value?.productFeature?.secondSection) {
    return siteConfig.value.productFeature.secondSection;
  }
  return props.secondSection;
});

// 同理，如果你的代码里其实也用到了 firstSection，可以像下面这样写：
const displayFirstSection = computed(() => {
  if (siteConfig.value?.productFeature?.firstSection) {
    return siteConfig.value.productFeature.firstSection;
  }
  return props.firstSection;
});
</script>

<style scoped>
.container {
  position: relative;
  z-index: 1;
}

@media (max-width: 1024px) {
  .absolute.-bottom-6 {
    bottom: -1rem;
    left: 1rem;
    right: auto;
    scale: 0.9;
  }
}
</style>
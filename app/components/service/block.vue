<template>
  <section class="services py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-blue-500 text-xl font-medium mb-4">What we offer</p>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Solutions tailored to your needs
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Ultrices tellus - luctus nec, luctus consectetur adipiscing elit tellus mattis ullamcorper dapibus. Donec vestibulum, 
          lorem ipsum aliquam commodo, eros nisl pellentesque sit tellus!
        </p>
      </div>

      <!-- Services Cards -->
      <div class="relative">
        <div class="flex overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(group, groupIndex) in groupedServices" 
              :key="groupIndex"
              class="flex gap-6 flex-shrink-0 w-full"
            >
              <div 
                v-for="(service, index) in group" 
                :key="index"
                class="service-card flex-1"
              >
                <div v-if="!service.isEmpty" class="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <!-- Icon -->
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <div class="text-blue-500">
                      <!-- 🌟 核心修改 1：使用动态组件渲染 Lucide 图标 -->
                      <component 
                        :is="service.icon" 
                        class="w-12 h-12" 
                        stroke-width="1.5"
                      />
                    </div>
                  </div>
                  
                  <!-- Title -->
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">
                    {{ service.title }}
                  </h3>
                  
                  <!-- Description -->
                  <p class="text-gray-600 mb-6">
                    {{ service.description }}
                  </p>
                  
                  <!-- Button -->
                  <button class="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition-colors duration-300">
                    Learn more
                  </button>
                </div>
                <div v-else class="invisible">
                  <!-- 空占位符，保持布局一致 -->
                  <div class="bg-gray-50 p-8 rounded-lg">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"></div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">&nbsp;</h3>
                    <p class="text-gray-600 mb-6">&nbsp;</p>
                    <button class="w-full bg-blue-500 text-white px-4 py-3 rounded">&nbsp;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows (这里保留了原有的纯SVG，如果你想也可以换成 Lucide 的 ChevronLeft / ChevronRight) -->
        <div class="flex justify-center space-x-4 mt-10">
          <button 
            @click="scrollLeft"
            class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="flex items-center space-x-2">
            <span 
              v-for="i in groupedServices.length" 
              :key="i"
              class="h-1 rounded-full transition-colors cursor-pointer"
              :class="currentSlide === i - 1 ? 'w-8 bg-blue-500' : 'w-4 bg-gray-300'"
              @click="goToSlide(i - 1)"
            ></span>
          </div>
          <button 
            @click="scrollRight"
            class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Component } from 'vue' // 引入 Component 类型

// 🌟 核心修改 2：从 lucide-vue-next 导入你需要的图标组件
import { 
  Globe, 
  Bitcoin, 
  CircleDollarSign 
} from 'lucide-vue-next'

const props = defineProps({
  services: {
    type: Array as () => Array<{
      title: string
      description: string
      icon: Component // 🌟 核心修改 3：类型从 string 改为 Component
      isEmpty?: boolean
    }>,
    default: () => [
      {
        title: 'Investor & fund management',
        description: 'Consectetur adipiscing elit tellus, luctus consectetur adipiscing elit tellus nec ullamcorper dolor luctus consectetur.',
        icon: Globe // 使用导入的组件对象，不要加引号
      },
      {
        title: 'Crypto currency operations',
        description: 'Consectetur adipiscing elit tellus, luctus consectetur adipiscing elit tellus nec ullamcorper dolor luctus consectetur.',
        icon: Bitcoin
      },
      {
        title: 'Financial consulting',
        description: 'Consectetur adipiscing elit tellus, luctus consectetur adipiscing elit tellus nec ullamcorper dolor luctus consectetur. Lorem amet.',
        icon: CircleDollarSign
      },
      {
        title: 'Financial consulting',
        description: 'Consectetur adipiscing elit tellus, luctus consectetur adipiscing elit tellus nec ullamcorper dolor luctus consectetur. Lorem amet.',
        icon: CircleDollarSign
      },
      {
        title: 'Financial consulting',
        description: 'Consectetur adipiscing elit tellus, luctus consectetur adipiscing elit tellus nec ullamcorper dolor luctus consectetur. Lorem amet.',
        icon: CircleDollarSign
      },
       {
        title: 'Financial consulting',
        description: 'Consectetur adipiscing elit tellus, luctus consectetur adipiscing elit tellus nec ullamcorper dolor luctus consectetur. Lorem amet.',
        icon: CircleDollarSign
      }
    ]
  }
})

const currentSlide = ref(0)

const groupedServices = computed(() => {
  const groups = []
  for (let i = 0; i < props.services.length; i += 3) {
    const group = props.services.slice(i, i + 3)
    // 如果最后一组不足3个，用空对象填充
    while (group.length < 3) {
      group.push({
        title: '',
        description: '',
        icon: null as any, // 空状态下置为空即可，因为上面有 v-if="!service.isEmpty" 控制
        isEmpty: true
      })
    }
    groups.push(group)
  }
  return groups
})

const scrollLeft = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const scrollRight = () => {
  if (currentSlide.value < groupedServices.value.length - 1) {
    currentSlide.value++
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>

<style scoped>
.services {
  position: relative;
}

.service-card {
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}
</style>
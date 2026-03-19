<!-- pages/products/[category]/index.vue -->
<template>
  <div class="bg-slate-50 min-h-screen pt-24 pb-20">
    <div class="container mx-auto px-4">
      
      <!-- 面包屑/返回 (简约风) -->
      <nav class="mb-8 flex items-center gap-2 text-sm font-medium">
        <NuxtLink to="/" class="text-slate-400 hover:text-blue-500">Home</NuxtLink>
        <span class="text-slate-300">/</span>
        <NuxtLink to="/products" class="text-slate-400 hover:text-blue-500">Products</NuxtLink>
        <span class="text-slate-300">/</span>
        <span class="text-slate-900 capitalize">{{ categoryName }}</span>
      </nav>

      <!-- 标题 -->
      <div class="mb-12 border-l-4 border-blue-500 pl-6">
        <h1 class="text-4xl font-black text-slate-900 capitalize tracking-tight">{{ categoryName }} Collections</h1>
        <p class="text-slate-500 mt-2">Explore our high-performance {{ categoryName }} solutions.</p>
      </div>

      <!-- 列表网格 -->
      <div v-if="products && products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        <!-- 🌟 使用我们封装好的组件 -->
        <ProductCard 
       
          v-for="item in products" 
          :key="item._path" 
          :product="item" 
        />
      </div>

      <!-- 空状态 (美化处理) -->
      <div v-else class="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-slate-100">
        <div class="text-slate-300 mb-4 flex justify-center">
          <PackageOpen class="w-16 h-16" />
        </div>
        <p class="text-slate-500 font-medium text-lg">Coming soon to this category...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PackageOpen } from 'lucide-vue-next'

const route = useRoute()
const categoryName = route.params.category as string

const { data: products } = await useAsyncData(`category-${categoryName}`, () => {
  // 使用新的 queryCollection 语法
  return queryCollection('products')
    .where('path', 'LIKE', `/products/${categoryName}/%`)
    .all()
})
// --- 动态 SEO 设置 ---
// 将 categoryName 格式化为标题，例如 "laser-therapy" -> "Laser Therapy"
const formattedCategory = computed(() => 
  categoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
)

useSeoMeta({
  title: `${formattedCategory.value} | Product Collections`,
  description: `Explore our collection of ${formattedCategory.value}. High-quality products for your business needs.`,
  ogTitle: `${formattedCategory.value} | Product Collections`,
  ogDescription: `Explore our collection of ${formattedCategory.value}. High-quality products for your business needs.`
})
</script>


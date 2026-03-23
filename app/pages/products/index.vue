<template>
  <div class="bg-slate-50 min-h-screen pt-24 pb-20">
    <div class="container mx-auto px-4">
      <!-- 面包屑 -->
      <nav class="mb-8 flex items-center gap-2 text-sm font-medium">
        <NuxtLink to="/" class="text-slate-400 hover:text-blue-500">Home</NuxtLink>
        <span class="text-slate-300">/</span>
        <span class="text-slate-900">Products</span>
      </nav>

      <!-- 标题 -->
      <div class="mb-12 border-l-4 border-blue-500 pl-6">
        <h1 class="text-4xl font-black text-slate-900 tracking-tight">Our Product Categories</h1>
        <p class="text-slate-500 mt-2">Explore our wide range of high-quality products.</p>
      </div>

      <!-- 分类列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink 
          v-for="category in categories" 
          :key="category" 
          :to="`/products/${category}`"
          class="group block bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 p-8 text-center"
        >
          <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
            <PackageOpen class="w-10 h-10 text-blue-600" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors capitalize">{{ category }}</h3>
          <p class="text-slate-500 text-sm">View all products in this category</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PackageOpen } from 'lucide-vue-next'
const { data: navData } = await useProductsNav()
// 硬编码分类列表，实际项目中可能需要从 API 获取
// console.log('navData', navData.value)
const categories = navData.value[0].children.map(item => item.title)
// console.log('categories', categories)
</script>

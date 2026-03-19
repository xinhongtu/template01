<template>
  <div class="bg-white min-h-screen pb-20">
    <!-- 顶部面包屑与背景 (深蓝色系) -->
    <div class="bg-[#001151] pt-32 pb-20 relative overflow-hidden" style="background-image: url('/img/co-b-r.svg'); background-size: cover; background-position: center;">
      <!-- <div class="absolute inset-0 opacity-10">
        <img src="/img/co-b-r.svg"
          class="w-full h-full object-cover">
      </div> -->

      <div class="container mx-auto px-4 relative z-10">
        <nav class="flex items-center gap-2 text-sm font-medium text-blue-200/60 mb-6">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <ChevronRight class="w-4 h-4" />
          <NuxtLink :to="`/products/${categoryName}`" class="hover:text-white transition-colors capitalize">{{
            categoryName }}</NuxtLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-white line-clamp-1">{{ product?.title || 'Loading...' }}</span>
        </nav>
       
      </div>
    </div>

    <!-- 内容区：使用 v-if 确保数据加载后再渲染，防止报错 -->
    <div v-if="product" class="container mx-auto px-4 mt-10  z-20">
      <!-- 上方：产品图片画廊 -->
      <div class="lg:grid grid-cols-2 gap-8  mx-auto container px-4">

        <!-- ProductGallery 区域 -->
        <div class="col-span-1">
          <ProductGallery :images="product?.meta?.firstImage || []" class="w-full" />
        </div>

        <!-- 右侧区域 -->
        <div class="mt-20 lg:mt-0 flex flex-col space-y-10"> <!-- 增加整体间距到 10 -->

  <!-- 1. 标题区域：增加小标签，模仿 Hero 风格 -->
  <div class="space-y-3">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
      <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Official Product</span>
    </div>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-black text-[#001151] leading-[1.15] tracking-tight">
      {{ product.title }}
    </h1>
  </div>

  <!-- 2. 价格区域：改为精致的卡片式展示 -->
  <div v-if="product.meta?.price" 
    class="inline-flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl w-fit pr-8">
    <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
      <Receipt class="w-6 h-6 text-[#001151]" />
    </div>
    <div class="flex flex-col">
      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Quote</span>
      <span class="text-2xl font-black text-slate-900 tracking-tight">{{ product.meta?.price }}</span>
    </div>
  </div>

  <!-- 3. 描述区域：增加侧边引导条 -->
  <div class="relative pl-8">
    <div class="absolute left-0 top-2 bottom-2 w-1 bg-blue-500/20 rounded-full">
      <div class="w-full h-1/3 bg-blue-500 rounded-full"></div>
    </div>
    <p class="text-slate-600 text-lg leading-relaxed font-medium">
      {{ product.description }}
    </p>
  </div>

  <!-- 4. 决策转化区 (CTA)：加入图标和更强的投影 -->
  <div class="space-y-4">
    <button @click="isInquiryOpen = true"
      class="group relative w-full bg-[#001151] hover:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all shadow-[0_20px_40px_rgba(0,17,81,0.2)] active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden">
      <!-- 按钮扫光效果 -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <span class="relative z-10 text-lg">Send Inquiry Now</span>
      <ArrowRight class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
    </button>
    <p class="text-center text-xs text-slate-400 font-medium">Verified Supplier | Response within 24h</p>
  </div>

  <!-- 5. 标签区域：更精致的药丸标签 -->
  <div v-if="product.meta?.tags && product.meta?.tags.length > 0"
    class="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
    <span v-for="tag in product.meta?.tags" :key="tag"
      class="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-bold rounded-full hover:border-blue-300 hover:text-blue-500 transition-colors cursor-default capitalize">
      # {{ tag }}
    </span>
  </div>

</div>
      </div>



      <!-- 下方：Markdown 正文详情 -->
      <div class="max-w-4xl mx-auto mt-20">


        <div class="prose prose-slate max-w-none 
          prose-headings:text-[#001151] 
          prose-a:text-gray-900 
          prose-img:rounded-2xl">
          <!-- 🌟 使用 ContentRenderer 渲染正文 -->
          <ContentRenderer :value="product" />
        </div>
      </div>
    </div>

    <!-- 加载状态或 404 提示 -->
    <div v-else-if="!pending" class="container mx-auto px-4 py-20 text-center">
      <h2 class="text-2xl font-bold text-slate-400">Product not found.</h2>
      <NuxtLink to="/" class="text-blue-500 mt-4 inline-block underline">Back to Home</NuxtLink>
    </div>
    <!-- 放置弹窗组件 -->
    <ProductInquiryModal :is-open="isInquiryOpen" :product-name="product?.title || 'Unknown Product'"
      @close="isInquiryOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ChevronRight, CheckCircle2, Send, Receipt } from 'lucide-vue-next'
const isInquiryOpen = ref(false)
const route = useRoute()
const categoryName = route.params.category as string
const slug = route.params.slug as string

// 🌟 核心修复：使用最稳妥的 queryContent 语法
// 不要手动 import queryContent，Nuxt 会自动导入
const { data: product, pending } = await useAsyncData(`product-${route.path}`, () => {
  // 🌟 核心修改：第一个参数是集合名 'products'，然后用 .path() 过滤路径
  return queryCollection('products').path(route.path).first()
})

// seo meta
watchEffect(() => {
  if (product.value) {
    useSeoMeta({
      title: product.value.seo?.title || product.value.title,
      description: product.value.seo?.description || product.value.description,
      ogTitle: product.value.seo?.title || product.value.title,
      ogDescription: product.value.seo?.description || product.value.description,
      ogImage: product.value.seo?.image || '/default-og.jpg',
      twitterCard: 'summary_large_image',
    })
  }
})
</script>

<style>
@reference "tailwindcss";

.prose {
  @apply text-slate-600 leading-relaxed;

}

.prose a {
  @apply text-gray-900 font-semibold no-underline hover:border-blue-600 transition-all;
  border-bottom: none !important;
}

/* 标题美化：增加层次感和蓝色基调 */
.prose h1 {
  @apply text-gray-900 font-extrabold text-5xl mt-12 mb-12;


}

.prose h2 {
  @apply text-gray-900 font-extrabold text-3xl mt-12 mb-6;


}


.prose h3 {
  @apply text-[#001151] font-bold text-xl mt-8 mb-4 flex items-center gap-2;
}


/* 表格美化：这是最影响专业感的地方 */
.prose table {
  @apply w-full border-collapse border border-slate-200 rounded-xl overflow-hidden my-8 shadow-sm;
}

.prose thead th {
  @apply bg-slate-50 text-slate-900 font-bold px-4 py-4 text-left border-b border-slate-200 uppercase tracking-wider text-xs;
}

.prose tbody td {
  @apply px-4 py-4 border-b border-slate-100 text-sm;
}

.prose tbody tr:last-child td {
  @apply border-b-0;
}

.prose tbody tr:nth-child(even) {
  @apply bg-slate-50/50;
  /* 隔行换色（斑马纹） */
}

/* 引用美化：优雅的背景色和侧边条 */
.prose blockquote {
  @apply border-l-4 border-blue-500 bg-blue-50/50 px-8 py-6 rounded-r-2xl italic text-slate-700 my-10 not-italic;
}

/* 列表美化 */
/* 1. 针对所有列表的基础重置 (清理默认间距) */
.prose ul,
.prose ol {
  @apply space-y-3 my-6 pl-0;
}

/* 2. 针对无序列表 (ul) 的样式 */
.prose ul {
  @apply list-none;
}

.prose ul li {
  @apply relative pl-6;
}

.prose ul li::before {
  content: '';
  @apply absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-800;
}

/* 3. 针对有序列表 (ol) 的样式 (必须开启 list-decimal) */
.prose ol {
  @apply list-decimal pl-6;
  /* 恢复数字显示，并保留左侧间距 */
}

.prose ol li {
  @apply pl-2;
  /* 给数字和文字之间留出一点点空隙 */
}

/* 图片及其描述美化 */
.prose img {
  @apply rounded-xl border-slate-100 my-10 mx-auto;
}

.prose em {
  /* 针对图片下方的文字说明 (Caption) */
  @apply block text-center text-xs text-slate-400 mt-[-2rem] mb-10 not-italic font-medium;
}

/* 水平分割线 */
.prose hr {
  @apply my-16 border-slate-100;
}

/* 链接美化 */
.prose a {
  @apply text-gray-900 font-semibold no-underline border-b border-blue-200 hover:border-blue-600 transition-all;
}
</style>
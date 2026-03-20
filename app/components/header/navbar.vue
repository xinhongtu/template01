<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
        isScrolled
            ? 'bg-[#001151]/85 backdrop-blur-xl border-b border-white/10 shadow-lg '
            : 'bg-[#001151] py-2'
    ]">
        <!-- ... (Navbar code remains the same as previous) ... -->
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between  h-20">
                <!-- Logo Area -->
                <div class="transition-all duration-500" :class="isScrolled ? 'scale-90' : 'scale-100'">
                    <NuxtLink to="/" class="flex items-center gap-3 py-4 group">
                        <div class="flex w-10 h-10 items-center justify-center">
                            <img v-if="siteConfig?.logo?.logoUrl" :src="siteConfig?.logo?.logoUrl" alt="Company Logo"
                                class="w-full h-full object-contain">
                        </div>
                        <span class="text-2xl font-extrabold text-white tracking-tight uppercase">{{
                            siteConfig?.logo?.logoName}}</span>
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center h-full space-x-1 lg:space-x-4">
                    <div v-for="(item, index) in navItems" :key="index" class="relative group h-full flex items-center">
                        <!-- 导航项 -->
                        <NuxtLink :to="item.href"
                            class="text-white/90 hover:text-blue-400 transition-all px-4 py-2 rounded-md hover:bg-white/5 font-medium text-sm lg:text-base flex items-center gap-1">
                            {{ item.label }}
                            <ChevronDown v-if="item.hasDropdown"
                                class="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                        </NuxtLink>

                        <!-- Dropdown Menu - 核心修改点 -->
                        <div v-if="item.hasDropdown" class="absolute top-[100%] left-0 w-48 bg-white/95 backdrop-blur-sm text-slate-800 rounded-xl shadow-2xl py-2 
           opacity-0 invisible group-hover:opacity-100 group-hover:visible 
           transition-all duration-300 transform translate-y-4 group-hover:translate-y-1 
           border border-slate-100/50 z-[200]">

                            <!-- 加一个小的透明连接层，防止鼠标移走 -->
                            <div class="absolute -top-4 left-0 w-full h-4"></div>

                            <NuxtLink v-for="(subItem, subIndex) in item.subItems" :key="subIndex" :to="subItem.href"
                                class="block px-5 py-3 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-slate-50 last:border-b-0 font-medium">
                                {{ subItem.label }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Desktop CTA Button -->
                <div class="hidden md:flex items-center">
                    <NuxtLink to="/contact"
                        class="relative inline-flex items-center gap-2 px-7 py-3 rounded-md font-bold transition-colors duration-300 bg-white text-[#001151] hover:bg-slate-200/90 active:scale-[0.98]">

                        <span class="text-sm uppercase tracking-wider">Inquiry Now</span>

                        <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </NuxtLink>
                </div>
                <div class="md:hidden flex items-center">
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                        class="text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
                        aria-label="Toggle Menu">
                        <!-- 使用 lucide-vue-next 的图标，或者你原来的 UIcon -->
                        <X v-if="mobileMenuOpen" class="w-8 h-8" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <!-- Mobile Menu Toggle Button (code...) -->
                <!-- Mobile Menu Overlay -->
                <!-- 移动端菜单容器：使用 fixed 覆盖全屏，背景色与导航栏一致 -->
                <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300"
                    leave-from-class="opacity-100" leave-to-class="opacity-0">

                    <div v-if="mobileMenuOpen"
                        class="md:hidden fixed top-22 left-0 right-0 bottom-0 z-[99] bg-[#001151] backdrop-blur-xl overflow-y-auto">

                        <div class="container mx-auto px-6">
                            <div v-for="(item, index) in navItems" :key="index"
                                class="border-b border-white/10 last:border-0">
                                <div class="flex items-center justify-between py-5">
                                    <NuxtLink :to="item.href" @click="mobileMenuOpen = false"
                                        class="text-white hover:text-blue-300 font-bold text-xl transition-colors">
                                        {{ item.label }}
                                    </NuxtLink>

                                    <button v-if="item.hasDropdown" @click="toggleMobileDropdown(index)"
                                        class="p-2 text-white/50">
                                        <ChevronDown :class="{ 'rotate-180': mobileDropdowns[index] }"
                                            class="w-6 h-6 transition-transform" />
                                    </button>
                                </div>

                                <!-- 下拉列表 -->
                                <div v-if="item.hasDropdown && mobileDropdowns[index]" class="pb-6 pl-4 space-y-4">
                                    <NuxtLink v-for="(subItem, subIndex) in item.subItems" :key="subIndex"
                                        :to="subItem.href" @click="mobileMenuOpen = false"
                                        class="block text-white/70 hover:text-white font-medium text-lg border-l-2 border-white/20 pl-4 py-1">
                                        {{ subItem.label }}
                                    </NuxtLink>
                                </div>
                            </div>

                            <!-- CTA 按钮优化 -->
                            <div class="mt-10 w-full">
                                <NuxtLink to="/contact" @click="mobileMenuOpen = false"
                                    class="flex w-full items-center justify-center bg-white text-[#001151] py-4 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform">
                                    Inquiry Now
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

    </nav>
</template>

<script setup lang="ts">

import { ref, onMounted, reactive, computed, watch, onUnmounted } from 'vue'
import {
    X,  ChevronDown, ArrowRight, 
} from 'lucide-vue-next'
const isScrolled = ref(false)
let ticking = false;
const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            isScrolled.value = window.scrollY > 20
            ticking = false
        })
        ticking = true
    }
}

// --- 1. 基础状态定义 ---
// const isModalOpen = ref(false)

const mobileMenuOpen = ref(false)
const mobileDropdowns = ref<Record<number, boolean>>({})


const siteConfig = ref({
    logo:{
        logoName: '',
        logoUrl: '',
    }

})




const { data: navData } = await useProductsNav()
// 2. 确保计算属性安全读取
const navItems = computed(() => {
    // 1. 安全获取数据
    const rootNode = navData.value?.[0]
    if (!rootNode) {
        // 如果数据还没回来，返回基础菜单，防止页面空白
        return [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' }
        ]
    }

    // 2. 将 Content 树形结构映射为你的导航格式
    // 你的数据结构是: root(Products) -> children(Industrial, Electronics)
    const productMenu = {
        label: rootNode.title, // "Products"
        href: rootNode.path,   // "/products"
        hasDropdown: true,
        subItems: rootNode.children?.map(child => ({
            label: child.title, // "Industrial"
            href: child.path    // "/products/industrial"
        })) || []
    }

    // 3. 组合菜单
    return [
        { label: 'Home', href: '/' },
        productMenu,
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ]
})


// --- 3. 其他功能函数 ---
const toggleMobileDropdown = (index: number) => {
    mobileDropdowns.value[index] = !mobileDropdowns.value[index]
}


watch(mobileMenuOpen, (isOpen) => {
    if (typeof window !== 'undefined') {
        if (isOpen) {
            // 禁止 body 滚动
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.width = '100%'
        } else {
            // 恢复 body 滚动
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.width = ''
        }
    }
})


onMounted(async () => {
    try {
        const response = await fetch('/setting.json')
        if (response.ok) {
            const data = await response.json()
            siteConfig.value = { ...siteConfig.value, ...data }
           // console.log('siteConfig.value',siteConfig.value)    
        }
    } catch (e) {
        console.warn("Setting.json not found")
    }
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    // 记得销毁监听，防止内存泄漏
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes modalIn {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.animate-modal-in {
    animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-in {
    animation: slideIn 0.3s ease-out forwards;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-15px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
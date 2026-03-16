<template>
    <NuxtLoadingIndicator :duration="1000" :throttle="0" :height="5"></NuxtLoadingIndicator>
   <HeaderNavbar/>
    <div >
        <slot />
    </div>
    <!-- 页脚 -->
   
</template>

<script setup>



</script>

<style scoped>
/* 美化下拉框滚动条 */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    /* slate-200 */
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
    /* slate-300 */
}

/* 确保动画更丝滑 */
.animate-in {
    animation: modal-in 0.3s ease-out forwards;
}

@keyframes modal-in {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
</style>
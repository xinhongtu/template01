<template>
  <div>
    <HeroBlock />
    <ServiceBlock />
    <PartnerBlock />
    <ProductBlock />
  </div>
</template>

<script setup>
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
// seo meta
useSeoMeta({
  title: () => siteConfig.value?.seo?.index.title || 'Default Title',
  description: () => siteConfig.value?.seo?.index.description || 'Default description',
  ogTitle: () => siteConfig.value?.seo?.index.title || 'Default Title',
  ogDescription: () => siteConfig.value?.seo?.index.description || 'Default description',
  ogImage: () => siteConfig.value?.seo?.index.ogImage || '/default-og.jpg',
  twitterCard: () => siteConfig.value?.seo?.index.twitterCard || 'summary_large_image',
})
</script>

<style scoped>
/* styles */
</style>
// 彻底移除所有 import { ... } from '@nuxt/content'，这是构建失败的直接原因

export const useProductsNav = async () => {
  // 使用 useState 确保全局唯一且跨页面缓存
  const productsNav = useState('products-nav', () => [])

  if (productsNav.value && productsNav.value.length > 0) {
    return { data: productsNav }
  }

  // 使用全新的 queryCollection API
  // queryCollection 不需要 import，它是 Nuxt Content v3 自动注入的全局函数
  const { data } = await useAsyncData('products-navigation', async () => {
    try {
      // 1. 获取所有产品
      const allProducts = await queryCollection('products').all()
      //console.log('allProducts!!:', allProducts)
      // 2. 提取分类 (根据路径 /products/category/slug)
      const categoriesMap = new Map()
      
      allProducts.forEach(product => {
        const parts = product.path.split('/').filter(Boolean)
        // 假设路径结构是 products -> category -> slug
        if (parts.length >= 2) {
          const categorySlug = parts[1]
          if (!categoriesMap.has(categorySlug)) {
            categoriesMap.set(categorySlug, {
              title: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1),
              path: `/products/${categorySlug}`,
              children: [] // 如果需要子项，可以在这里进一步 push
            })
          }
        }
      })

      // 3. 构建根节点
      return [{
        title: 'Products',
        path: '/products',
        children: Array.from(categoriesMap.values())
      }]
    } catch (error) {
      console.error('Nav fetch error:', error)
      return []
    }
  })

  productsNav.value = data.value || []
  return { data: productsNav }
}
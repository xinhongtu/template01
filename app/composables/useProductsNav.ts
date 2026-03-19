import { useAsyncData, useState } from 'nuxt/app'
import { queryContent } from '@nuxt/content'

// 实现 queryCollectionNavigation 函数
export const queryCollectionNavigation = async (collection: string) => {
  try {
    const { data } = await useAsyncData(`${collection}-navigation`, async () => {
      // 获取所有产品页面
      const pages = await queryContent(collection).find()
      
      // 构建导航结构
      const navigation: any[] = []
      const root: any = {
        title: 'Products',
        path: '/products',
        children: []
      }
      
      // 按目录分组
      const categories = new Map()
      
      for (const page of pages) {
        // 解析路径，获取分类信息
        const parts = page._path.split('/').filter(Boolean)
        if (parts.length >= 2) {
          const category = parts[1] // 第二个部分是分类
          
          if (!categories.has(category)) {
            categories.set(category, {
              title: category.charAt(0).toUpperCase() + category.slice(1),
              path: `/${collection}/${category}`,
              children: []
            })
          }
        }
      }
      
      // 将分类添加到根节点
      root.children = Array.from(categories.values())
      navigation.push(root)
      
      return navigation
    })
    
    return data.value || []
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return []
  }
}

export const useProductsNav = async () => {
  // useState 定义一个全局唯一的 key
  const productsNav = useState('products-nav', () => [])

  // 如果已经有数据了，直接返回，不再请求
  if (productsNav.value && productsNav.value.length > 0) {
    return { data: productsNav }
  }

  // 否则，请求一次并存入 useState
  const data = await queryCollectionNavigation('products')
  
  productsNav.value = data
  return { data: productsNav }
}

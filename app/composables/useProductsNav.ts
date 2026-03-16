
export const useProductsNav = async () => {
  // useState 定义一个全局唯一的 key
  const productsNav = useState('products-nav', () => [])

  // 如果已经有数据了，直接返回，不再请求
  if (productsNav.value && productsNav.value.length > 0) {
    return { data: productsNav }
  }

  // 否则，请求一次并存入 useState
  const { data } = await useAsyncData('products-nav', () => 
    queryCollectionNavigation('products')
  )

  productsNav.value = data.value || []
 // console.log('productsNav.value', productsNav.value)
  return { data: productsNav }
}
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:suspense:resolve', () => {
      AOS.init({
        duration: 1000, // 动画持续时间
        easing: 'ease-in-out', // 丝滑曲线
        once: true, // 只执行一次（向上滚动不重复执行）
      })
    })
  }
})
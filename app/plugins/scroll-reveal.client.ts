import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  const isServer = process.server

  // 1. 定义 Reveal 指令
  nuxtApp.vueApp.directive('scroll-reveal', {
    // 关键：增加这个函数，让 SSR 渲染器不再报错
    getSSRProps() {
      return {}
    },
    // 只在客户端执行逻辑
    mounted(el, binding) {
      if (isServer) return
      
      gsap.registerPlugin(ScrollTrigger)
      const opt = binding.value || {}
      gsap.set(el, { y: opt.y ?? 40, opacity: 0, scale: opt.scale ?? 0.98, visibility: 'hidden' })
      
      gsap.to(el, {
        y: 0, opacity: 1, scale: 1, duration: 1, delay: opt.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
          onEnter: () => el.style.visibility = 'visible'
        }
      })
    }
  })

  // 2. 定义 Group 指令
  nuxtApp.vueApp.directive('scroll-group', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (isServer) return
      
      gsap.registerPlugin(ScrollTrigger)
      const opt = binding.value || {}
      const rawTargets = opt.selector ? el.querySelectorAll(opt.selector) : el.children;
      const targets = Array.from(rawTargets) as HTMLElement[];
      
      if (targets.length === 0) return

      gsap.set(targets, { 
        y: opt.y ?? 40, 
        opacity: 0, 
        scale: opt.scale ?? 0.98, 
        visibility: 'hidden' 
      })

      gsap.to(targets, {
        y: 0, opacity: 1, scale: 1, duration: 1,
        stagger: opt.stagger ?? 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            targets.forEach((t) => t.style.visibility = 'visible')
          }
        }
      })
      setTimeout(() => ScrollTrigger.refresh(), 200)
    },
    unmounted(el) {
      if (isServer) return
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === el) t.kill()
      })
    }
  })

  // 3. 定义数字滚动指令
nuxtApp.vueApp.directive('count', {
  getSSRProps() { return {} },
  mounted(el: HTMLElement, binding) {
    if (process.server) return

    gsap.registerPlugin(ScrollTrigger)
    
    // 获取目标数字 (支持带单位，如 "$6.5M" 或 "25+")
    const rawValue = binding.value || el.innerText
    const match = rawValue.match(/(\d+\.?\d*)/)
    const targetNumber = match ? parseFloat(match[0]) : 0
    const prefix = rawValue.split(match ? match[0] : '')[0] || ''
    const suffix = match ? rawValue.substring(match[0].length) : ''

    // 初始化为 0
    const obj = { val: 0 }

    gsap.to(obj, {
      val: targetNumber,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true // 只执行一次
      },
      onUpdate: () => {
        // 格式化数字：如果有小数点则保留一位，否则取整
        const displayValue = targetNumber % 1 !== 0 ? obj.val.toFixed(1) : Math.floor(obj.val)
        el.innerText = `${prefix}${displayValue}${suffix}`
      }
    })
  }
})
})

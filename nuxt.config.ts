// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // public 里的内容可以在前端（浏览器）访问
    public: {
      web3FormsKey: process.env.WEB3FORMS_KEY
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'lucide-vue-next',
      ]
    }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  future: {
    compatibilityVersion: 4,
  },
  // 修正 CSS 路径
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    // 只有在服务端可以访问
    emailUser: process.env.NUXT_EMAIL_USER,
    emailPass: process.env.NUXT_EMAIL_PASS,
  },
  vue: {
    compilerOptions: {
      // 告诉 Vue 忽略这些自定义指令，不要报错
      isCustomElement: (tag) => ['count', 'scroll-reveal', 'scroll-group'].includes(tag)
    }
  },


  // 预渲染所有页面
  routeRules: {
    '/': { prerender: true },
    '/products/**/**': { prerender: true },
  },

  nitro: {
    preset: 'static'
  },


})

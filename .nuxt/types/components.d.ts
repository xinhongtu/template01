
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  Alert: typeof import("../../app/components/Alert.vue")['default']
  Counter: typeof import("../../app/components/Counter.vue")['default']
  TheToast: typeof import("../../app/components/TheToast.vue")['default']
  FooterBlock: typeof import("../../app/components/footer/block.vue")['default']
  HeaderNavbar: typeof import("../../app/components/header/navbar.vue")['default']
  HeroBlock: typeof import("../../app/components/hero/block.vue")['default']
  PartnerBlock: typeof import("../../app/components/partner/block.vue")['default']
  ProductInquiryModal: typeof import("../../app/components/product/InquiryModal.vue")['default']
  ProductBlock: typeof import("../../app/components/product/block.vue")['default']
  ProductCard: typeof import("../../app/components/product/card.vue")['default']
  ProductGallery: typeof import("../../app/components/product/gallery.vue")['default']
  ServiceBlock: typeof import("../../app/components/service/block.vue")['default']
  ProseA: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
  ProseBlockquote: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
  ProseCode: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
  ProseEm: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
  ProseH1: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
  ProseH2: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
  ProseH3: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
  ProseH4: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
  ProseH5: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
  ProseH6: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
  ProseHr: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
  ProseImg: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
  ProseLi: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
  ProseOl: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
  ProseP: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
  ProsePre: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
  ProseScript: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
  ProseStrong: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
  ProseTable: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
  ProseTbody: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
  ProseTd: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
  ProseTh: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
  ProseThead: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
  ProseTr: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
  ProseUl: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  ContentRenderer: typeof import("../../node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
  NuxtPage: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Body']
  MDC: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
  MDCCached: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
  MDCRenderer: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
  MDCSlot: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
  NuxtIsland: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAlert: LazyComponent<typeof import("../../app/components/Alert.vue")['default']>
  LazyCounter: LazyComponent<typeof import("../../app/components/Counter.vue")['default']>
  LazyTheToast: LazyComponent<typeof import("../../app/components/TheToast.vue")['default']>
  LazyFooterBlock: LazyComponent<typeof import("../../app/components/footer/block.vue")['default']>
  LazyHeaderNavbar: LazyComponent<typeof import("../../app/components/header/navbar.vue")['default']>
  LazyHeroBlock: LazyComponent<typeof import("../../app/components/hero/block.vue")['default']>
  LazyPartnerBlock: LazyComponent<typeof import("../../app/components/partner/block.vue")['default']>
  LazyProductInquiryModal: LazyComponent<typeof import("../../app/components/product/InquiryModal.vue")['default']>
  LazyProductBlock: LazyComponent<typeof import("../../app/components/product/block.vue")['default']>
  LazyProductCard: LazyComponent<typeof import("../../app/components/product/card.vue")['default']>
  LazyProductGallery: LazyComponent<typeof import("../../app/components/product/gallery.vue")['default']>
  LazyServiceBlock: LazyComponent<typeof import("../../app/components/service/block.vue")['default']>
  LazyProseA: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
  LazyProseBlockquote: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
  LazyProseCode: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
  LazyProseEm: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
  LazyProseH1: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
  LazyProseH2: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
  LazyProseH3: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
  LazyProseH4: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
  LazyProseH5: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
  LazyProseH6: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
  LazyProseHr: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
  LazyProseImg: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
  LazyProseLi: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
  LazyProseOl: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
  LazyProseP: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
  LazyProsePre: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
  LazyProseScript: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
  LazyProseStrong: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
  LazyProseTable: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
  LazyProseTbody: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
  LazyProseTd: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
  LazyProseTh: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
  LazyProseThead: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
  LazyProseTr: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
  LazyProseUl: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyContentRenderer: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyMDC: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
  LazyMDCCached: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
  LazyMDCRenderer: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
  LazyMDCSlot: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@vue+compiler-sfc@3.5.30_better-sqlite3@12.8.0_cac@6._88d0c5eb87026a6cb0cf0c692e5003ae/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}

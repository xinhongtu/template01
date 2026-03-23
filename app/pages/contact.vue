<template>
    <div class="contact-page pt-24 pb-16 bg-slate-50">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h1 class="text-4xl font-extrabold text-slate-900 mb-6">Let’s Start A Conversation</h1>
                <p class="text-lg text-slate-600">Have questions about our products or need a custom quote? Our
                    professional team is ready to assist you 24/7.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- 左侧：联系信息 -->
                <div class="lg:col-span-5 space-y-8">
                    <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <h3 class="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div
                                    class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <Mail class="w-6 h-6" />
                                </div>
                                <div>
                                    <p class="text-sm text-slate-400 font-semibold uppercase">Email Us</p>
                                    <a :href="`mailto:${siteConfig.contact?.email}`"
                                        class="text-slate-900 font-medium hover:text-blue-600">{{
                                            siteConfig.contact?.email || 'sales@company.com' }}</a>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div
                                    class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <Phone class="w-6 h-6" />
                                </div>
                                <div>
                                    <p class="text-sm text-slate-400 font-semibold uppercase">Call Us</p>
                                    <a :href="`tel:${siteConfig.contact?.phone}`"
                                        class="text-slate-900 font-medium hover:text-blue-600">{{
                                            siteConfig.contact?.phone || '+86 136 5661 7631' }}</a>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div
                                    class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <MapPin class="w-6 h-6" />
                                </div>
                                <div>
                                    <p class="text-sm text-slate-400 font-semibold uppercase">Office Address</p>
                                    <p class="text-slate-900 font-medium">{{ siteConfig.contact?.address || 'Building A,Industrial Park' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右侧：询盘表单 -->
                <div class="lg:col-span-7">
                    <div class="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                        <!-- 这里使用 vee-validate 的 handleSubmit -->
                        <form @submit="onSubmit" class="space-y-6" novalidate>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input v-model="name" v-bind="nameAttrs" type="text"
                                        :class="errors.name ? 'border-red-500' : 'border-slate-200'"
                                        class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="John Doe">
                                    <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input v-model="email" v-bind="emailAttrs" type="email"
                                        :class="errors.email ? 'border-red-500' : 'border-slate-200'"
                                        class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="john@example.com">
                                    <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <input v-model="subject" v-bind="subjectAttrs" type="text"
                                    :class="errors.subject ? 'border-red-500' : 'border-slate-200'"
                                    class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Regarding product...">
                                <p v-if="errors.subject" class="text-red-500 text-xs mt-1">{{ errors.subject }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea v-model="message" v-bind="messageAttrs" rows="5"
                                    :class="errors.message ? 'border-red-500' : 'border-slate-200'"
                                    class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Tell us about your project..."></textarea>
                                <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
                            </div>

                            <button type="submit" :disabled="isSubmitting"
                                class="w-full bg-[#001151] cursor-pointer hover:bg-bg-[#001151]/50 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                <!-- 加载状态 -->
                                <template v-if="isSubmitting">
                                    <Loader2 class="w-4 h-4 animate-spin" />
                                    <span>Sending...</span>
                                </template>

                                <!-- 正常状态 -->
                                <template v-else>
                                    <span>Send Inquiry Now</span>
                                    <Send class="w-4 h-4 transition-transform" />
                                </template>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-vue-next'
import { useForm } from 'vee-validate';
import { contactSchema } from '~/utils/validation';
const config = useRuntimeConfig()

// 获取这个 key
const accessKey = config.public.web3FormsKey
const toast = useToast();
const siteConfig = ref<any>({ contact: {} })

// 1. 使用 vee-validate 管理状态
const { defineField, handleSubmit, errors, isSubmitting, resetForm } = useForm({
    validationSchema: contactSchema,
     initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
    },
});

const [name, nameAttrs] = defineField('name',{validateOnModelUpdate: false});
const [email, emailAttrs] = defineField('email',{validateOnModelUpdate: false});
const [subject, subjectAttrs] = defineField('subject',{validateOnModelUpdate: false});
const [message, messageAttrs] = defineField('message',{validateOnModelUpdate: false});

// 2. 封装发送逻辑
const onSubmit = handleSubmit(async (values) => {
    

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ access_key: accessKey, ...values })
        });

        const data = await response.json();
        if (data.success) {
            toast.success('Inquiry sent successfully!');
            resetForm();
        } else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error(error.message || 'Failed to send');
    }
});

onMounted(async () => {
    try {
        const response = await fetch('/setting.json')
        if (response.ok) siteConfig.value = await response.json()
    } catch (e) { console.warn("Setting.json not found") }
})



// seo meta
useSeoMeta({
  title: () => siteConfig.value?.seo?.contact.title || 'Default Title',
  description: () => siteConfig.value?.seo?.contact.description || 'Default description',
  ogTitle: () => siteConfig.value?.seo?.contact.title || 'Default Title',
  ogDescription: () => siteConfig.value?.seo?.contact.description || 'Default description',
  ogImage: () => siteConfig.value?.seo?.contact.ogImage || '/default-og.jpg',
  twitterCard: () => siteConfig.value?.seo?.contact.twitterCard || 'summary_large_image',
})
</script>
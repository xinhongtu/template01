<template>
    <Teleport to="body">
        <!-- 弹窗遮罩层 -->
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="handleClose"></div>

            <!-- 弹窗主体 -->
            <div
                class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 overflow-hidden animate-in fade-in zoom-in duration-200">
                <h2 class="text-2xl font-bold text-[#001151] mb-2">Send Inquiry</h2>
                <p class="text-slate-500 mb-6 text-sm">Regarding: <span class="font-bold text-slate-800">{{ productName
                        }}</span></p>

                <form @submit="onSubmit" class="space-y-4" novalidate>
                    <!-- Name -->
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                        <input v-model="name" v-bind="nameAttrs" type="text"
                            :class="errors.name ? 'border-red-500' : 'border-slate-200'"
                            class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="John Doe">
                        <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                        <input v-model="email" v-bind="emailAttrs" type="email"
                            :class="errors.email ? 'border-red-500' : 'border-slate-200'"
                            class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="john@example.com">
                        <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                    </div>

                    <!-- Message -->
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                        <textarea v-model="message" v-bind="messageAttrs" rows="3"
                            :class="errors.message ? 'border-red-500' : 'border-slate-200'"
                            class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="How can we help you?"></textarea>
                        <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
                    </div>

                    <!-- 提交按钮 -->
                    <button type="submit" :disabled="isSubmitting"
                        class="w-full bg-[#001151] hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2">
                        <template v-if="isSubmitting">
                            <Loader2 class="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                        </template>
                        <template v-else>
                            <span>Send Inquiry Now</span>
                        </template>
                    </button>
                </form>

                <!-- 关闭按钮 -->
                <button @click="handleClose" class="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2">
                    ✕
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { contactSchema } from '~/utils/validation';
import { Loader2 } from 'lucide-vue-next';
const config = useRuntimeConfig()

// 获取这个 key
const accessKey = config.public.web3FormsKey
const props = defineProps<{ isOpen: boolean; productName: string }>()
const emit = defineEmits(['close'])
const toast = useToast()
const siteConfig = ref<any>({ contact: {} })
const { defineField, handleSubmit, errors, isSubmitting, resetForm } = useForm({
    validationSchema: contactSchema,
    initialValues: { name: '', email: '', message: '', subject: 'Pending...' }
});

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [message, messageAttrs] = defineField('message');

// 统一关闭逻辑：重置表单并通知父组件
const handleClose = () => {
    resetForm();
    emit('close');
};

const onSubmit = handleSubmit(
    // 1. 成功回调：校验通过执行此段
    async (values) => {
        console.log('提交触发，配置项:', siteConfig.value);

        

        if (!accessKey) {
            toast.error('Configuration not loaded yet, please try again.');
            return;
        }
        const payload = {
            ...values, // 这里包含了原来的 { name, email, message, subject: 'Pending...' }
            access_key: accessKey,
            subject: `Inquiry for ${props.productName}` // 这样它会覆盖掉 values 里的 'Pending...'
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            if (data.success) {
                toast.success('Inquiry sent successfully!');
                handleClose();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error: any) {

            toast.error(error.message || 'Failed to send inquiry');
        }
    },
    // 2. 失败回调：校验未通过执行此段
    (errors) => {
        console.log('校验失败:', errors);
        toast.error('Please check your input fields.');
    }
);
onMounted(async () => {
    try {
        const response = await fetch('/setting.json')
        if (response.ok) siteConfig.value = await response.json()
    } catch (e) { console.warn("Setting.json not found") }
})
</script>
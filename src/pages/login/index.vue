<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores'

import logo from '~/images/logo.svg'
import logoDark from '~/images/logo-dark.svg'
import vw from '@/utils/inline-px-to-vw'
import { resolveMainRedirectPath, toMainPage } from '@/utils/page-navigation'

const { t } = useI18n()
const route = useRoute()
const userStore = useUserStore()
const loading = ref(false)

const dark = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    dark.value = newMode
  },
)

const postData = reactive({
  email: '',
  password: '',
})

const rules = reactive({
  email: [
    { required: true, message: t('login.pleaseEnterEmail') },
  ],
  password: [
    { required: true, message: t('login.pleaseEnterPassword') },
  ],
})

async function login(values: any) {
  try {
    loading.value = true
    await userStore.login({ ...postData, ...values })
    const { redirect, ...othersQuery } = route.query
    const query = Object.fromEntries(
      Object.entries(othersQuery)
        .map(([key, value]) => {
          if (Array.isArray(value))
            return [key, value[0]]

          return [key, value]
        })
        .filter(([, value]) => value !== null && value !== undefined),
    )

    toMainPage(resolveMainRedirectPath(redirect as string | null | undefined), {
      ...query,
    })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="mx-auto p-3 text-center w-full">
    <div class="mb-8 mt-2">
      <van-image :src="dark ? logoDark : logo" class="h-30 w-30" alt="brand logo" />
    </div>

    <van-form :model="postData" :rules="rules" validate-trigger="onSubmit" @submit="login">
      <div class="rounded-md overflow-hidden">
        <van-field
          v-model="postData.email"
          :rules="rules.email"
          name="email"
          :placeholder="$t('login.email')"
        />
      </div>

      <div class="mt-4 rounded-md overflow-hidden">
        <van-field
          v-model="postData.password"
          type="password"
          :rules="rules.password"
          name="password"
          :placeholder="$t('login.password')"
        />
      </div>

      <div class="mt-4">
        <van-button
          :loading="loading"
          type="primary"
          native-type="submit"
          round block
        >
          {{ $t('login.login') }}
        </van-button>
      </div>
    </van-form>

    <GhostButton block to="register" :style="{ 'margin-top': vw(18) }">
      {{ $t('login.signUp') }}
    </GhostButton>

    <GhostButton block to="forgot-password" class="mt-2">
      {{ $t('login.forgotPassword') }}
    </GhostButton>
  </div>
</template>

<route lang="json5">
{
  name: 'Login'
}
</route>

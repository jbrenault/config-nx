<template>
  <div class="home-wrap">
    <div class="home-title">
      {{ $t('title') }}
    </div>
    <div class="home-name">
      {{ $t('name') }}
    </div>
    <AppLogo />
    <div v-html="$t('generated')" />
    <transition name="hide">
      <Cookies v-if="!cookiesAccepted" />
    </transition>
    <div v-show='isVisible'>
      <Notification type='success' message='notification displayed' @clear-notification='clearNotification'></Notification>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@app/store';
import { ref } from 'vue';

const { cookiesAccepted } = useStore();
const isVisible = ref(true);

const clearNotification = () => {
  isVisible.value = false;
}
</script>

<style lang="postcss">
@import '@assets/css/global.css';

.home-wrap {
  background-color: white;
  @mixin text 16px;
  @mixin flex-center-col;
  height: 100%;
  color: $text-main;

  .home-title {
    @mixin title 40px;
  }
  .home-name {
    @mixin text 24px;
    font-weight: bold;
  }
  img {
    margin: 16px 0;
  }
}

.hide-enter-active,
.hide-leave-active {
  transition: opacity 0.3s linear;
}
.hide-enter-from,
.hide-leave-to {
  opacity: 0;
}
</style>

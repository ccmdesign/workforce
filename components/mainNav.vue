<template>
  <top-nav class="main-nav" :menu-data="menuData" :neg="neg">
    <template #logo>
      <img v-if="neg" src="images/logo-white.svg" alt="">
      <img v-else src="images/logo.svg" alt="">
    </template>
  </top-nav>
</template>

<script setup>

import { toRefs } from 'vue'

const props = defineProps({
  neg: {
    type: Boolean,
    default: false
  },
});

const { logoNeg } = toRefs(props)

const menuData = [
  {
    label: 'Resources',
    url: '/#resources'
  },
  {
    label: 'Playbook',
    url: '/playbook'
  },
  {
    label: 'Map',
    url: '/map'
  },
]
</script>

<style lang="scss" scoped>
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  --top-nav-padding-inline: var(--s2);
  --top-nav-padding-block: var(--s2);
}

.main-nav[neg='false'] {
  --top-nav-color: var(--primary-color);
}

</style>

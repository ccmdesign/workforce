<template>
  <header class="main-nav" :neg="neg">
    <a class="logo" href="/"><img src="/images/logo-white.svg" alt="Project on Workforce Logo"></a>

    <nav>
      <li><a href="/">Intro</a></li>
      <li><a href="#resources">Resources</a></li>
      <li><a href="#playbook">Playbook</a></li>
      <li><a href="#map">Map</a></li>
    </nav>

      
  </header>
</template>

<script setup>

import { toRefs } from 'vue'

const props = defineProps({
  neg: {
    type: Boolean,
    default: true
  },
});

const { neg } = toRefs(props)

const menuData = [
  {
    label: 'Intro',
    url: '/'
  },
  {
    label: 'Resources',
    url: '#resources'
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
  padding: var(--s2);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo {
  @media (max-width: 32em) {
    margin-inline: auto;
  }
}

nav {
  display: flex;

  @media (max-width: 32em) {
    margin-top: var(--s0);
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
}


li a {
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white-color);
  letter-spacing: .4px;
  text-decoration: none;
}

a:hover {
  color: var(--primary-color);
  text-decoration: none;
}

</style>

<template>
  <header class="main-nav" :neg="neg">
    <nav>
      <li><a href="/" @click="openResource('intro-1')">Intro</a></li>
      <li><a href="#resources" @click="openResource('resources')">Resources</a></li>
      <li><a href="#playbook" @click="openResource('playbook')">Playbook</a></li>
      <li><a href="#map" @click="openResource('map')">Map</a></li>
    </nav>

      
  </header>
</template>

<script setup>
import { toRefs } from 'vue'

const stateActiveSlide = useActiveSlide()

const openResource = (rsc) => {
  stateActiveSlide.value = rsc
}


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
  justify-content: center;
  flex-wrap: wrap;
}

nav {
  display: flex;
  gap: var(--s1);

  @media (max-width: 40em) {
    gap: var(--s0);
    align-items: center;
  }
}

li { list-style: none; }

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

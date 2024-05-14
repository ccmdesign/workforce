<template>
  <header class="main-nav" :neg="neg">
    <nav class="main-nav__nav" :class="{'resources': stateActiveSlide == 'resources', 'playbook': stateActiveSlide == 'playbook', 'map': stateActiveSlide == 'map', 'briefs': stateActiveSlide == 'briefs'}">
      <li><a href="#" @click.prevent="openResource('intro-1',0)">Intro</a></li>
      <li><a href="#" @click.prevent="openResource('resources',4)">Resources</a></li>
      <li><a href="#" @click.prevent="openResource('playbook',5)">Playbook</a></li>
      <li><a href="#" @click.prevent="openResource('map',6)">Map</a></li>
      <li><a href="#" @click.prevent="openResource('briefs',7)">Briefs</a></li>
    </nav>
      
  </header>
</template>

<script setup>
import { toRefs } from 'vue'

const stateActiveSlide = useActiveSlide()

const openResource = (rsc, step) => {
  stateActiveSlide.value = rsc;
  const slideContainer = document.querySelector('.slides');
  const width = window.innerWidth;
  slideContainer.scrollTo({
    left: (width * step),
    behavior: 'smooth'
  });
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
  {
    label: 'Briefs',
    url: '/briefs'
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
  position: relative;

  @media (max-width: 40em) {
    gap: var(--s-1);
    align-items: center;
  }

  &::before {
    content: '';
    background-color: var(--primary-color);
    height: 3px;
    width: 55px;
    position: absolute;
    bottom: -3px;
    left: 0px;
    transition: all 0.2s ease-out;
    @media (max-width: 40em) {
      width: 41px;
      left: 0px;
    }
  }
}

nav.resources {
  &::before {
    width: 106px;
    left: 81px;
  }
  @media (max-width: 40em) {
    &::before {
      width: 81px;
      left: 52px;
    }
  }
}

nav.playbook {
  &::before {
    width: 97px;
    left: 213px;
  }
  @media (max-width: 40em) {
    &::before {
      width: 74px;
      left: 141px;
    }
  }
}

nav.map {
  &::before {
    width: 40px;
    left: 336px;
  }
  @media (max-width: 40em) {
    &::before {
      width: 31px;
      left: 225px;
    }
  }
}
nav.briefs {
  &::before {
    width: 64px;
    left: 402px;
  }
  @media (max-width: 40em) {
    &::before {
      width: 49px;
      left: 265px;
    }
  }
}

li { list-style: none; }

li a {
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white-color);
  letter-spacing: .4px;
  text-decoration: none;
  width: auto;
  display: inline-block;
  text-align: center;
}

a:hover {
  color: var(--primary-color);
  text-decoration: none;
}

</style>

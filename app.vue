<template>
  <NuxtLayout />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 2s;
}
/* .page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */

.page-enter-active .intro-section__content {
  transition: all .25s ease-in;
}
.page-leave-active .intro-section__content {
  transition: all .5s ease-out;
}

.intro-section__content {
  transform: translateX(0);
  opacity: 1;
}

.page-enter-from .intro-section__content {
  transform: translateX(20vw);
  opacity: 0;
}

.page-leave-to .intro-section__content {
  transform: translateX(-75vw);
  opacity: 0;
}



.page-enter-active .grid-section,
.page-leave-active .grid-section {
  transition: all .35s ease-out;
}

.grid-section {
  opacity: 1;
}

.page-enter-from .grid-section,
.page-leave-to .grid-section {
  opacity: 0;
}
</style>

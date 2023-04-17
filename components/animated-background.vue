<template>
  <div class="background-container" :bg="bg">
    <div class="bg bg-1"></div>
    <div class="bg bg-2"></div>
    <div class="bg bg-3"></div>
    <div class="bg bg-4"></div>
    <div class="bg bg-5"></div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  bg: {
    type: Number,
    default: ''
  },
});

const { bg } = toRefs(props)

</script>

<style lang="scss" scoped>
.background-container {
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  transition: opacity 1s;
  transform-origin: left;
  // animation-name: scale;
  // animation-duration: 40s;
  // animation-timing-function: linear;
  // animation-direction: alternate;
  // animation-iteration-count: infinite;
}

.bg-1 { background-image: url('/images/intro-1.jpg'); }
.bg-2 { background-image: url('/images/intro-2.jpg'); }
.bg-3 { background-image: url('/images/intro-3.jpg'); }
.bg-4 { background-image: url('/images/playbook.png'); 
  left: calc(100% - (100vw * 1.1));
}
.bg-5 { background-image: url('/images/map.jpg'); }

.background-container[bg='1'] {
  .bg-1 { opacity: 1; }
  .bg-2 { opacity: 0; }
  .bg-3 { opacity: 0; }
  .bg-4 { opacity: 0; }
  .bg-5 { opacity: 0; }
}
.background-container[bg='2'] {
  .bg-1 { opacity: 0; }
  .bg-2 { opacity: 1; }
  .bg-3 { opacity: 0; }
  .bg-4 { opacity: 0; }
  .bg-5 { opacity: 0; }
}
.background-container[bg='3'] {
  .bg-1 { opacity: 0; }
  .bg-2 { opacity: 0; }
  .bg-3 { opacity: 1; }
  .bg-4 { opacity: 0; }
  .bg-5 { opacity: 0; }
}

.background-container[bg='4'] {
  .bg-1 { opacity: 0; }
  .bg-2 { opacity: 0; }
  .bg-3 { opacity: 0; }
  .bg-4 { opacity: 1; }
  .bg-5 { opacity: 0; }
}

.background-container[bg='5'] {
  .bg-1 { opacity: 0; }
  .bg-2 { opacity: 0; }
  .bg-3 { opacity: 0; }
  .bg-4 { opacity: 0; }
  .bg-5 { opacity: 1; }
}

@keyframes scale {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}

</style>

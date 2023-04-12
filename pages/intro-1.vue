<template>
  
    <section class="grid-section intro-1">
      <transition>
        <div class="intro-section__content">
          <stack-l>
            <h3 class="color:secondary">It’s time to bridge the gap between college and good-paying jobs.</h3>
            <p>For decades, a college degree has been considered the key to unlock economic prosperity in the United States. However, the college earnings premium appears to be declining for the first time in decades, and college graduates are increasingly underemployed. As education costs continue to skyrocket and student debt mounts, Americans are reconsidering whether college is worth the expense.</p>
          </stack-l>
          <nuxtLink class="prev-link icon" to="/">arrow_back</nuxtLink>
          <nuxtLink class="next-link icon" to="intro-2">arrow_forward</nuxtLink>
        </div>
      </transition>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.grid-section { background-image: url('/images/intro-1.jpg'); }
</style>

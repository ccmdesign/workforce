<template>
  <article>
    <main-nav class="main-nav" :neg=true />
    <main class="main">
      <NuxtPage />
    </main>
    <footer>
      <span>Project on Workforce</span>
      <small><a href="https://ccmdesign.ca" target="_blank">by ccm.design</a></small>
    </footer>
  </article>
</template>
<style lang="scss" scoped>
article {
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
  'header'
  'main'
  'footer';
}

.main-nav {
  grid-area: header;
  // background-color: red;
}

.main { 
  position: relative; 
  grid-area: main;
  // background-color: blue;
}

footer {
  grid-area: footer;
  // background-color: yellow;
  flex: 0;
  width: 100vw;
  padding: var(--s0) var(--s2);
  background-color: var(--tertiary-color);
  color: var(--white-color);
  font-weight: 400;
  font-size: .85rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  a { 
    opacity: .4;
    color: var(--white-color);
  }
}


</style>

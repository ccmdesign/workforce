<template>
  <article class="page">
    <main-nav />
    <center-l size="wide">
      <header class="text-align:center padding-block:s3">
        <a class="breadcrumb" href="/#resources">Resources</a>
        <h2 class="color:secondary">College-to-Jobs Map</h2>
      </header>
      <div class="panels">
        <div class="panel image">
          <img src="" alt="">
        </div>

        <div class="panel content">
          <stack-l>
            <p><strong>The College-to-Jobs Map visualizes how local worker trends align with college graduate growth in regions around the country.</strong> The tool allows users to dive into regional labor market changes and discover college graduate and workforce information. The map draws the connection between colleges, economic mobility, and regional economic development–presenting the graduate supply and labor demand challenges to building a prosperous and inclusive workforce.</p>
            <p><base-button visual="primary" color="primary" el="a" href="https://collegetojobs.hks.harvard.edu/" target="_blank">Explore the Tool</base-button></p>
          </stack-l>
        </div>
      </div>
    </center-l>
  </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page {
  padding-top: var(--s3);
  h2 {
    color: var(--secondary-color);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .breadcrumb {
    color: hsla(var(--black-hsl), 1);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    opacity: .4;
    text-decoration: none;
  }
}

.panels {
  display: flex;
  flex-wrap: wrap;
}

.panel { flex: 1 1 350px; }
.content { flex-grow: 2;}
</style>

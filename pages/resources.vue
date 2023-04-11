<template>
    <section class="grid-section resources" id="resources">
      <div class="resources-content">
        <div class="heading">
          <h2 class="color:secondary">Resources</h2>
        </div>

        <div class="panel">
          <stack-l>
            <h3>College-to-Jobs Playbook</h3>
            <p><strong>The <span>College-to-Jobs Playbook</span> examines programs and policies that connect college students to high-paying careers.</strong> It evaluates the research, implementation, and feasibility of college-to-jobs initiatives to answer a crucial question: what can educators, employers, policymakers, and other stakeholders do to launch college students onto successful career trajectories?</p>
            <p><base-button visual="primary" color="primary" el="a" href="/playbook">More Information</base-button></p>
          </stack-l>
        </div>
        <div class="panel">
          <stack-l>
            <h3>College-to-Jobs Map</h3>
            <p><strong>The <span>College-to-Jobs Map</span> is a data tool that visualizes how local employment trends align with college graduate growth in regions around the country.</strong> Users can dive into regional labor market changes and find information about college graduate and workforce demographics. The Map highlights the connection between college, economic mobility, and regional economic development across the country.</p>
            <p><base-button visual="primary" color="primary" el="a" href="/map">More Information</base-button></p>
          </stack-l>
        </div>
      </div>
    </section> 
</template>

<script setup>
</script>

<style lang="scss" scoped>

.resources { 
  background-image: url('/images/intro-3.jpg'); 
}

.resources {
  h2 {
    color: var(--secondary-color);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    display: inline-block;
  }
}

.resources-content {
  grid-area: right;
  align-self: center;
  max-width: 75%;
}

.panel {
  margin-top: var(--s1);
  padding: var(--s2);
  background-color: hsla(var(--white-hsl), .85);
}

</style>

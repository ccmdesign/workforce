<template>
  <article>
    <main-nav neg="true" />

    <base-section class="intro-section intro-1" id="start">
      <div class="intro-section__content">
        <h2>The College-to-Jobs <strong>Initiative</strong></h2>
        <p class="tagline">A review of programs and policies that connect college students to high-paying careers</p>
      </div>
      
    </base-section>
    <base-section class="intro-section intro-1">
      <div class="intro-section__content">
        <stack-l>
          <h3 class="color:secondary">It’s time to bridge the gap between college and good-paying jobs.</h3>
          <p>For decades, a college degree has been considered the key to unlock economic prosperity in the United States. However, the college earnings premium appears to be declining for the first time in decades, and college graduates are increasingly underemployed. As education costs continue to skyrocket and student debt mounts, Americans are reconsidering whether college is worth the expense.</p>
        </stack-l>
      </div>
    </base-section>
    <base-section class="intro-section intro-2">
      <div class="intro-section__content">
        <stack-l>
          <h3 class="color:primary">Higher education is at an inflection point.</h3>
          <p>Colleges are being called upon to evaluate—and improve—the economic outcomes of their students, particularly Black, Latinx, and Indigenous students who have been underserved by the higher education system. Higher education institutions must address a key question–are they connecting students to good jobs?</p>
        </stack-l>
      </div>
    </base-section>
    <base-section class="intro-section intro-3">
      <div class="intro-section__content">
        <stack-l>
          <h3 class="color:secondary">The College-to-Jobs Initiative examines the disconnect between college and good jobs</h3>
          <p>With a focus on public two-year colleges, four-year colleges, Historically Black Universities and Colleges, and other Minority Serving Institutions, it explores what we know – and don’t know – about student transitions to the workforce.</p>
        </stack-l>
      </div>
    </base-section>
    <base-section class="resources" id="resources">
      <center-l size="wide">
        <header class="text-align:center padding-block:s3">
          <a class="intro-link" href="#start">Intro</a>
          <h2 class="color:secondary">Resources</h2>
        </header>
        <div class="panels">
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
      </center-l>
    </base-section> 
    <footer>
      <span>Project on Workforce</span>
      <small><a href="https://ccmdesign.ca" target="_blank">by ccm.design</a></small>
    </footer>
  </article>
</template>

<script setup>
</script>

<style scoped lang="scss">





/* Structure */
.intro-section {
  height: 90vh;
  max-height: 800px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-areas: "a right a";  

  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";  
  }
}

.intro-section__content {
  grid-area: right;
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


/* Visuals */

.intro-section {
  background-size: cover;
  background-position: center center;
  border-bottom: 24px solid var(--primary-color);
  
  /* h1, h2, h3, h4, h5, p, strong { color: var(--white-color); } */
}

.intro-section__content {
  position: relative;
  align-self: center;
  background-color: var(--white-color);
  padding: var(--s2);
}

.intro-section__content:before,
.intro-section__content:after {
  content: '';
  position: absolute;
  bottom: 0;
  border-bottom: 2px dashed hsla(var(--white-hsl), .5);
  width: 2000px;
}

.intro-section__content:before { 
  left: -2000px; 
  right: 0;
}
.intro-section__content:after { 
  right: -2000px; 
  left: 0;
}

.intro-section:first-of-type { padding-top: var(--s3); }

.intro-1 strong { font-weight: 800; }

.intro-1 { background-image: url('/images/intro-1.jpg'); }
.intro-2 { background-image: url('/images/intro-2.jpg'); }
.intro-3 { background-image: url('/images/intro-3.jpg'); }

.resources {
  h2 {
    color: var(--secondary-color);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .intro-link {
    color: hsla(var(--black-hsl), 1);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    opacity: .4;
  }
}

.panels { 
  display: flex; 
  flex-wrap: wrap;
}
.panel {
  flex: 1 1 350px;
  padding: var(--s2);

  h3 { color: var(--primary-color);}
}

.panel:first-of-type {
  @media (min-width: 900px) {
    text-align:right;
    border-right: 1px solid var(--primary-color);
  }
}

footer {
  padding: var(--s0) var(--s2);
  background-color: var(--tertiary-color);
  color: var(--white-color);
  font-weight: 400;
  font-size: .85rem;
  display: flex;
  justify-content: space-between;

  a { 
    opacity: .4;
    color: var(--white-color);
  }
}

</style>

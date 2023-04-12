<template>
  <section class="intro" >
    <div class="background-container" :bg="bg">
      <div class="bg bg-1"></div>
      <div class="bg bg-2"></div>
      <div class="bg bg-3"></div>
    </div>

      <div class="slides">
        <transition>
          <div class="slides-track">
            <div class="slide grid-section" id="intro-1">
              <div class="intro-section__content">
                <stack-l>
                  <h2>The College-to-Jobs <strong>Initiative</strong></h2>
                  <p class="tagline">A review of programs and policies that connect college students to high-paying careers</p>
                </stack-l>
                <a class="next-link icon" href="#intro-2">arrow_forward</a>
              </div>
            </div>
            <div class="slide grid-section" id="intro-2">
              <div class="intro-section__content">
                <stack-l>
                  <h3 class="color:secondary">It’s time to bridge the gap between college and good-paying jobs.</h3>
                  <p>For decades, a college degree has been considered the key to unlock economic prosperity in the United States. However, the college earnings premium appears to be declining for the first time in decades, and college graduates are increasingly underemployed. As education costs continue to skyrocket and student debt mounts, Americans are reconsidering whether college is worth the expense.</p>
                </stack-l>
                <a class="prev-link icon" href="#intro-1">arrow_back</a>
                <a class="next-link icon" @click="changeBg(2)" href="#intro-3">arrow_forward</a>
              </div>
            </div>
            <div class="slide grid-section" id="intro-3">
              <div class="intro-section__content">
                <stack-l>
                  <h3 class="color:primary">Higher education is at an inflection point.</h3>
                  <p>Colleges are being called upon to evaluate—and improve—the economic outcomes of their students, particularly Black, Latinx, and Indigenous students who have been underserved by the higher education system. Higher education institutions must address a key question–are they connecting students to good jobs?</p>
                </stack-l>
                <a class="prev-link icon" @click="changeBg(1)" href="#intro-2">arrow_back</a>
                <a class="next-link icon" @click="changeBg(3)" href="#intro-4">arrow_forward</a>
              </div>
            </div>
            <div class="slide grid-section" id="intro-4">
              <div class="intro-section__content">
                <stack-l>
                  <h3 class="color:secondary">The College-to-Jobs Initiative examines the disconnect between college and good jobs</h3>
                  <p>With a focus on public two-year colleges, four-year colleges, Historically Black Universities and Colleges, and other Minority Serving Institutions, it explores what we know – and don’t know – about student transitions to the workforce.</p>
                </stack-l>
                <a class="prev-link icon" @click="changeBg(2)" href="#intro-3">arrow_back</a>
                <a class="next-link icon" href="#resources">arrow_forward</a>
                
              </div>
            </div>
            <div class="slide grid-section resources" id="resources">
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
            </div>
          </div>
        </transition>
      </div>
  </section>
</template>

<script setup>

let bg = '1'

function changeBg(a) {
  bg = a
}
</script>

<style lang="scss" scoped>

section {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.slides {
  width: 100vw;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 100%;
}
.slides-track {
  display: flex;
  width: 500vw;
  height: 100%;
}

#intro-1 .intro-section__content { position: relative; }

#intro-1 .intro-section__content:after {
  content: '';
  width: 452vw;
  border-bottom: 3px dotted hsla(var(--white-hsl), .6);
  position: absolute;
  bottom: 0;
  left: -52vw;
}

.slide {
  flex-basis: 100vw;
  width: 100vw;
  height: 100%;
}

.intro-section__content {
  box-shadow: 6px 6px 16px rgba(0,0,0, .2);
}
</style>

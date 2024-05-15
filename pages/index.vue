<template>
  <section class="intro" >
    <animated-background :bg="bgMap[stateActiveSlide]"/>

    <div class="slides">
      <div class="slides-track">
        <div class="slide grid-section" id="intro-1">
          <div class="intro-section__content panel">
            <stack-l>
              <h2>The College-to-Jobs <strong>Initiative</strong></h2>
              <p class="tagline">Exploring the intersection of higher education and the workforce</p>
            </stack-l>
            <a class="next-link icon" href="#" @click.prevent="changeSlide('intro-2',1)">arrow_forward</a>
          </div>
        </div>
        <div class="slide grid-section" id="intro-2">
          <div class="intro-section__content panel">
            <stack-l>
              <h3 class="color:secondary">It’s time to bridge the gap between college and good-paying jobs.</h3>
              <p>For decades, a college degree has been considered the key to unlock economic prosperity in the United States. However, the college earnings premium appears to be declining for the first time in decades, and college graduates are increasingly underemployed. As education costs continue to skyrocket and student debt mounts, Americans are reconsidering whether college is worth the expense.</p>
            </stack-l>
            <a class="prev-link icon" href="#" @click.prevent="changeSlide('intro-1',0)">arrow_back</a>
            <a class="next-link icon" href="#" @click.prevent="changeSlide('intro-3',2)">arrow_forward</a>
          </div>
        </div>
        <div class="slide grid-section" id="intro-3">
          <div class="intro-section__content panel">
            <stack-l>
              <h3 class="color:primary">Colleges are being called upon to evaluate—and improve—the economic outcomes of their students.</h3>
              <p>This is particularly true  for Black, Latinx, and Indigenous students who have been underserved by the higher education system. Institutions and their partners must address a key question–are they connecting students to good jobs?</p>
            </stack-l>
            <a class="prev-link icon" href="#" @click.prevent="changeSlide('intro-2',1)">arrow_back</a>
            <a class="next-link icon" href="#" @click.prevent="changeSlide('intro-4',3)">arrow_forward</a>
          </div>
        </div>
        <div class="slide grid-section" id="intro-4">
          <div class="intro-section__content panel">
            <stack-l>
              <h3 class="color:secondary">The College-to-Jobs Initiative examines the disconnect between college and good jobs.</h3>
              <p>With a focus on public two-year colleges, four-year colleges, Historically Black Colleges and Universities, and other Minority Serving Institutions, it explores what we know – and don’t know – about student transitions to the workforce.</p>
            </stack-l>
            <a class="prev-link icon" href="#" @click.prevent="changeSlide('intro-3',2)">arrow_back</a>
            <a class="next-link icon" href="#" @click.prevent="changeSlide('resources',4)">arrow_forward</a>
            
          </div>
        </div>
        <div v-if="stateActiveSlide == 'resources'" class="slide grid-section resources" id="resources">
          <div class="intro-section__content resources-content">
            <!--<h2 class="heading color:secondary">Resources</h2>-->

            <div class="panel">
              <stack-l>
                <h3>College-to-Jobs Playbook</h3>
                <p><strong>The <span>College-to-Jobs Playbook</span> reviews programs and policies that connect college students to high-paying careers.</strong> It evaluates the research, implementation, and feasibility of college-to-jobs initiatives to answer a crucial question: what can educators, employers, policymakers, and other stakeholders do to launch college students onto successful career trajectories?</p>
                <div><base-button visual="primary" color="primary" @click.prevent="changeSlide('playbook',5)">More Information</base-button></div>
              </stack-l>
            </div>
            <div class="panel">
              <stack-l>
                <h3>College-to-Jobs Stakeholder Briefs</h3>
                <p><strong>The <span>College-to-Jobs Stakeholder Briefs</span> identify high-impact actions that policymakers, educators, and employers can take to improve economic outcomes for college students.</strong> They are organized around six themes: <strong>1.</strong> Strengthening College-Employer Partnerships, <strong>2.</strong> Expanding Equitable Work-based Learning Opportunities, <strong>3.</strong> Redesigning Postsecondary Accountability Measures to Promote Student Success, <strong>4.</strong> Driving Regional Economic Development Through Higher Education, <strong>5.</strong> Modernizing Data Systems for a Connected Education-Workforce Ecosystem, <strong>6.</strong> Preparing Students with the Skills to Navigate the Future of Work.</p>
                <div><base-button visual="primary" color="primary" @click.prevent="changeSlide('briefs',7)">More Information</base-button></div>
              </stack-l>
            </div>
            <div class="panel">
              <stack-l>
                <h3>College-to-Jobs Map</h3>
                <p><strong>The <span>College-to-Jobs Map</span> is a data tool that visualizes how local employment trends align with college graduate growth in regions around the country.</strong> Users can dive into regional labor market changes and find information about college graduate and workforce demographics. The Map highlights the connection between college, economic mobility, and regional economic development across the country.</p>
                <div><base-button visual="primary" color="primary" @click.prevent="changeSlide('map',6)">More Information</base-button></div>
              </stack-l>
            </div>
          </div>
        </div>
        <div v-if="stateActiveSlide == 'playbook'" class="slide grid-section" id="playbook">
          <div class="intro-section__content panel">
            <div class="scroll | margin-bottom:s1">
              <stack-l>
                <h3 class="color:secondary">Delivering on the Degree: The College-to-Jobs Playbook</h3>
                <p><strong>For a growing share of learners and workers in the United States, college is failing to live up to its economic mobility promise.</strong> The cost of college is rising, accompanied by mounting student debt, and many graduates are underemployed following college. Students face steep barriers to college enrollment and success, including time demands, access to housing and childcare, and transportation. These conditions have prompted many learners and workers to reconsider whether college is truly worth the expense.</p>
                <p><strong>Higher education leaders are facing a moment of reckoning in which they must improve the economic returns of a college education.</strong> However, there is little clarity around which programs and initiatives best improve a student’s earnings and employment later in their career. The dearth of information reflects, at least in part, the lack of attention and resources such programs have received from the majority of post-secondary institutions.</p>
                <p><strong>This white paper puts “college-to-jobs” programs in focus, making the case that they should be a priority for future policy, investment, and research.</strong> It maps the field of initiatives that smooth transitions for college students to the workforce, identifying 13 “interventions” that have been deployed to improve college students’ economic outcomes.</p>
                <p>The Playbook provides answers to a crucial question at a time of inflection for postsecondary education: <strong>what can we do to launch more college students onto successful career trajectories?</strong></p>
              </stack-l>
            </div>
            <stack-l space="var(--s-3)">
              <p><base-button visual="primary" color="primary" el="a" href="/college-to-jobs-playbook.pdf" target="_blank">Download the Playbook</base-button></p>
              <p><base-button visual="primary" color="primary" el="a" href="/college-to-jobs-executive-summary.pdf" target="_blank">Download the Executive Summary</base-button></p>
            </stack-l>
            <a href="#" class="prev-link icon" @click.prevent="changeSlide('resources',4)">arrow_back</a>
          </div>
        </div>
        <div v-if="stateActiveSlide == 'map'" class="slide grid-section" id="map">
          <div class="intro-section__content panel">
            <div class="scroll | margin-bottom:s1">
              <stack-l>
                <h2 class="color:secondary">College-to-Jobs Map</h2>
                <p><strong>The College-to-Jobs Map visualizes how local worker trends align with college graduate growth in regions around the country.</strong> The tool allows users to dive into regional labor market changes and discover college graduate and workforce information. The map draws the connection between colleges, economic mobility, and regional economic development–presenting the graduate supply and labor demand challenges to building a prosperous and inclusive workforce.</p>
              </stack-l>
            </div>
            <stack-l space="var(--s-3)">
              <p><base-button visual="primary" color="primary" el="a" href="https://collegetojobs.hks.harvard.edu/" target="_blank">Explore the map</base-button></p>
            </stack-l>
            <a href="#" class="prev-link icon" @click.prevent="changeSlide('resources',4)">arrow_back</a>
          </div>
        </div>
        <div v-if="stateActiveSlide == 'briefs'" class="slide grid-section" id="briefs">
          <div class="intro-section__content panel">
            <div class="scroll | margin-bottom:s1">
              <stack-l>
                <h2 class="color:secondary">College-to-Jobs Stakeholder Briefs</h2>
                <p><strong>Policymakers, educators, and employers each play a crucial role in improving students' economic prospects.</strong> The College-to-Jobs Stakeholder Briefs offer practical recommendations for these stakeholders through a series of six papers, informed by cross-sector expert discussion groups. Each brief focuses on a different theme at the intersection of higher education and the labor market. Together, they outline a vision for an integrated education-workforce system and establish a clear, actionable path to revive the economic promise of college.</p>
                <ul class="stack">
                  <li class="brief">
                    <a href="/workforce-stakeholder-brief-01.pdf" target="_blank"><strong>Stakeholder Brief #1</strong> | Strengthening College-Employer Partnerships</a>
                  </li>
                  <li class="brief">
                    <a href="/workforce-stakeholder-brief-02.pdf" target="_blank"><strong>Stakeholder Brief #2</strong> | Expanding Equitable Work-based Learning Opportunities</a>
                  </li>
                  <li class="brief">
                    <a href="/workforce-stakeholder-brief-03.pdf" target="_blank"><strong>Stakeholder Brief #3</strong> | Redesigning Postsecondary Accountability Measures to Promote Student Success</a>
                  </li>
                  <li class="brief">
                    <a href="#"><strong>Stakeholder Brief #4</strong> | Driving Regional Economic Development Through Higher Education</a>
                  </li>
                  <li class="brief">
                    <a href="#"><strong>Stakeholder Brief #5</strong> | Modernizing Data Systems for a Connected Education-Workforce Ecosystem</a>
                  </li>
                  <li class="brief">
                    <a href="#"><strong>Stakeholder Brief #6</strong> | Preparing Students with the Skills to Navigate the Future of Work</a>
                  </li>
                </ul>
              </stack-l>
            </div>
            <a href="#" class="prev-link icon" @click.prevent="changeSlide('resources',4)">arrow_back</a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script setup>
import { ref } from 'vue';
const bgMap = {
  'intro-1': 1,
  'intro-2': 1,
  'intro-3': 2,
  'intro-4': 3,
  resources: 3,
  playbook : 4,
  map: 5,
  briefs: 6
}

const stateActiveSlide = useActiveSlide()
const bg = ref(bgMap[stateActiveSlide.value])

function changeSlide(slide, step) {
  stateActiveSlide.value = slide;
  bg.value = bgMap[slide];
  const slideContainer = document.querySelector('.slides');
  const width = window.innerWidth;
  slideContainer.scrollTo({
    left: (width * step),
    behavior: 'smooth'
  });
  // window.scrollByPages('1')
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
  overflow-x: hidden;
  scroll-behavior: smooth;
  height: 100%;
}
.slides-track {
  display: flex;
  width: 500vw;
  height: 100%;
}

.tagline {
  font-weight: 700;
}

#intro-1 .intro-section__content { 
  position: relative; 
}

#intro-1 .intro-section__content:after {
  content: '';
  width: 452vw;
  border-bottom: 3px dotted hsla(var(--white-hsl), .6);
  position: absolute;
  bottom: 0;
  left: -50vw;
}

.slide {
  flex-basis: 100vw;
  width: 100vw;
  height: 100%;
}

.intro-section__content {
  max-width: 95%;
  margin-bottom: 10vh;

  @media (min-width: 40em) {
    width: 75%;
    margin-bottom: 10vh;
  }
  .stack {
    max-height: calc(70vh - var(--s4));
    overflow-y: auto;
  }
}

#resources .intro-section__content {
  @media (min-width: 40em) {
    width: 100%;
  }
}

#map {
  @media (max-width: 40em) {
    .intro-section__content > .scroll {
      max-height: 50vh;
      overflow-y: scroll;
    }
  }
}
#playbook,
#map,
#resources {
  .intro-section__content {
    max-width: 100%;
    @media (min-width: 40em) { transform: translateX(-20%); }
  }
  .intro-section__content > .scroll {
    max-height: calc(70vh - var(--s5));
    overflow-y: scroll;
  }
  .stack {
    max-height: none;
    overflow-y: hidden;
  }
}

.brief {
  padding: var(--s0);
  border: 1px solid hsla(var(--base-hsl), .1);
  position: relative;

  a {
    font-size: 1rem;
    font-weight: 300;
    color: var(--base-color);
  }

  strong { 
    font-weight: 600; 
    color: var(--primary-color);
  }

  & a[href="#"] { 
    opacity: .5; 
    pointer-events: none;
    

    &:after {
      content:"Coming Soon";
      font-weight: 600;
      font-style: italic;
      color: var(--primary-color);
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      text-align: right;
      padding: var(--s0);
      background: linear-gradient(to right, transparent, white);
    }
  }
}
</style>

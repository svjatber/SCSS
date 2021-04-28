<template>
  <header>
    <div class="menu-btn" @click="openBurger = !openBurger">
      <span class="menu-btn__burger" :class="{open: openBurger}"></span>
    </div>
    <nav class="nav" :class="{open: openBurger}">
      <ul class="menu-nav" :class="{open: openBurger}">
        <li class="menu-nav__item active" :class="{open: openBurger}">
          <router-link to="/" class="menu-nav__link">
            Home
          </router-link>
        </li>
        <li class="menu-nav__item" :class="{open: openBurger}">
          <router-link to="/about" class="menu-nav__link">
            About Me
          </router-link>
        </li>
        <li class="menu-nav__item" :class="{open: openBurger}">
          <router-link to='/project' class="menu-nav__link">
            My Projects
          </router-link>
        </li>
        <li class="menu-nav__item" :class="{open: openBurger}">
          <router-link to="/contact" class="menu-nav__link">
            Contact Me
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="about">
      <div class="about__bio-image">
        <div class="about__bio">
          <h2 class="text-secondary">BIO</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa sapiente rerum dolores aliquam, fugiat eveniet commodi. Vel, nihil, numquam possimus deserunt officiis rerum in omnis error esse iusto quas.</p>
        </div>
      </div>

      <div class="jobs">
        <div class="jobs__job">
          <h2 class="text-secondary">2017 - Current</h2>
          <h3>Google</h3>
          <h6>Full Stack Developer</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
        </div>
        <div class="jobs__job">
          <h2 class="text-secondary">2015 - 2017</h2>
          <h3>Microsoft</h3>
          <h6>Front End Developer</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
        </div>
        <div class="jobs__job">
          <h2 class="text-secondary">2012 - 2015</h2>
          <h3>Web Design Co.</h3>
          <h6>Graphic Designer</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
        </div>
      </div>

      <div class="social-icons">
        <a href="#!">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#!">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#!">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#!">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>

      <footer>&copy; Copyright 2019</footer>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      openBurger: false
    }
  }
}
</script>

<style lang="scss">

</style>

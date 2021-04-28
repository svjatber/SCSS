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
    <section class="home">
      <h2>Hi! My Name Is</h2>
      <h1 class="home__name">
        Mike <span class="home__name--last">Smith</span>
      </h1>
      <h2>
        Web Developer, Designer & Programmer
      </h2>

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

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
    <section class="contact">
      <h2>Contact Me..</h2>

      <div class="contact__list">
        <div class="contact__email">
          <span><i class="fas fa-envelope"></i> Email</span>
          <div class="text-secondary">email@email.com</div>
        </div>
        <div class="contact__phone">
          <span><i class="fas fa-mobile-alt"></i> Phone</span>
          <div class="text-secondary">+1 (555) 555-5555</div>
        </div>
        <div class="contact__address">
          <span><i class="fas fa-marker-alt"></i> Address</span>
          <div class="text-secondary">123 First St. Houston, TX</div>
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

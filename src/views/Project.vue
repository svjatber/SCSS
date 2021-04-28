<template>
  <header>
    <div class="menu-btn" @click="openBurger = !openBurger">
      <span class="menu-btn__burger" :class="{open: openBurger}"></span>
    </div>
    <nav class="nav" :class="{open: openBurger}">
      <ul class="menu-nav" :class="{open: openBurger}">
        <li class="menu-nav__item active" :class="{open: openBurger}">
          <router-link class="menu-nav__link" to="/">
            Home
          </router-link>
        </li>
        <li class="menu-nav__item" :class="{open: openBurger}">
          <router-link to="/about" class="menu-nav__link">
            About Me
          </router-link>
        </li>
        <li class="menu-nav__item" :class="{open: openBurger}">
          <router-link to="/project" class="menu-nav__link">
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
    <section class="projects">
      <div class="projects__bio-image">
        <h1 class="text-secondary">My Projects</h1>
      </div>

      <div class="projects__items">
        <div class="projects__item">
          <img src="../img/project-1.jpeg" alt="My Project">
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="../img/project-2.jpeg" alt="My Project">
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="../img/project-3.jpeg" alt="My Project">
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="../img/project-4.jpeg" alt="My Project">
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="../img/project-5.jpeg" alt="My Project">
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div class="projects__item">
          <img src="../img/project-6.jpeg" alt="My Project">
          <div class="projects__btns">
            <a href="#!" class="projects__btn">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
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

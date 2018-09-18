<template>
  <div class="page">
    <app-header></app-header>
    <main class="main-content">
      <nuxt/>
    </main>
    <footer class="footer">
      <div class="wrapper">
        <nav class="secondary-nav">
          <nuxt-link to="/" class="main-nav__logo-link">
            <img class="main-nav__logo" src="~/assets/images/logos/nova-therapy--green.svg" alt="Nova Therapy logo">
          </nuxt-link>
          <ul class="secondary-nav__menu">
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/about" class="secondary-nav__menu-item-link">About</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/health-assessment" class="secondary-nav__menu-item-link">Health Assessment</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/pricing" class="secondary-nav__menu-item-link">Pricing</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/contact" class="secondary-nav__menu-item-link">Contact</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/cn" class="secondary-nav__menu-item-link">查看中文网站</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue';

export default {
  data() {
    return {};
  },
  components: {
    'app-header': AppHeader,
  },
};
</script>

<style lang="scss">
@import '~/assets/css/app.scss';
</style>


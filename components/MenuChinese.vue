<template>
  <ul class="main-nav__menu">
    <button
      :class="{
        'main-nav__mobile-menu-button': true,
        'open': menuIsOpen,
      }"
      @click="toggleMenu()"
      v-click-outside="closeMenu"
    >
      <span class="main-nav__mobile-menu-button-line"></span>
      <span class="main-nav__mobile-menu-button-line"></span>
      <span class="main-nav__mobile-menu-button-line"></span>
      <span class="main-nav__mobile-menu-button-line"></span>
    </button>
    <span
      :class="{
        'main-nav__menu-list': true,
        'open': menuIsOpen,
      }"
    >
      <li class="main-nav__menu-item">
        <nuxt-link to="/cn/health-assessment" class="main-nav__menu-item-link">Health Assessment</nuxt-link>
      </li>
      <li class="main-nav__menu-item">
        <nuxt-link to="/cn/about" class="main-nav__menu-item-link">About</nuxt-link>
      </li>
      <li class="main-nav__menu-item">
        <nuxt-link to="/cn/pricing" class="main-nav__menu-item-link">Pricing</nuxt-link>
      </li>
      <li class="main-nav__menu-item">
        <nuxt-link to="/cn/contact" class="main-nav__menu-item-link">Contact</nuxt-link>
      </li>
      <li class="main-nav__menu-item">
        <a href="https://nova-remedy-testing.teachable.com/p/diabetes-wellness-program" class="main-nav__menu-item-link main-nav__menu-item--emphasis">Start Free Trial</a>
      </li>
    </span>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    closeMenu() {
      this.menuIsOpen = false;
    },
  },
};
</script>

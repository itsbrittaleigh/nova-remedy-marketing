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
        <nuxt-link to="/cn/health-assessment" class="main-nav__menu-item-link">健康评估</nuxt-link>
      </li>
      <li class="main-nav__menu-item">
        <nuxt-link to="/cn/about" class="main-nav__menu-item-link">关于</nuxt-link>
      </li>
      <!-- TODO: Ron (Nova) decided to not have a pricing page for now -->
      <!-- <li class="main-nav__menu-item">
        <nuxt-link to="/cn/pricing" class="main-nav__menu-item-link">价钱</nuxt-link>
      </li> -->
      <li class="main-nav__menu-item">
        <nuxt-link to="/cn/contact" class="main-nav__menu-item-link">联系</nuxt-link>
      </li>
      <li class="main-nav__menu-item">
        <a href="https://nova-remedy-testing.teachable.com/p/diabetes-wellness-program" class="main-nav__menu-item-link main-nav__menu-item--emphasis">开启免费体验</a>
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

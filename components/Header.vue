<template>
  <header
    :class="{
      'main-header': true,
      'opaque': !menuIsTransparent,
    }"
  >
    <div class="wrapper">
      <nav class="main-nav">
        <nuxt-link to="/" class="main-nav__logo-link">
          <img class="main-nav__logo main-nav__logo--white" src="~/assets/images/logos/nova-therapy--white.svg" alt="Nova Therapy logo">
          <img class="main-nav__logo main-nav__logo--green" src="~/assets/images/logos/nova-therapy--green.svg" alt="Nova Therapy logo">
        </nuxt-link>
        <navigation-menu></navigation-menu>
      </nav>
    </div>
  </header>
</template>

<script>
import NavigationMenu from '~/components/Menu.vue';

export default {
  data() {
    return {
      menuIsTransparent: true,
    };
  },
  components: {
    'navigation-menu': NavigationMenu,
  },
  methods: {
    opacifyMenu() {
      this.menuIsTransparent = false;
    },
    transparentizeMenu() {
      this.menuIsTransparent = true;
    },
    setMenuTransparency() {
      const scrollPosition = window.scrollY;
      if(scrollPosition > 500) this.opacifyMenu();
      else this.transparentizeMenu();
    },
  },
  mounted() {
    this.setMenuTransparency();
    window.addEventListener('scroll', () => {
      this.setMenuTransparency();
    });
  },
};
</script>

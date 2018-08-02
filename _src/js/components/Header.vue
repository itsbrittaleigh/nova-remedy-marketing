<template>
  <header
    :class="{
      'main-header': true,
      'opaque': !menuIsTransparent,
    }"
  >
    <div class="wrapper">
      <nav class="main-nav">
        <a href="/" class="main-nav__logo-link">
          <img class="main-nav__logo main-nav__logo--white" src="/assets/images/logos/nova-therapy--white.svg" alt="Nova Therapy logo">
          <img class="main-nav__logo main-nav__logo--green" src="/assets/images/logos/nova-therapy--green.svg" alt="Nova Therapy logo">
        </a>
        <navigation-menu></navigation-menu>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationMenu from './Menu.vue';

export default {
  name: 'Header',
  data() {
    return {};
  },
  components: {
    'navigation-menu': NavigationMenu,
  },
  computed: {
    ...mapGetters([
      'menuIsTransparent',
    ]),
  },
  methods: {
    ...mapActions([
      'opacifyMenu',
      'transparentizeMenu',
    ]),
    setMenuTransparency() {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
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

<style lang="scss">
@import '../../../assets/css/_settings/colors.scss';
@import '../../../assets/css/_settings/breakpoints.scss';
.main-header {
  transition: 0.4s;
}
.main-header.opaque {
  background: $white;
  box-shadow: 0 0 15px 0 rgba($black, 0.08);
  .main-nav__logo--white {
    opacity: 0;
  }
  .main-nav__logo--green {
    opacity: 1;
  }
  .main-nav__mobile-menu-button {
    background: $blue--darker;
  }
  .main-nav__mobile-menu-button-line {
    background: $white;
  }
  @media only screen and (min-width: $large) {
    .main-nav__menu-item-link {
      color: $gray;
      &:hover {
        color: $green;
        &:after {
          background: $green;
        }
      }
    }
    .main-nav__menu-item--emphasis {
      background: $green;
      border-color: $green;
      color: $white;
      &:hover{
        background: $white;
        color: $green;
      }
    }
  }
}
</style>


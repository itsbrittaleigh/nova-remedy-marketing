<template>
  <ul
    class="main-nav__menu"
    v-click-outside="closeMenu"
  >
    <button
      :class="{
        'main-nav__mobile-menu-button': true,
        'open': menuIsOpen,
      }"
      @click="toggleMenu()"
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
        <a href="/health-assessment" class="main-nav__menu-item-link">Health Assessment</a>
      </li>
      <li class="main-nav__menu-item">
        <a href="/about" class="main-nav__menu-item-link">About</a>
      </li>
      <!-- <li class="main-nav__menu-item">
        <a href="/frequently-asked-questions" class="main-nav__menu-item-link">FAQ</a>
      </li> -->
      <li class="main-nav__menu-item">
        <a href="/pricing" class="main-nav__menu-item-link">Pricing</a>
      </li>
      <li class="main-nav__menu-item">
        <a href="/contact" class="main-nav__menu-item-link">Contact</a>
      </li>
      <li class="main-nav__menu-item">
        <a href="" class="main-nav__menu-item-link main-nav__menu-item--emphasis">Start Free Trial</a>
      </li>
    </span>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import vClickOutside from 'v-click-outside';

export default {
  name: 'Menu',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'menuIsOpen',
      'menuIsTransparent',
    ]),
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    ...mapActions([
      'toggleMenu',
      'closeMenu',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.main-nav__menu-list.open {
  pointer-events: initial;
  bottom: 0;
  opacity: 1;
  padding-bottom: 15px;
}
.main-nav__mobile-menu-button.open {
  .main-nav__mobile-menu-button-line {
    &:nth-child(1) {
      top: 10px;
      width: 0;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 10px;
      width: 0;
      left: 50%;
    }
  }
}
</style>


<template>
  <div class="page">
    <app-header-cn></app-header-cn>
    <main class="main-content">
      <nuxt/>
    </main>
    <footer class="footer">
      <div class="wrapper">
        <nav class="secondary-nav">
          <nuxt-link to="/cn" class="main-nav__logo-link">
            <img class="main-nav__logo" src="~/assets/images/logos/nova-therapy--green.svg" alt="Nova Therapy logo">
          </nuxt-link>
          <ul class="secondary-nav__menu">
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/cn/about" class="secondary-nav__menu-item-link">关于</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/cn/health-assessment" class="secondary-nav__menu-item-link">健康评估</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/cn/pricing" class="secondary-nav__menu-item-link">价钱</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/cn/contact" class="secondary-nav__menu-item-link">联系</nuxt-link>
            </li>
            <li class="secondary-nav__menu-item">
              <nuxt-link to="/" class="secondary-nav__menu-item-link">View English Site</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeaderCN from '~/components/HeaderChinese.vue';

export default {
  data() {
    return {};
  },
  components: {
    'app-header-cn': AppHeaderCN,
  },
};
</script>

<style lang="scss">
@import '~/assets/css/app.scss';
</style>


<template>
  <div class="page-container">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__mask hero__mask--lightblue">
        <img :src="header.image" alt="" class="hero__image">
        <div class="wrapper hero__wrapper">
          <div class="hero__content">
            <h1>{{ header.headline }}</h1>
            <p class="hero__description">{{ header.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Packages -->
    <section class="lifted-section">
      <div class="wrapper">
        <div class="pricing-cards">
          <div
            v-for="(tier, index) in packages"
            :key="index"
            class="pricing-card"
          >
            <img :src="tier.image" class="pricing-card__icon">
            <h2 :class="{
              'pricing-card__heading': true,
              'color-darkblue': index % 2 !== 0,
            }">
              {{ tier.name }}
            </h2>
            <p class="text-center">{{ tier.description }}</p>
            <p class="text-center pricing-card__rate">{{ tier.month }} 每月</p>
            <p class="text-center pricing-card__annual-rate">{{ tier.year }} 每年</p>
            <span
              :class="{
                'pricing-card__divider': true,
                'bg-darkblue': index % 2 !== 0,
              }"></span>
            <ul class="feature-list">
              <li
                v-for="(feature, idx) in tier.features"
                :key="idx"
                :class="{
                  'feature-list__item': true,
                  'feature-list__item--blue': index % 2 !== 0,
                }"
              >
                {{ feature }}
              </li>
            </ul>
            <a href="#" class="button button--blue pricing-card__button">立即注册</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default-chinese',
  async asyncData({ params }) {
    const pageData = await import('~/content/_pricing-chinese.json');
    return pageData;
  },
  data() {
    return {};
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
      ],
    };
  },
};
</script>

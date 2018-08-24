<template>
  <div class="page-container">
    <section class="hero hero--large">
      <div class="hero__mask hero__mask--blue">
        <img :src="header.image" alt="" class="hero__image">
        <div class="wrapper hero__wrapper">
          <div class="hero__content">
            <health-assessment></health-assessment>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HealthAssessment from '~/components/HealthAssessment.vue';

export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/_assessment.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'health-assessment': HealthAssessment,
  },
};
</script>

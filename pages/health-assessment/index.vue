<template>
  <div class="page-container">
    <section class="hero hero--large">
      <div class="hero__mask hero__mask--blue">
        <img src="~/assets/images/covers/health-assessment.jpg" alt="" class="hero__image">
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
  data() {
    return {};
  },
  components: {
    'health-assessment': HealthAssessment,
  },
};
</script>

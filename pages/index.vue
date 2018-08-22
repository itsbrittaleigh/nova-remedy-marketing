<template>
  <div class="page-container">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__mask">
        <img :src="header.image" alt="" class="hero__image">
        <div class="wrapper hero__wrapper">
          <div class="hero__content">
            <h1>{{ header.headline }}</h1>
            <p class="hero__description">{{ header.description }}</p>
            <nuxt-link to="/health-assessment" class="button button--blue m-t-20">{{ header.buttontext }}</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Value prop cards -->
    <section class="lifted-section">
      <div class="wrapper">
        <div class="cards--condensed-on-mobile cards--flex-on-desktop">
          <div
            v-for="(prop, index) in props"
            :key="index"
            class="card card--flex"
          >
            <img :src="prop.image" class="card__icon">
            <span
              :class="{
                'card__divider': true,
                'bg-darkblue': index % 2 !== 0
              }"
            ></span>
            <div class="card__content">
              <h3
                :class="{
                  'card__title': true,
                  'color-darkblue': index % 2 !== 0
                }"
              >
                {{ prop.title }}
              </h3>
              <p class="card__copy">{{ prop.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content overview -->
    <section class="padded-section">
      <div class="wrapper">
        <div class="flex-sections">
          <div class="flex-sections__section">
            <h3>{{ overview.about.headline }}</h3>
            <p>{{ overview.about.description }}</p>
            <nuxt-link :to="`/${overview.about.link.page}`">{{ overview.about.link.text }}</nuxt-link>
          </div>
          <div class="flex-sections__section">
            <h3 class="color-green">{{ overview.diseases.headline }}</h3>
            <ul class="feature-list feature-list--flex">
              <li
                v-for="(disease, index) in overview.diseases.diseases"
                :key="index"
                class="feature-list__item"
              >
                {{ disease }}
              </li>
              <li class="feature-list__item">And more</li>
            </ul>
          </div>
          <div class="flex-sections__section">
            <h3>{{ overview.doctor.headline }}</h3>
            <p>{{ overview.doctor.description }}</p>
            <div class="testimonial">
              <img :src="overview.doctor.information.image" alt="" class="testimonial__image">
              <div class="testimonial__content">
                <p class="testimonial__name">{{ overview.doctor.information.name }}</p>
                <p class="testimonial__title">{{ overview.doctor.information.title }}</p>
                <p class="testimonial__copy">{{ overview.doctor.information.credentials }}</p>
              </div>
            </div>
            <nuxt-link :to="`/${overview.doctor.link.page}`">{{ overview.doctor.link.text }}</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Videos -->
    <section class="elliptical-section">
      <div class="elliptical-section__background"></div>
      <div class="wrapper">
        <h2 class="color-darkerblue">{{ videos.headline }}</h2>
        <p class="intro-paragraph m-b-50">{{ videos.description }}</p>
        <div
          v-for="(video, index) in videos.videos"
          :key="index"
          class="video-card"
        >
          <img :src="video.image" alt="" class="video-card__image">
          <div class="video-card__content">
            <h3 :class="{
              'video-card__title': true,
              'color-green': index % 2 === 0,
            }">
              {{ video.headline }}
            </h3>
            <p class="video-card__copy">{{ video.description }}</p>
            <div class="video-card__overview">
              <ul class="video-card__overview-list">
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-blue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-blue">Exercise Type:</span>
                  {{ video.type }}
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Benefits:</span>
                  {{ video.benefits }}
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-lightblue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-lightblue">Uses:</span>
                  {{ video.uses }}
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Duration:</span>
                  {{ video.duration }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Process -->
    <section class="padded-section">
      <div class="wrapper">
        <h2>{{ process.headline }}</h2>
        <p class="intro-paragraph">{{ process.description }}</p>
        <p class="text-center">
          <nuxt-link :to="`/${process.link.page}`">{{ process.link.text }}</nuxt-link>
        </p>
        <div class="process-steps">
          <div
            v-for="(step, index) in process.steps"
            :key="index"
            class="process-step"
          >
            <div class="process-step__image-container">
              <img :src="step.image" alt="" class="process-step__image">
            </div>
            <h4
              :class="{
                'process-step__title': true,
                'color-blue': index % 2 !== 0,
              }">
                {{ index + 1 }}. {{ step.title }}
              </h4>
            <p class="text-center is-marginless">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="bg-green-gradient-radial p-t-100 p-b-100">
      <div class="wrapper flex-container flex-center">
        <nuxt-link :to="`/${cta.page}`" class="button button--white">{{ cta.text }}</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import AccordionSection from '~/components/AccordionSection.vue';

export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/_index.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'accordion-section': AccordionSection,
  },
};
</script>

<template>
  <div class="page-container">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__mask hero__mask--blue">
        <img :src="header.image" alt="" class="hero__image">
        <div class="wrapper hero__wrapper">
          <div class="hero__content">
            <h1>{{ header.headline }}</h1>
            <p class="hero__description hero__description--large color-green">{{ header.subtitle }}</p>
            <a href="https://nova-remedy-testing.teachable.com/p/diabetes-wellness-program" class="button">{{ header.buttontext }}</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Featured videos -->
    <section class="lifted-section">
      <div class="wrapper flex-container--desktop flex-between">
        <div class="video-card video-card--narrow">
          <div class="video-card__image-container">
            <img src="~/assets/images/video-stills/video1.jpg" alt="" class="video-card__image">
          </div>
          <div class="video-card__content">
            <h3 class="color-green video-card__title">About video headline</h3>
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
            <div class="video-card__overview">
              <ul class="video-card__overview-list">
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-blue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-blue">Exercise Type:</span>
                  Upper body
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Benefits:</span>
                  Assists in breathing, posture, endurance
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-lightblue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-lightblue">Uses:</span>
                  Hypertension, stomach, endocrine disease
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Duration:</span>
                  10 minutes, 3 times per week
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="video-card video-card--narrow">
          <div class="video-card__image-container video-card__image-container--blue">
            <img src="~/assets/images/video-stills/video2.jpg" alt="" class="video-card__image">
          </div>
          <div class="video-card__content">
            <h3 class="color-blue video-card__title">About video headline</h3>
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
            <div class="video-card__overview">
              <ul class="video-card__overview-list">
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-blue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-blue">Exercise Type:</span>
                  Arms
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Benefits:</span>
                  Flexibility, posture
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-lightblue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-lightblue">Uses:</span>
                  Hypertension, stomach, heart disease
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Duration:</span>
                  15 minutes, 4 times per week
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="video-card video-card--narrow">
          <div class="video-card__image-container">
            <img src="~/assets/images/video-stills/video3.jpg" alt="" class="video-card__image">
          </div>
          <div class="video-card__content">
            <h3 class="color-green video-card__title">About video headline</h3>
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
            <div class="video-card__overview">
              <ul class="video-card__overview-list">
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-blue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-blue">Exercise Type:</span>
                  Legs
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Benefits:</span>
                  Flexibility, posture
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-lightblue">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-lightblue">Uses:</span>
                  Hypertension, stomach, heart disease
                </li>
                <li class="video-card__overview-list-item">
                  <span class="video-card__overview-list-item-bullet-point color-green">&#9654;</span>
                  <span class="video-card__overview-list-item-title color-green">Duration:</span>
                  5 minutes, daily
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Additional videos -->
    <section class="padded-section p-t-0">
      <div class="wrapper flex-container flex-wrap flex-between">
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video1.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video2.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video3.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video1.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video2.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video3.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video1.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
        <div class="video-card video-card--condensed">
          <img src="~/assets/images/video-stills/video2.jpg" alt="" class="video-card__image">
          <div class="video-card__content">
            <p class="video-card__copy">Lorem ipsum dolor estionsequam quias ut quis eaquas rent. Bea lorem ute plia digenis ipsandelest ipsam.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="bg-green-gradient-radial p-t-100 p-b-100">
      <div class="wrapper">
        <p class="text-center">{{ cta.introduction }}</p>
      </div>
      <div class="wrapper flex-container flex-center">
        <nuxt-link :to="`/${cta.page}`" class="button button--white">{{ cta.text }}</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const pageData = await import('~/content/_results.json');
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

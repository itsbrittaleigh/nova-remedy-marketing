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
    <!-- Contact Methods -->
    <section class="lifted-section">
      <div class="wrapper">
        <div class="cards--condensed-on-mobile cards--flex-on-desktop">
          <div class="card card--flex">
            <img src="~/assets/images/icons/lotus-icon-green.png" alt="Lotus icon with green gradient" class="card__icon">
            <span class="card__divider"></span>
            <div class="card__content">
              <div
                v-for="(phone, index) in methods.phones"
                :key="index"
              >
                <h3 class="card__title m-t-25">{{ phone.title }}</h3>
                <a :href="`tel:+${stripNumber(phone.number)}`" class="card__copy card__copy--large">{{ phone.number }}</a>
              </div>
            </div>
          </div>
          <div class="card card--flex">
            <img src="~/assets/images/icons/lotus-icon-blue.png" alt="Lotus icon with blue gradient" class="card__icon">
            <span class="card__divider bg-darkblue"></span>
            <div class="card__content">
              <div
                v-for="(email, index) in methods.emails"
                :key="index"
              >
                <h3 class="card__title m-t-25 color-darkblue">{{ email.title }}</h3>
                <a :href="`mailto:${email.email}`" class="card__copy card__copy--large">{{ email.email }}</a>
              </div>
            </div>
          </div>
          <div class="card card--flex">
            <img src="~/assets/images/icons/lotus-icon-green.png" alt="Lotus icon with green gradient" class="card__icon">
            <span class="card__divider"></span>
            <div class="card__content">
              <h3 class="card__title m-t-25">{{ methods.address.title }}</h3>
              <p class="card__copy card__copy--large">
                {{ methods.address.street }}<br>
                {{ methods.address.city }}, {{ methods.address.state }} {{ methods.address.zip }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Ron (Nova) decided to not show the form for now -->
    <!-- <section class="padded-section">
      <h2 class="color-darkblue">{{ form.headline }}</h2>
      <contact-form></contact-form>
    </section> -->
  </div>
</template>

<script>
import ContactForm from '~/components/ContactFormChinese.vue';

export default {
  layout: 'default-chinese',
  async asyncData({ params }) {
    const pageData = await import('~/content/_contact-chinese.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'contact-form': ContactForm,
  },
  methods: {
    stripNumber(number) {
      return number.replace(/\D/g, '');
    },
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

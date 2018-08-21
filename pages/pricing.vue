<template>
  <div class="page-container">
    <section class="hero">
      <div class="hero__mask hero__mask--lightblue">
        <img src="~/assets/images/covers/pricing.jpg" alt="" class="hero__image">
        <div class="wrapper hero__wrapper">
          <div class="hero__content">
            <h1>Pricing</h1>
            <p class="hero__description">Lorem ipsum placeholder text dolor fugit aut et, odipiti ommos arum lautassitat landaecte alitatur. Ducia volupta tempore pudiae. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lifted-section">
      <div class="wrapper">
        <div class="pricing-cards">
          <div class="pricing-card">
            <img src="~/assets/images/icons/lotus-icon-green.png" alt="" class="pricing-card__icon">
            <h2 class="pricing-card__heading">Package Name</h2>
            <p class="text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu lorem ipsum.</p>
            <p class="text-center pricing-card__rate">$29/month</p>
            <p class="text-center pricing-card__annual-rate">$250 billed annually</p>
            <span class="pricing-card__divider"></span>
            <ul class="feature-list">
              <li class="feature-list__item">Lorem ipsum dolor</li>
              <li class="feature-list__item">sit amet consectetur</li>
              <li class="feature-list__item">adipisicing elit</li>
              <li class="feature-list__item">Voluptatibus exercitationem</li>
              <li class="feature-list__item">rerum placeat eum</li>
              <li class="feature-list__item">officiis tempora dicta</li>
              <li class="feature-list__item">impedit illo deleniti</li>
              <li class="feature-list__item">necessitatibus quis aliquam</li>
            </ul>
            <a href="#" class="button button--blue pricing-card__button">Sign Up Today</a>
          </div>
          <div class="pricing-card">
            <img src="~/assets/images/icons/lotus-icon-blue.png" alt="" class="pricing-card__icon">
            <h2 class="pricing-card__heading color-darkblue">Package Name</h2>
            <p class="text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu lorem ipsum.</p>
            <p class="text-center pricing-card__rate">$39/month</p>
            <p class="text-center pricing-card__annual-rate">$350 billed annually</p>
            <span class="pricing-card__divider bg-darkblue"></span>
            <ul class="feature-list">
              <li class="feature-list__item feature-list__item--blue">Lorem ipsum dolor</li>
              <li class="feature-list__item feature-list__item--blue">sit amet consectetur</li>
              <li class="feature-list__item feature-list__item--blue">adipisicing elit</li>
              <li class="feature-list__item feature-list__item--blue">Voluptatibus exercitationem</li>
              <li class="feature-list__item feature-list__item--blue">rerum placeat eum</li>
              <li class="feature-list__item feature-list__item--blue">officiis tempora dicta</li>
              <li class="feature-list__item feature-list__item--blue">impedit illo deleniti</li>
              <li class="feature-list__item feature-list__item--blue">necessitatibus quis aliquam</li>
            </ul>
            <a href="#" class="button button--blue pricing-card__button">Sign Up Today</a>
          </div>
          <div class="pricing-card">
            <img src="~/assets/images/icons/lotus-icon-green.png" alt="" class="pricing-card__icon">
            <h2 class="pricing-card__heading">Package Name</h2>
            <p class="text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu lorem ipsum.</p>
            <p class="text-center pricing-card__rate">$49/month</p>
            <p class="text-center pricing-card__annual-rate">$450 billed annually</p>
            <span class="pricing-card__divider"></span>
            <ul class="feature-list">
              <li class="feature-list__item">Lorem ipsum dolor</li>
              <li class="feature-list__item">sit amet consectetur</li>
              <li class="feature-list__item">adipisicing elit</li>
              <li class="feature-list__item">Voluptatibus exercitationem</li>
              <li class="feature-list__item">rerum placeat eum</li>
              <li class="feature-list__item">officiis tempora dicta</li>
              <li class="feature-list__item">impedit illo deleniti</li>
              <li class="feature-list__item">necessitatibus quis aliquam</li>
            </ul>
            <a href="#" class="button button--blue pricing-card__button">Sign Up Today</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: 'Pricing | Nova Remedy',
      meta: [
        { hid: 'description', name: 'description', content: '' },
      ],
    };
  },
};
</script>

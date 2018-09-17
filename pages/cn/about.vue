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
    <!-- Value props -->
    <section class="lifted-section">
      <div class="wrapper">
        <div class="cards--condensed-on-mobile cards--flex-on-desktop cards--profile-on-desktop">
          <div
            v-for="(prop, index) in props"
            :key="index"
            class="card card--flex"
          >
            <img :src="prop.image" alt="" class="card__profile-image hidden-on-mobile m-b-20">
            <img :src="prop.icon" alt="Lotus icon with green gradient" class="card__icon hidden-on-desktop">
            <span :class="{
              'card__divider': true,
              'bg-darkblue': index % 2 !== 0
            }"></span>
            <div class="card__content">
              <h3
                :class="{
                  'card__title': true,
                  'color-darkblue': index % 2 !== 0,
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
    <!-- Divider -->
    <section class="padded-section">
      <div class="wrapper">
        <div class="divider"></div>
      </div>
    </section>
    <!-- Accordion cards -->
    <section class="padded-section p-t-0">
      <div class="wrapper">
        <h2 class="is-marginless">{{ overview.headline }}</h2>
        <p class="text-center intro-paragraph m-b-50">{{ overview.description }}</p>
        <div
          v-for="(card, index) in overview.cards"
          :key="index"
          class="card card--flex card--flex-on-desktop m-b-20"
        >
          <img :src="card.image" class="card__icon">
          <span :class="{ 
            'card__divider': true,
            'bg-darkblue': index % 2 !== 0,
          }"></span>
          <div class="card__content">
            <h3
              :class="{
                'card__title': true,
                'color-darkblue': index % 2 !== 0,
              }">
                {{ card.title }}
              </h3>
            <p class="card__copy m-b-10">{{ card.snippet }}</p>
            <accordion-section>
              <template slot="accordion-header">
                <a href="#" :class="{
                  'color-green': true,
                  'color-darkblue': index % 2 !== 0,
                }">
                  Read more
                </a>
              </template>
              <template slot="accordion-content">
                <p>{{ card.description }}</p>
              </template>
            </accordion-section>
          </div>
          <div class="card__statistic hidden-on-mobile visible-on-tablet">
            <p :class="{
              'statistic__number': true,
              'color-darkblue': index % 2 !== 0,
            }">
              {{ card.statistic.number }}
            </p>
            <p class="statistic__label">{{ card.statistic.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Process -->
    <section class="padded-section">
      <div class="wrapper">
        <h2 class="is-marginless">{{ process.headline }}</h2>
        <p class="text-center intro-paragraph m-b-50">{{ process.description }}</p>
        <div
          v-for="(step, index) in process.steps"
          :key="index"
        >
          <div class="step">
            <p :class="{
              'step__number': true,
              'color-darkblue': index % 2 === 0,
              'color-green': index % 2 !== 0,
            }">
              {{ index + 1 }}
            </p>
            <div class="step__image-container">
              <img :src="step.image" alt="" class="step__image">
            </div>
            <div class="step__content">
              <h3
                :class="{
                  'is-marginless': true,
                  'color-darkblue': index % 2 === 0,
                  'color-green': index % 2 !== 0,
                }">
                  {{ step.title }}
                </h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
          <div v-if="index !== process.steps.length - 1" class="padded-section">
            <div class="divider"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Team -->
    <section class="padded-section">
      <div class="wrapper">
        <h2 class="is-marginless">{{ team.headline }}</h2>
        <p class="text-center intro-paragraph m-b-50">{{ team.description }}</p>
        <div class="team-members">
          <div
            v-for="(member, index) in team.members"
            :key="index"
            class="team-members__member-container"
          >
            <img :src="member.image" alt="" class="team-members__profile-image">
            <div class="team-members__member-content">
              <h3 class="team-members__member-name is-marginless">{{ member.name }}</h3>
              <p class="team-members__member-title is-marginless">{{ member.title }}</p>
              <p class="team-members__member-copy is-marginless">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="bg-green-gradient-radial p-t-100 p-b-100">
      <div class="wrapper flex-container flex-center">
        <nuxt-link :to="`/cn/${cta.page}`" class="button button--white">{{ cta.text }}</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import AccordionSection from '~/components/AccordionSection.vue';

export default {
  layout: 'default-chinese',
  async asyncData({ params }) {
    const pageData = await import('~/content/_about-chinese.json');
    return pageData;
  },
  data() {
    return {};
  },
  components: {
    'accordion-section': AccordionSection,
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

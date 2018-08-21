<template>
  <div
    :class="{
      'accordion-section': true,
      active: isActive,
      'card card--collapsible': isCard,
    }">
    <div class="accordion-section__header" @click.prevent="toggle">
      <i class="accordion-section__icon">+</i>
      <slot name="accordion-header"></slot>
    </div>
    <div class="accordion-section__content" :ref="reference">
      <slot name="accordion-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionSection',
  props: {
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
    isCard: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.selected,
      reference: 'a',
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      if (this.isActive) this.expandSection();
      else this.collapseSection();
    },
    expandSection() {
      const element = this.$refs[this.reference];
      const sectionHeight = element.scrollHeight;
      element.style.height = `${sectionHeight}px`;
    },
    collapseSection() {
      const element = this.$refs[this.reference];
      const sectionHeight = element.scrollHeight;
      const elementTransition = element.style.transition;
      element.style.transition = '';
      requestAnimationFrame(() => {
        element.style.height = `${sectionHeight}px`;
        element.style.transition = elementTransition;
        requestAnimationFrame(() => {
          element.style.height = `${0}px`;
        });
      });
    },
    createRandomRef() {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i = 0; i <= 16; i += 1) {
        result += characters[Math.floor(Math.random() * characters.length)];
      }
      return result;
    },
  },
  mounted() {
    this.reference = this.createRandomRef();
    setTimeout(() => {
      if (!this.isActive) this.collapseSection();
    }, 300);
  },
};
</script>

<style lang="scss">
.accordion-section {
  &.active {
    .accordion-section__content {
      opacity: 1;
    }
  }
}
</style>
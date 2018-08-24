<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__choices assessment__choices--flex">
      <input
        type="tel"
        v-model="localValue"
        :class="{
          'assessment__input text-center': true,
          'assessment__input--filled': question.userAnswer,
        }"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      required: true,
    },
  },
  data() {
    return {
      localValue: '',
    };
  },
  watch: {
    'localValue': {
      handler(val) {
        this.$emit('updated', val);
      },
      deep: true,
    },
  },
};
</script>

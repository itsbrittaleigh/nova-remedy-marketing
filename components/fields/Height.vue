<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__field-group">
      <div class="assessment__choice">
        <input
          type="tel"
          v-model="feet"
          :class="{
            'assessment__input text-center': true,
            'assessment__input--filled': feet,
          }"
        >
        <label :for="feet" class="assessment__field-label">feet</label>
      </div>
      <div class="assessment__choice">
        <input
          type="tel"
          v-model="inches"
          :class="{
            'assessment__input text-center': true,
            'assessment__input--filled': inches,
          }"
        >
        <label :for="inches" class="assessment__field-label">inches</label>
      </div>
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
      feet: '',
      inches: '',
      localValue: '',
    };
  },
  computed: {
    height() {
      if(this.feet && this.inches) return `${this.feet}' ${this.inches}"`;
      else return '';
    },
  },
  watch: {
    'height': {
      handler(val, oldVal) {
        this.localValue = val;
      },
      deep: true,
    },
    'localValue': {
      handler(val) {
        this.$emit('updated', val);
      },
      deep: true,
    },
  },
};
</script>

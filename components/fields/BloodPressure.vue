<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__field-group">
      <div class="assessment__choice">
        <input
          type="tel"
          v-model="systolic"
          :class="{
            'assessment__input text-center': true,
            'assessment__input--filled': systolic,
          }"
        >
        <label :for="systolic" class="assessment__field-label">(systolic)</label>
      </div>
      <p class="slash">/</p>
      <div class="assessment__choice">
        <input
          type="tel"
          v-model="diastolic"
          :class="{
            'assessment__input text-center': true,
            'assessment__input--filled': diastolic,
          }"
        >
        <label :for="diastolic" class="assessment__field-label">(diastolic)</label>
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
      systolic: '',
      diastolic: '',
      localValue: '',
    };
  },
  computed: {
    bloodPressure() {
      if (this.systolic && this.diastolic) return `${this.systolic}/${this.diastolic}`;
      else return '';
    },
  },
  watch: {
    'bloodPressure': {
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

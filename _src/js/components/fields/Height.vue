<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__field-group">
      <div class="assessment__choice">
        <input type="tel" v-model="feet" class="text-center">
        <label :for="feet" class="assessment__field-label">feet</label>
      </div>
      <div class="assessment__choice">
        <input type="tel" v-model="inches" class="text-center">
        <label :for="inches" class="assessment__field-label">inches</label>
      </div>
    </div>
  </div>
</template>

<script>
import FieldMixin from '../../mixins/FieldMixin.js';

export default {
  name: 'HeightField',
  mixins: [FieldMixin],
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
  },
};
</script>

<style lang="scss" scoped>
.assessment__choices {
  display: flex;
}
</style>


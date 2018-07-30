<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__field-group">
      <div class="assessment__choice">
        <input type="tel" v-model="feet" class="text-center" @input="$emit('answered')">
        <label :for="feet" class="assessment__field-label">feet</label>
      </div>
      <div class="assessment__choice">
        <input type="tel" v-model="inches" class="text-center" @input="$emit('answered')">
        <label :for="inches" class="assessment__field-label">inches</label>
      </div>
      <input type="hidden" v-model="height">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeightField',
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
      return `${this.feet}' ${this.inches}"`;
    },
  },
};
</script>

<style lang="scss" scoped>
.assessment__choices {
  display: flex;
}
</style>


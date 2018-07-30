<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__choices">
      <div
        v-for="(choice, index) in question.choices"
        :key="index"
        class="radio-field assessment__choice"
      >
        <input
          type="radio"
          v-model="localValue"
          :id="choice.value"
          :value="choice.value"
          class="radio-field__input"
          @change="$emit('answered')"
        >
        <label :for="choice.value" class="radio-field__label">{{ choice.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioField',
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
};
</script>

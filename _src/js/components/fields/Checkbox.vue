<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__choices assessment__choices--flex">
      <div
        v-for="(choice, index) in question.choices"
        :key="index"
        class="checkbox-field assessment__choice"
      >
        <input
          type="checkbox" 
          v-model="localValue"
          :id="choice.value"
          :value="choice.value"
          class="checkbox-field__input"
          @change="$emit('answered')"
        >
        <label :for="choice.value" class="checkbox-field__label color-white">{{ choice.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: {
    question: {
      required: true,
    },
  },
  data() {
    return {
      localValue: [],
    };
  },
};
</script>

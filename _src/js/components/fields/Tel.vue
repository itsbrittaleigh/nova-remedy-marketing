<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__choices">
      <input type="tel" v-model="localValue" class="text-center" @input="$emit('answered')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelField',
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

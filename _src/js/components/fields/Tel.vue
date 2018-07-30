<template>
  <div class="assessment__field">
    <p class="assessment__question">{{ question.question }}</p>
    <div class="assessment__choices">
      <input type="tel" v-model="localValue" class="text-center">
    </div>
  </div>
</template>

<script>
import FieldMixin from '../../mixins/FieldMixin.js';

export default {
  name: 'TelField',
  mixins: [FieldMixin],
  data() {
    return {
      localValue: '',
    };
  },
};
</script>

export default {
  props: {
    question: {
      required: true,
    },
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

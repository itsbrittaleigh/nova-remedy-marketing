<template>
  <div class="assessment">
    <p class="assessment__counter">{{ `${currentQuestionHuman} / ${questions.length}` }}</p>
    <div
      class="assessment__section"
      v-for="(question, index) in questions"
      :key="index"
      v-show="index === currentQuestion"
    >
      <component
        :is="`field-${question.type}`"
        :question="question"
        @answered="currentQuestionIsAnswered = true"
      ></component>
    </div>
    <div class="flex-container flex-center m-t-30">
      <div class="assessment__button-container m-r-20">
        <button
          class="assessment__button assessment__button--secondary"
          v-if="currentQuestion !== 0"
          @click="previousQuestion()"
        >
          Previous
        </button>
      </div>
      <div class="assessment__button-container">
        <button
          class="assessment__button"
          v-if="currentQuestionIsAnswered"
          @click="nextQuestion()"
        >
          {{ currentQuestion + 1 === questions.length ? 'Submit' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BloodPressure from './fields/BloodPressure.vue';
import Checkbox from './fields/Checkbox.vue';
import Height from './fields/Height.vue';
import Radio from './fields/Radio.vue';
import Tel from './fields/Tel.vue';

export default {
  name: 'HealthAssessment',
  data() {
    return {
      gender: '',
      age: '',
      weight: '',
      height: '',
      bloodPressure: '',
      healthHistory: '',
      exerciseHabits: '',
      currentQuestion: 0,
      currentQuestionIsAnswered: false,
    };
  },
  components: {
    'field-blood-pressure': BloodPressure,
    'field-checkbox': Checkbox,
    'field-height': Height,
    'field-radio': Radio,
    'field-tel': Tel,
  },
  computed: {
    ...mapGetters([
      'questions',
      'userAnswers',
    ]),
    currentQuestionHuman() {
      return this.currentQuestion + 1;
    },
  },
  methods: {
    nextQuestion() {
      this.storeAnswer();
      this.currentQuestionIsAnswered = false;
      if (this.currentQuestion + 1 < this.questions.length) this.currentQuestion += 1;
      else this.submit();
    },
    previousQuestion() {
      this.currentQuestion -= 1;
    },
    storeAnswer() {
      console.log('stored');
    },
    submit() {
      console.log('submit');
    },
  },
};
</script>

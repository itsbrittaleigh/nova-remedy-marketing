<template>
  <div class="assessment">
    <p class="assessment__counter">{{ `${currentQuestionHuman} / ${questions.length}` }}</p>
    <div
      class="assessment__section"
      v-for="(question, index) in questions"
      :key="index"
      v-show="index === currentQuestionIndex"
    >
      <component
        :is="`field-${question.type}`"
        :question="question"
        @updated="updateAnswer"
      ></component>
    </div>
    <div class="flex-container flex-center m-t-30">
      <div class="assessment__button-container m-r-20">
        <button
          class="assessment__button assessment__button--secondary"
          v-if="currentQuestionIndex !== 0"
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
          {{ currentQuestionIndex + 1 === questions.length ? 'Submit' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BloodPressure from './fields/BloodPressure.vue';
import Checkbox from './fields/Checkbox.vue';
import Height from './fields/Height.vue';
import Radio from './fields/Radio.vue';
import Tel from './fields/Tel.vue';

export default {
  name: 'HealthAssessment',
  data() {
    return {
      currentQuestionIndex: 0,
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
      return this.currentQuestionIndex + 1;
    },
    nextQuestionIndex() {
      return this.currentQuestionIndex + 1;
    },
    previousQuestionIndex() {
      return this.currentQuestionIndex - 1;
    },
  },
  methods: {
    ...mapActions([
      'storeAnswer',
    ]),
    nextQuestion() {
      if (this.questions[this.nextQuestionIndex].userAnswer) this.currentQuestionIsAnswered = true;
      else this.currentQuestionIsAnswered = false;
      
      if (this.nextQuestionIndex < this.questions.length) this.currentQuestionIndex += 1;
      else this.submit();
    },
    previousQuestion() {
      if (this.questions[this.previousQuestionIndex].userAnswer) this.currentQuestionIsAnswered = true;
      else this.currentQuestionIsAnswered = false;

      this.currentQuestionIndex -= 1;
    },
    submit() {
      console.log('submit');
    },
    updateAnswer(value) {
      this.storeAnswer({
        'questionIndex': this.currentQuestionIndex,
        'answer': value,
      });
      if(value) this.currentQuestionIsAnswered = true;
      else this.currentQuestionIsAnswered = false;
    },
  },
};
</script>

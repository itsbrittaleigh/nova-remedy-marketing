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
          {{ lang === 'cn' ? '以前' : 'Previous' }}
        </button>
      </div>
      <div class="assessment__button-container">
        <button
          :class="{
            'assessment__button': true,
            'assessment__button--active': currentQuestionIsAnswered,
          }"
          :disabled="!currentQuestionIsAnswered"
          @click="nextQuestion()"
        >
          <template v-if="lang === 'cn'">
            {{ currentQuestionIndex + 1 === questions.length ? '提交' : '下一个' }}
          </template>
          <template v-else>
            {{ currentQuestionIndex + 1 === questions.length ? 'Submit' : 'Next' }}
          </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Questions from '~/data/health-assessment/Questions';
import BloodPressure from '~/components/fields/BloodPressure.vue';
import Checkbox from '~/components/fields/Checkbox.vue';
import Height from '~/components/fields/Height.vue';
import Radio from '~/components/fields/Radio.vue';
import Tel from '~/components/fields/Tel.vue';

export default {
  props: ['lang'],
  data() {
    return {
      questions: this.lang === 'cn' ? Questions.cn : Questions.en,
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
    userAnswers() {
      let data = {};
      _.forEach(this.questions, (question) => {
        data[question.name] = question.userAnswer;
      });
      return data;
    },
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
    storeAnswer(answer) {
      this.questions[answer.questionIndex].userAnswer = answer.answer;
    },
    nextQuestion() {
      if (this.nextQuestionIndex < this.questions.length) {
        if (this.questions[this.nextQuestionIndex].userAnswer) this.currentQuestionIsAnswered = true;
        else this.currentQuestionIsAnswered = false;
        this.currentQuestionIndex += 1;
      }
      else this.submit();
    },
    previousQuestion() {
      if (this.questions[this.previousQuestionIndex].userAnswer) this.currentQuestionIsAnswered = true;
      else this.currentQuestionIsAnswered = false;
      this.currentQuestionIndex -= 1;
    },
    submit() {
      console.log(this.userAnswers);
      // put in form action
      // ideally the form action would return data and redirect
      window.location = '/health-assessment/results';
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

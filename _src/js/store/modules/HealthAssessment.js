import _ from 'lodash';

const state = {
  questions: [
    {
      name: 'gender',
      question: 'What is your gender?',
      type: 'radio',
      choices: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
      userAnswer: '',
    },
    {
      name: 'age',
      question: 'What is your age?',
      type: 'tel',
      userAnswer: '',
    },
    {
      name: 'weight',
      question: 'What is your weight (in pounds)?',
      type: 'tel',
      userAnswer: '',
    },
    {
      name: 'height',
      question: 'What is your height?',
      type: 'height',
      userAnswer: '',
    },
    {
      name: 'bloodPressure',
      question: 'What is your blood pressure?',
      type: 'blood-pressure',
      userAnswer: '',
    },
    {
      name: 'healthHistory',
      question: 'Which of the following has a doctor diagnosed you with? (select as many as apply)',
      type: 'checkbox',
      choices: [
        {
          label: 'Arthritis',
          value: 'arthritis',
        },
        {
          label: 'Diabetes',
          value: 'diabetes',
        },
        {
          label: 'Endocrine Disorder',
          value: 'endocrine_disorder',
        },
        {
          label: 'Gynecological disorder',
          value: 'gynecological_disorder',
        },
        {
          label: 'Heart Disease',
          value: 'heart_disease',
        },
        {
          label: 'Hypertension',
          value: 'hypertension',
        },
        {
          label: 'Insomnia',
          value: 'insomnia',
        },
        {
          label: 'Lung Disease',
          value: 'lung_disease',
        },
        {
          label: 'Osteoporosis',
          value: 'osteoporosis',
        },
        {
          label: 'Stomach Disease',
          value: 'stomach_disease',
        },
      ],
      userAnswer: [],
    },
    {
      name: 'exercise',
      question: 'How often do you exercise?',
      type: 'radio',
      choices: [
        {
          label: 'Daily',
          value: '6',
        },
        {
          label: '5-6 times per week',
          value: '5',
        },
        {
          label: '3-4 times per week',
          value: '4',
        },
        {
          label: '1-2 times per week',
          value: '3',
        },
        {
          label: 'No regular schedule',
          value: '2',
        },
        {
          label: 'Rarely',
          value: '1',
        },
        {
          label: 'Never',
          value: '0',
        },
      ],
      userAnswer: '',
    },
  ],
};

const getters = {
  questions: state => state.questions,
  userAnswers: (state) => {
    let data = {};
    _.forEach(state.questions, (question) => {
      data[question.name] = question.userAnswer;
    });
    return data;
  },
};

const actions = {
  storeAnswer(context, answer) {
    context.commit('storeAnswer', answer);
  },
};

const mutations = {
  storeAnswer(state, answer) {
    state.questions[answer.questionIndex].userAnswer = answer.answer;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

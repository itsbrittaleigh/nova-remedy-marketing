const QUESTIONS = {
  en: [
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
    // {
    //   name: 'weight',
    //   question: 'What is your weight (in pounds)?',
    //   type: 'tel',
    //   userAnswer: '',
    // },
    // {
    //   name: 'height',
    //   question: 'What is your height?',
    //   type: 'height',
    //   userAnswer: '',
    // },
    // {
    //   name: 'bloodPressure',
    //   question: 'What is your blood pressure?',
    //   type: 'blood-pressure',
    //   userAnswer: '',
    // },
    {
      name: 'healthHistory',
      question: 'Which of the following would you like help with? (select as many as apply)',
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
        {
          label: 'Weight Loss',
          value: 'weight_loss',
        },
      ],
      userAnswer: [],
    },
    // {
    //   name: 'exercise',
    //   question: 'How often do you exercise?',
    //   type: 'radio',
    //   choices: [
    //     {
    //       label: 'Daily',
    //       value: '6',
    //     },
    //     {
    //       label: '5-6 times per week',
    //       value: '5',
    //     },
    //     {
    //       label: '3-4 times per week',
    //       value: '4',
    //     },
    //     {
    //       label: '1-2 times per week',
    //       value: '3',
    //     },
    //     {
    //       label: 'No regular schedule',
    //       value: '2',
    //     },
    //     {
    //       label: 'Rarely',
    //       value: '1',
    //     },
    //     {
    //       label: 'Never',
    //       value: '0',
    //     },
    //   ],
    //   userAnswer: '',
    // },
  ],
  cn: [
    {
      name: 'gender',
      question: '你的性别是什么？',
      type: 'radio',
      choices: [
        {
          label: '男',
          value: 'male',
        },
        {
          label: '女',
          value: 'female',
        },
        {
          label: '其他',
          value: 'other',
        },
      ],
      userAnswer: '',
    },
    {
      name: 'age',
      question: '你几岁？',
      type: 'tel',
      userAnswer: '',
    },
    // {
    //   name: 'weight',
    //   question: '你的体重（磅）是多少？',
    //   type: 'tel',
    //   userAnswer: '',
    // },
    // {
    //   name: 'height',
    //   question: '你身高多少？',
    //   type: 'height',
    //   userAnswer: '',
    // },
    // {
    //   name: 'bloodPressure',
    //   question: '你的血压是多少？',
    //   type: 'blood-pressure',
    //   userAnswer: '',
    // },
    {
      name: 'healthHistory',
      question: '以下哪位医生诊断过你？ （选择尽可能多的申请）',
      type: 'checkbox',
      choices: [
        {
          label: '关节炎',
          value: 'arthritis',
        },
        {
          label: '糖尿病',
          value: 'diabetes',
        },
        {
          label: '内分泌紊乱',
          value: 'endocrine_disorder',
        },
        {
          label: '妇科疾病',
          value: 'gynecological_disorder',
        },
        {
          label: '心脏病',
          value: 'heart_disease',
        },
        {
          label: '高血压',
          value: 'hypertension',
        },
        {
          label: '失眠',
          value: 'insomnia',
        },
        {
          label: '肺部疾病',
          value: 'lung_disease',
        },
        {
          label: '骨质疏松',
          value: 'osteoporosis',
        },
        {
          label: '胃病',
          value: 'stomach_disease',
        },
        {
          label: '减肥',
          value: 'weight_loss',
        },
      ],
      userAnswer: [],
    },
    // {
    //   name: 'exercise',
    //   question: '你多久锻炼一次？',
    //   type: 'radio',
    //   choices: [
    //     {
    //       label: '日常',
    //       value: '6',
    //     },
    //     {
    //       label: '每周5-6次',
    //       value: '5',
    //     },
    //     {
    //       label: '每周3-4次',
    //       value: '4',
    //     },
    //     {
    //       label: '每周1-2次',
    //       value: '3',
    //     },
    //     {
    //       label: '没有定期的时间表',
    //       value: '2',
    //     },
    //     {
    //       label: '很少',
    //       value: '1',
    //     },
    //     {
    //       label: '决不',
    //       value: '0',
    //     },
    //   ],
    //   userAnswer: '',
    // },
  ]
};

export default QUESTIONS;
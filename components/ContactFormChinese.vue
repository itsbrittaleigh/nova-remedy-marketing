<template>
  <div class="form-container">
    <div class="wrapper">
      <template v-if="!wasSuccessful">
        <ul
          v-if="errors.length > 0"
          class="is-marginless m-b-30"
        >
          <li
            v-for="(error, index) in errors"
            :key="index"
            class="text-center color-red"
          >
            {{ error }}
          </li>
        </ul>
        <form @submit.prevent="checkForm">
          <div class="fields">
            <div class="field">
              <label for="first_name">名字</label>
              <input type="text" v-model="contact.firstName">
            </div>
            <div class="field">
              <label for="last_name">姓</label>
              <input type="text" v-model="contact.lastName">
            </div>
            <div class="field">
              <label for="email">电子邮件</label>
              <input type="email" v-model="contact.email">
            </div>
            <div class="field">
              <label for="phone">电话号码</label>
              <input type="tel" v-model="contact.phone">
            </div>
            <div class="field">
              <label>我们能帮到你什么</label>
              <div class="checkboxes">
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.helpCategory"
                    id="product_support"
                    value="Product Support"
                    class="checkbox-field__input"
                  >
                  <label for="product_support" class="checkbox-field__label">产品支持</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.helpCategory"
                    id="medical"
                    value="Medical"
                    class="checkbox-field__input"
                  >
                  <label for="medical" class="checkbox-field__label">医</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.helpCategory"
                    id="business"
                    value="Business"
                    class="checkbox-field__input"
                  >
                  <label for="business" class="checkbox-field__label">商业</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.helpCategory"
                    id="careers"
                    value="Careers"
                    class="checkbox-field__input"
                  >
                  <label for="careers" class="checkbox-field__label">职业生涯</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.helpCategory"
                    id="other"
                    value="Other"
                    class="checkbox-field__input"
                  >
                  <label for="other" class="checkbox-field__label">其他</label>
                </div>
              </div>
            </div>
            <div class="field">
              <label>我是一个:</label>
              <div class="checkboxes">
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.userType"
                    id="nursing"
                    value="Nursing Home Employer"
                    class="checkbox-field__input"
                  >
                  <label for="nursing" class="checkbox-field__label">养老院雇主</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.userType"
                    id="student"
                    value="Student"
                    class="checkbox-field__input"
                  >
                  <label for="student" class="checkbox-field__label">学生</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.userType"
                    id="investor"
                    value="Investor"
                    class="checkbox-field__input"
                  >
                  <label for="investor" class="checkbox-field__label">投资者</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.userType"
                    id="admin"
                    value="Hospital Administrator"
                    class="checkbox-field__input"
                  >
                  <label for="admin" class="checkbox-field__label">医院管理员</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.userType"
                    id="physician"
                    value="Physician"
                    class="checkbox-field__input"
                  >
                  <label for="physician" class="checkbox-field__label">医师</label>
                </div>
                <div class="checkbox-field">
                  <input
                    type="checkbox" 
                    v-model="contact.userType"
                    id="media"
                    value="Media"
                    class="checkbox-field__input"
                  >
                  <label for="media" class="checkbox-field__label">媒体</label>
                </div>
              </div>
            </div>
            <div class="field">
              <label for="message">信息</label>
              <textarea v-model="contact.message"></textarea>
            </div>
          </div>
          <div class="flex-container flex-right">
            <button type="submit">提交</button>
          </div>
        </form>
      </template>
      <p v-else class="text-center">谢谢。 您的申请已经提交。</p>
      <p v-if="errorOccurred">对不起，发生了错误。 请稍后再试。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        helpCategory: [],
        userType: [],
        message: '',
      },
      errors: [],
      wasSuccessful: false,
      errorOccurred: false,
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.contact.firstName) {
        this.errors.push('名字是必需的');
      }
      if (!this.contact.lastName) {
        this.errors.push('姓氏是必需的');
      }
      if (!this.contact.email) {
        this.errors.push('需要电子邮件');
      } else if (!this.validEmail(this.contact.email)) {
        this.errors.push('需要有效的电子邮件');
      }
      if (!this.contact.phone) {
        this.errors.push('电话号码是必需的');
      } else if (!this.validPhone(this.contact.phone)) {
        this.errors.push('需要有效的电话号码');
      }
      if (!this.contact.helpCategory.length === 0) {
        this.errors.push('让我们知道我们可以为您提供哪些帮助');
      }
      if (!this.contact.userType.length === 0) {
        this.errors.push('让我们知道你是谁');
      }
      if (!this.contact.message) {
        this.errors.push('需要一条消息');
      }

      if (this.errors.length) e.preventDefault();
      else this.submitForm();
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone(phone) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(phone);
    },
    submitForm() {
      const config = { headers: { 'Content-Type': 'application/json' } };
      axios
        .post(
          '',
          JSON.stringify(this.contact),
          config,
        )
        .then(this.wasSuccessful = true)
        .catch(this.errorOccurred = true);
    },
  },
};
</script>

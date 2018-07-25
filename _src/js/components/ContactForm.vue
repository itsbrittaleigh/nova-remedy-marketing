<template>
  <div class="form-container">
    <div class="wrapper">
      <ul v-if="errors.length > 0">
        <li
          v-for="(error, index) in errors"
          :key="index"
        >
          {{ error }}
        </li>
      </ul>
      <form @submit.prevent="submitForm">
        <div class="fields">
          <div class="field">
            <label for="first_name">First name</label>
            <input type="text" v-model="contact.firstName">
          </div>
          <div class="field">
            <label for="last_name">Last name</label>
            <input type="text" v-model="contact.lastName">
          </div>
          <div class="field">
            <label for="email">E-mail</label>
            <input type="email" v-model="contact.email">
          </div>
          <div class="field">
            <label for="phone">Phone number</label>
            <input type="tel" v-model="contact.phone">
          </div>
          <div class="field">
            <label>What can we help you with?</label>
            <div class="checkboxes">
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.helpCategory"
                  id="product_support"
                  value="Product Support"
                  class="checkbox-field__input"
                >
                <label for="product_support" class="checkbox-field__label">Product Support</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.helpCategory"
                  id="medical"
                  value="Medical"
                  class="checkbox-field__input"
                >
                <label for="medical" class="checkbox-field__label">Medical</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.helpCategory"
                  id="business"
                  value="Business"
                  class="checkbox-field__input"
                >
                <label for="business" class="checkbox-field__label">Business</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.helpCategory"
                  id="careers"
                  value="Careers"
                  class="checkbox-field__input"
                >
                <label for="careers" class="checkbox-field__label">Careers</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.helpCategory"
                  id="other"
                  value="Other"
                  class="checkbox-field__input"
                >
                <label for="other" class="checkbox-field__label">Other</label>
              </div>
            </div>
          </div>
          <div class="field">
            <label>I am a/an:</label>
            <div class="checkboxes">
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.userType"
                  id="nursing"
                  value="Nursing Home Employer"
                  class="checkbox-field__input"
                >
                <label for="nursing" class="checkbox-field__label">Nursing Home Employer</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.userType"
                  id="student"
                  value="Student"
                  class="checkbox-field__input"
                >
                <label for="student" class="checkbox-field__label">Student</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.userType"
                  id="investor"
                  value="Investor"
                  class="checkbox-field__input"
                >
                <label for="investor" class="checkbox-field__label">Investor</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.userType"
                  id="admin"
                  value="Hospital Administrator"
                  class="checkbox-field__input"
                >
                <label for="admin" class="checkbox-field__label">Hospital Administrator</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.userType"
                  id="physician"
                  value="Physician"
                  class="checkbox-field__input"
                >
                <label for="physician" class="checkbox-field__label">Physician</label>
              </div>
              <div class="checkbox-field">
                <input
                  type="checkbox" 
                  v-model="contact.userType"
                  id="media"
                  value="Media"
                  class="checkbox-field__input"
                >
                <label for="media" class="checkbox-field__label">Media</label>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea v-model="contact.message"></textarea>
          </div>
        </div>
        <div class="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      <p v-if="wasSuccessful">Your request has been submitted.</p>
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
    };
  },
  methods: {
    submitForm() {
      const config = { headers: { 'Content-Type': 'application/json' } };
      axios
        .post(
          '',
          JSON.stringify(this.contact),
          config,
        )
        .then((this.wasSuccessful = true));
    },
  },
};
</script>

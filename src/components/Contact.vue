<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <form
      class="flex-col-ai-c"
      @submit.prevent="onSubmit"
    >
      <div class="contact__field flex-col-jc-se">
        <label>Forename</label>
        <input
          v-model="formFields.forename"
          name="FORENAME"
          type="text"
          placeholder="Forename"
          @change="validateForm"
        >
        <span
          class="contact__error"
        >{{ fieldErrors.forename }}</span>
      </div>
      <div class="contact__field flex-col-jc-se">
        <label>Name</label>
        <input
          v-model="formFields.name"
          name="NAME"
          type="text"
          placeholder="Name"
          @change="validateForm"
        >
        <span
          class="contact__error"
        >{{ fieldErrors.name }}</span>
      </div>
      <div class="contact__field flex-col-jc-se">
        <label>E-Mail</label>
        <input
          v-model="formFields.email"
          name="EMAIL"
          type="text"
          placeholder="E-Mail"
          @change="validateForm"
        >
        <span
          class="contact__error"
        >{{ fieldErrors.email }}</span>
      </div>
      <div class="contact__field flex-col-jc-se">
        <label>Message</label>
        <textarea
          v-model="formFields.message"
          name="MESSAGE"
          placeholder="Add message here"
          @change="validateForm"
        />
        <span
          class="contact__error"
        >{{ fieldErrors.message }}</span>
      </div>

      <button :disabled="disableSend">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactVue',
  props: {
    display: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isContactActive: false,
      disableSend: false,
      fieldErrors: {
        forename: undefined,
        name: undefined,
        email: undefined,
        message: undefined,
      },
      formFields: {
        forename: '',
        name: '',
        email: '',
        message: '',
      },
    };
  },
  watch: {
    display() {
      if (this.display === 'none') {
        this.formFields = {
          forename: '',
          name: '',
          email: '',
          message: '',
        };
        this.fieldErrors = {};

        this.disableSend = false;
      }
    },
  },
  methods: {
    onSubmit() {
      this.validateForm('Send');

      if (Object.keys(this.fieldErrors).length) this.disableSend = true;
      if (Object.keys(this.fieldErrors).length === 0) {
        alert(JSON.stringify(this.formFields));
        this.formFields = {
          forename: '',
          name: '',
          email: '',
          message: '',
        };
        this.fieldErrors = {};

        this.disableSend = false;

        this.$emit('closeModal');
      }
    },
    validateForm(source) {
      if (source === 'Send' || this.disableSend) {
        const errors = {};

        if (!this.formFields.forename) {
          errors.forename = 'Forename Required';
        }
        if (!this.formFields.name) {
          errors.name = 'Name Required';
        }
        if (!this.formFields.email) {
          errors.email = 'Email Required';
        }
        if (!this.formFields.message) {
          errors.message = 'Message Required';
        }

        if (this.formFields.email
        && !this.isEmail(this.formFields.email)) {
          errors.email = 'Invalid Email';
        }

        if (Object.keys(errors).length === 0) this.disableSend = false;

        this.fieldErrors = errors;
      }
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

</style>

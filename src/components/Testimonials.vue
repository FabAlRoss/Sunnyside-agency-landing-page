<template>
  <section class="testimonial flex flex-col flex-ai-c">
    <h1>Client testimonials</h1>
    <div
      v-if="!mobile"
      ref="customers"
      class="customers flex flex-jc-se flex-ai-c"
    >
      <img
        src="../assets/images/chevron-left.svg"
        alt="chevron-left"
        class="chevron"
        @click="next"
      >
      <div
        ref="inner"
        class="inner"
        :style="{ width: innerWidth + 'px' }"
      >
        <div
          v-for="(customer,index) in customers"
          :key="index"
          class="customer"
          :style="innerStyles[index]"
        >
          <customer-section :customer="customer" />
        </div>
      </div>
      <img
        src="../assets/images/chevron-right.svg"
        alt="chevron-right"
        class="chevron"
        @click="prev"
      >
    </div>
    <div
      v-if="mobile"
      ref="customers"
      class="customers-mobile flex flex-jc-se flex-ai-c"
    >
      <div
        v-for="(customer,index) in customers"
        :key="index"
        class="customer"
      >
        <customer-section :customer="customer" />
      </div>
    </div>
  </section>
</template>

<script>
import CustomerSection from './Customer.vue';

export default {
  name: 'TestimonialSection',
  components: {
    CustomerSection,
  },
  data() {
    return {
      cards: 3,
      innerStyles: [],
      resetStyles: [],
      innerWidth: '1320',
      padding: 100,
      step: 440,
      transitioning: false,
      mobile: false,
      customers: [
        {
          name: 'Jennie F.',
          job: 'Business Owner',
          text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
          picture: 'image-jennie.jpg',
        },
        {
          name: 'Emily R.',
          job: 'Marketing Director',
          text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
          picture: 'image-emily.jpg',
        },
        {
          name: 'Thomas S.',
          job: 'Chief Operating Officer',
          text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
          picture: 'image-thomas.jpg',
        },
        {
          name: 'Jennie F.',
          job: 'Business Owner',
          text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
          picture: 'image-jennie.jpg',
        },
        {
          name: 'Emily R.',
          job: 'Marketing Director',
          text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
          picture: 'image-emily.jpg',
        },
      ],
    };
  },

  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },

  watch: {
    windowWidth() {
      let cards = Math.floor((this.$refs.customers.clientWidth - 2 * this.padding) / this.step);
      console.log(cards);

      if (cards > 3) cards = 3;
      this.cards = cards;

      if (cards <= 1 && this.mobile === false) {
        this.customers.shift();
        this.customers.pop();
      }

      if (cards > 1 && this.mobile === true) {
        const firstCustomer = this.customers[0];
        const lastCustomer = this.customers[this.customers.length - 1];

        this.customers.push(firstCustomer);
        this.customers.unshift(lastCustomer);
      }

      if (cards <= 1) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }

      this.innerWidth = `${cards * this.step}`;
    },
  },

  created() {
    const styles = [];

    for (let i = 0; i < this.customers.length; i += 1) {
      let opacity = '1';

      if (i === 0 || i === this.customers.length - 1) opacity = '0';
      if (this.customers.length > 3 && i > 3) opacity = '0';

      styles.push({
        translate: '-440px 0',
        opacity,
      });
    }

    this.innerStyles = styles;
    this.resetStyles = styles.map((item) => Object.assign(item, { transition: 'none' }));
  },

  mounted() {
    let cards = Math.floor((this.$refs.customers.clientWidth - 2 * this.padding) / this.step);
    if (cards > 3) cards = 3;

    this.cards = cards;
    this.innerWidth = `${cards * this.step}`;
  },

  methods: {
    setStep() {
      console.log(`${this.$refs.inner.children[0].clientWidth}`);
      console.log(`${this.$refs.inner.clientWidth}px`);
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;
      this.moveLeft();

      this.afterTransition(() => {
        this.customers.shift();
        const customer = this.customers[1];
        this.customers.push(customer);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;
      this.moveRight();

      this.afterTransition(() => {
        this.customers.pop();
        const customer = this.customers[this.customers.length - 2];
        this.customers.unshift(customer);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      const styles = [];

      for (let i = 0; i < this.customers.length; i += 1) {
        let opacity = '1';

        if (i < 2) opacity = '0';
        if (i > this.cards + 2) opacity = '0';

        styles.push({
          translate: '-440px 0',
          transform: `translateX(-${this.step}px)`,
          opacity,
        });
      }

      this.innerStyles = styles;
    },

    moveRight() {
      const styles = [];

      for (let i = 0; i < this.customers.length; i += 1) {
        let opacity = '0';

        if (i < this.cards) opacity = '1';

        styles.push({
          translate: '-440px 0',
          transform: `translateX(${this.step}px)`,
          opacity,
        });
      }

      this.innerStyles = styles;
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener('transitionend', listener);
      };
      this.$refs.inner.addEventListener('transitionend', listener);
    },

    resetTranslate() {
      this.innerStyles = this.resetStyles;
    },
  },
};
</script>

<style lang="scss" scoped>
    @import "../scss/style.scss";

    .inner {
      @include breakpoint-up(large){
          white-space: nowrap;
          flex-direction: row;
          overflow: hidden;
      }
    }

</style>

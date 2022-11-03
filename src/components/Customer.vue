<template>
  <div class="flex flex-col flex-ai-c">
    <img
      class="customer-image"
      :src="require('../assets/images/' + customer.picture)"
      :alt="customer.name"
    >
    <div class="customer-text">
      {{ customer.text }}
    </div>
    <div class="customer-name">
      {{ customer.name }}
    </div>
    <div class="customer-job">
      {{ customer.job }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerSection',
  props: {
    customer: {
      type: Object,
      default() {
        return {
          name: 'DefaultName',
          job: 'DefaultJob',
          text: 'DefaultText',
          picture: '',
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
    @import "../scss/style.scss";
</style>

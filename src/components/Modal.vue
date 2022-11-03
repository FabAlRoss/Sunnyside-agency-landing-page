<template>
  <div
    :class="type"
  >
    <div class="flex flex-col">
      <span
        :class="`${type}-close`"
        @click="closeModal"
      >&times;</span>

      <slot>
        Placeholder!
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalVue',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.contactModal {
    display: none;
    position: fixed;
    z-index: 1;
    right: 0;
    top: 75px;
    width: 500px;
    // height: 60%;
    height: fit-content;
    overflow: auto;
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding-left: 30px;
    padding-right: 30px;

    @include breakpoint-down(medium){
        width: 375px;
        background-color: rgba(255, 255, 255, 1.0);
    }

    &-close {
      color: $veryDarkGrayishBlue;
      display: flex;
      justify-content: flex-end;
      font-size: 50px;
      font-weight: bold;
      line-height: 0.8;
      margin-top: 10px;
    }

    &-close:hover,
    &-close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
}

.galleryModal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);

    &-content {
        flex-direction: column;
    }

    &-close {
        color: $white;
        display: flex;
        align-self: flex-end;
        font-size: 50px;
        font-weight: bold;
        margin-top: 20x;
        margin-right: 30px;
    }

    &-close:hover,
    &-close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>

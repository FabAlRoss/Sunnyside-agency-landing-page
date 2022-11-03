<template>
  <div>
    <section class="gallery">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="require(`@/assets/${imagePath(index)}`)"
        :alt="image.name"
        @click="showModal(index)"
      >
    </section>
    <modal-vue
      :type="'galleryModal'"
      :style="{ display: display }"
      @closeModal="hideModal"
    >
      <img
        class="gallery__modalImage"
        :src="require(`@/assets/${imagePath(currentImage)}`)"
        :alt="images[currentImage].name"
        @click="hideModal"
      >
    </modal-vue>
  </div>
</template>

<script>
import ModalVue from './Modal.vue';

export default {
  name: 'GallerySection',
  components: {
    ModalVue,
  },
  data() {
    return {
      display: 'none',
      currentImage: 0,
      images: [
        {
          name: 'milkbottles',
          desktop: 'images/desktop/image-gallery-milkbottles.jpg',
          mobile: 'images/mobile/image-gallery-milkbottles.jpg',
        },
        {
          name: 'orange',
          desktop: 'images/desktop/image-gallery-orange.jpg',
          mobile: 'images/mobile/image-gallery-orange.jpg',
        },
        {
          name: 'cone',
          desktop: 'images/desktop/image-gallery-cone.jpg',
          mobile: 'images/mobile/image-gallery-cone.jpg',
        },
        {
          name: 'sugarcubes',
          desktop: 'images/desktop/image-gallery-sugar-cubes.jpg',
          mobile: 'images/mobile/image-gallery-sugar-cubes.jpg',
        },
      ],
    };
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
  methods: {
    showModal(index) {
      this.display = 'block';
      this.currentImage = index;
    },
    hideModal() {
      this.display = 'none';
      this.currentImage = 0;
    },
    imagePath(index) {
      let path = this.images[index].mobile;
      if (this.windowWidth >= 640) path = this.images[index].desktop;
      return path;
    },
    cssGridCol() {
      if (this.windowWidth >= 640) return { '--cols': 4 };
      return { '--cols': 2 };
    },
  },
};
</script>

<style lang="scss" scoped>
    @import "../scss/style.scss";

</style>

<template>
  <section class="about">
    <div
      class="about__grid"
    >
      <div class="banner__brand" />
      <div class="about__text">
        <div class="about__title">
          Transform your brand
        </div>
        <div class="about__description">
          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.
          <a
            class="about__brandlink"
            href="#"
          >Learn more</a>
        </div>
      </div>
    </div>
    <div
      class="about__grid"
    >
      <div class="banner__audience" />
      <div class="about__text">
        <div class="about__title">
          Stand out to the right audience
        </div>
        <div class="about__description">
          Using a collaborative formula of designers, researchers, photographers,
          videographers, and copywriters, we’ll build and extend your brand in digital places.
          <a
            class="about__audiencelink"
            href="#"
          >Learn more</a>
        </div>
      </div>
    </div>
    <div class="design flex">
      <div class="design__graphic flex  flex-ai-b">
        <div class="design__text flex flex-ai-c">
          <div class="design__title">
            Graphic design
          </div>
          <div class="design__description">
            Great design makes you memorable. We deliver artwork that underscores your
            brand message and captures potential clients’ attention.
          </div>
        </div>
      </div>
      <div class="design__photography flex flex-ai-b">
        <div class="design__text flex flex-ai-c">
          <div class="design__title">
            Photography
          </div>
          <div class="design__description">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style lang="scss">
    @import "../scss/style.scss";
</style>

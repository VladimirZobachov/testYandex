<template>
    <ImgComparisonSlider class="main__about-me-avatar">
      <!-- eslint-disable -->
      <img
        slot="first"
        style="display: block;-webkit-user-select: none;"
        className="main__about-me-avatar"
        src="../../images/avatar.jpg"
      />
      <img
        slot="second"
        className="main__about-me-avatar"
        src="../../images/avatar1.jpg"
      />
      <!-- eslint-enable -->
    </ImgComparisonSlider>
  </template>
  
  <script>
  import { ImgComparisonSlider } from '@img-comparison-slider/vue';
  
  export default {
    name: 'ExampleComponent',
    components: {
      ImgComparisonSlider,
    },
  };
  </script>

<style scoped>
.main__about-me-avatar{
    display: grid;
    grid-area: avatar;
    width: 75%;
    border-radius: 10px;
    overflow: hidden;
    outline: none;
}
</style>
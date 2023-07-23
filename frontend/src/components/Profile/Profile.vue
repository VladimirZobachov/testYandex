<script setup>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
</script>

<template>
    <Header />
    <section class="movies">
        <div class="video-container">
            <iframe :src="screencastUrl" frameborder="0" allowfullscreen></iframe>
        </div>
    </section>
    <Footer />
</template>

<script>
export default {
  data() {
    return {
      githubUrl: 'https://github.com/VladimirZobachov', // Replace with your GitHub repository URL
      screencastUrl: 'https://youtu.be/nyJ3NIdFHYU', // Replace with your video screencast URL
      feedback: ''
    }
  },
  methods: {
    submitFeedback() {
      // You can send the feedback data to your backend or perform any other action here
      console.log(this.feedback);
    }
  }
}
</script>

<style scoped>
@import url('./Profile.css');
</style>

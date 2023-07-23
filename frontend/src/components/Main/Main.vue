<script setup>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
import Promo from './Promo/Promo.vue'
import AboutProject from './AboutProject/AboutProject.vue'
import Techs from './Techs/Techs.vue'
import AboutMe from './AboutMe/AboutMe.vue'
import Portfolio from './Portfolio/Portfolio.vue'
</script>

<template>
    <Header/>
    <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
    </main>
    <Footer/>
</template>

<style>
@import url('./Main.css');
</style>
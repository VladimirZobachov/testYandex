<template>
    <header class="header">
      <ul class="header__navigation">
        <li class="header__navigation-item">
          <a href="/"><img :src="logo" alt="лого" /></a>
        </li>
        <li class="header__navigation-item header__navigation-item_button-register">
          <a :href="githubUrl" target="_blank" class="link" v-if="showExitAndSendMessage">Ссылочка на исходный код проекта</a>        
          <router-link v-if="showRegisterAndLogin" to="/signup">Регистрация</router-link>
        </li>
        <li class="header__navigation-item">
          <router-link v-if="showRegisterAndLogin" to="/signin">
            <button type="button" class="header__navigation-button-signin">Войти</button>
          </router-link>
          <router-link v-if="showExitAndSendMessage" to="/popup">
            <button type="button" class="header__navigation-button-signin">Связь</button>
          </router-link>
        </li>
      </ul>
    </header>
</template>

<script>
import logo from '../../images/logo.svg'

export default {
    data() {
        return {
            githubUrl: 'https://github.com/VladimirZobachov',
            logo: logo
        };
    },
    computed: {
      showRegisterAndLogin() {
        return this.$route.path === '/'
      },
      showExitAndSendMessage() {
        return this.$route.path === '/profile'
      }
    }
};
</script>

<style scoped>
    @import url('./Navigation.css');
</style>
                
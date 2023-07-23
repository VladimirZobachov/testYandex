<template>
    <header className="form__header">
        <ul className="form__header-list">
            <li className="form__header-item"><a href="/"><img :src="logo" alt="лого" /></a></li>
            <li className="form__header-item"><h1 className="form__header-title">Рады видеть!</h1></li>
        </ul>
    </header>
    <main className="main">
        <form className="form" @submit.prevent="login">
            <section className="form__body">
                <ul className="form__body-list">
                    <li className="form__body-item">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" v-model="email"/>
                    </li>
                    <li className="form__body-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" v-model="password"/>
                    </li>
                </ul>
            </section>
            <section className="form__footer">
                <ul className="form__footer-list">
                    <li className="form__footer-item">
                        <button type="submit" className="form__footer-button-register">Войти</button>
                    </li>
                    <li className="form__footer-item">
                        <span className="form__footer-question">Ещё не зарегистрированы?</span>
                        <a href="/signup" className="form__footer-link">Регистрация</a>
                    </li>
                </ul>
            </section>
        </form>
    </main>
</template>

<script>
import logo from '../../images/logo.svg'

export default {
    data() {
    return {
      logo: logo,
      email: '',
      password: ''
    }
  },
    methods: {
    login() {
      // make a POST request to the API
      const url = 'http://localhost:3001/signin';
      const data = {
        email: this.email,
        password: this.password
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if(response.ok){
            console.log(data);
            console.log(response.json());
            this.$router.push('/profile');
        } else {
            alert('Authorization failed');
        }
        
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred');
      });
    }
  }
};
</script>

<style>
@import url('./Login.css');
</style>
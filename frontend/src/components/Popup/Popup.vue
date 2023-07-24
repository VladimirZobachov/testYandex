<script setup>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
</script>

<template>
  <Header/>
    <div class="popup popup_opened" @submit="onSubmit">
      <div class="popup__content-edit">
        <button aria-label="Close" type="button" class="popup__close-button" @click="onClose"></button>
        <h2 class="popup__header">Обратная связь</h2>
        <form class="popup__form popup__form-edit" :name="name" @submit="onSubmit">
            <section className="form__body">
                <ul className="form__body-list">
                    <li className="form__body-item">
                        <label htmlFor="topic">Тема сообщения</label>
                        <input type="text" name="topic" id="topic" v-model="topic"/>
                    </li>
                    <li className="form__body-item">
                        <label htmlFor="message">Ваше сообщение</label>
                        <textarea type="text" name="message" id="message" rows="10" style="resize: none;" v-model="message"/>
                    </li>
                </ul>
            </section>
            <button aria-label="saveForm" type="submit" class="popup__button">Отправить</button>
        </form>
      </div>
    </div>
    <main className="main">
      <div id="message-container"></div>
    </main>
    <Footer/>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      titleButton: {
        type: String,
        required: true
      }
    },
    methods: {
      onClose() {
        const popup = document.querySelector('.popup');
        popup.classList.remove('popup_opened');
      },
      onSubmit(event) {
        const messageContainer = document.getElementById('message-container');
        const popup = document.querySelector('.popup');
        event.preventDefault();
        popup.classList.remove('popup_opened');
        messageContainer.innerHTML = 'Благодарим за ваше обращение! Ваше сообщение успешно доставлено.';
        this.$emit('submit');
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('../Profile/Profile.css');
  @import url('./Popup.css');
  </style>
  
<template>
    <div class="popup popup_opened">
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
        event.preventDefault();
        this.$emit('submit');
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('../Profile/Profile.css');
 .popup{
    display: grid;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: visibility 1s, opacity 1s linear;
    opacity: 0;
    visibility: hidden;
    align-items: center;
    justify-content: center;
}
  
.popup__content-edit{
    position: relative;
    max-width: 430px;
    min-width: 430px;
    min-height: 330px;
    background-color: white;
    border-radius: 10px;
    padding: 36px;
    box-sizing: border-box;
}
@media all and (max-width: 521px){
    .popup__content-edit{
        min-width: 282px;
        padding: 23px;
    }
}
  .popup_opened{
    display: grid;
    opacity: 1;
    visibility: visible;
}
  
.popup__close-button{
    position: absolute;
    top: -40px;
    right: -40px;
    width: 32px;
    height: 32px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    background-image: url("../../images/close_icon.svg");
    background-size: cover;
}
.popup__close-button:hover{
    opacity: 0.6;
}
@media all and (max-width: 629px){
    .popup__close-button{
        right: 0;
        width: 20px;
        height: 20px;
    }
}
  
.popup__header{
    font-family: "Inter", "Arial ", sans-serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 29px;
    margin: 0;
}
@media all and (max-width: 521px){
    .popup__header{
        font-size: 18px;
    }
}
  
  .popup__button{
    width: 100%;
    min-height: 50px;
    background-color: black;
    margin: 15px auto 0;
    border-style: none;
    color: white;
    font-family: "Inter", "Arial ", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
    border-radius: 2px;
}
.popup__button:hover{
    opacity: 0.8;
}
@media all and (max-width: 629px){
    .popup__button{
        font-size: 14px;
    }
}
  </style>
  
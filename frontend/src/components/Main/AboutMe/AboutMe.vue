<script setup>
import ExampleComponent from '../../ComparisonSlider/ComparisonSlider.vue'
</script>

<template>
    <section className="main__about-me" id="about-me">
        <h2 className="main__section-title">Наставник</h2>
        <div className="main__about-me-content">
            <ExampleComponent/>
            <div className="main__about-me-info">
                <h3 className="main__about-me-info-title">Владимир</h3>
                <p className="main__about-me-info-subtitle">Бэкенд разработчик, 37 лет</p>
                <p className="main__about-me-info-description">
                    Когда я был ребенком, компьютеры и программирование меня поражали. 
                    Интерес к ним привел к изучению компьютерной науки в университете. 
                    Создание кода, который оживлял компьютер, было для меня волшебным. 
                    Узнавал новые языки, изучал алгоритмы и структуры данных. 
                    Программирование стало способом выражения творческой стороны. 
                    Решение сложных задач и создание нового доставляло удовлетворение. 
                    Мне нравится создавать полезные и интересные приложения с помощью кода. 
                    Все это сочетает творчество и вызов для ума.
                </p>
                <ul className="main__about-me-info-social-list">
                    <li className="main__about-me-info-social-item"><a href="https://t.me/zobachov">Telegram</a></li>
                    <li className="main__about-me-info-social-item"><a href="https://github.com/VladimirZobachov/">Github</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import avatar from '../../../images/avatar.jpg'

export default {
    name: 'Navigation',
    data() {
        return {
            avatar: avatar
        };
    }
};
</script>

<style scoped>
@import url('./AboutMe.css');
</style>
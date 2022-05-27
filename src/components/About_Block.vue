<template>
    <div id="HomeAbout" class="container wrapper">
        <div class="card-container">
             <Card 
            v-for="data of card_data"
            v-bind:data="data"
            v-bind:key="data.id"
        />
        </div>
        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter">
            <img class="card__img big-card__img" src="@/assets/images/03_block_01_img.png"  alt="img">
        </transition>
    </div>
   
</template>

<script>
import Card from '@/components/About_Block_card.vue' 
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
    data(){
        return {
            card_data: [
                {id: 0, title: 'Больше и глубже', url: '/vk', content: 'В моей деятельности от глубины личного контакта зависит эффективность совместного труда и качество результата. Поэтому, если у тебя есть педагогический заказ или партнёрское предложение, предлагаю сразу связаться со мной. <br />Я открыт и отвечаю на вопросы. <br />Готов ко встрече в Санкт-Петербурге.' },
                {id: 1, title: '', url: '/blog', content: 'Также можно ознакомиться в блоге Tumblr "Педагог без образования" с моими наблюдениями и инсайтами, сделанными во время самообучения и исследования, узнать о событиях и мероприятиях с моим участием, соотнести прогнозы и планы с результатами, вникнуть в размышления о происходящем в мире и в около-образовательной среде.'},
            ],
            
        }
    },
    components: {
        Card
    },
    setup () {
        const beforeEnter = (el) => {
            el.style.transform = 'translateY(-60px)'
            el.style.opacity = 0

        }
        const enter = (el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "play play none none"
                },
                y: 0,
                opacity: 1,
                duration: 2,
            })
        }   

        return { beforeEnter, enter }
    }
}
</script>

<style>
    img{
        border-radius: 20px;
    }
</style>
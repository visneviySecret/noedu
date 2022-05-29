<template>
    <div class="container">
        <div class="picture-title-container">
            <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
                <div class="top-picture">

                        <img class="top-picture__img" src="../assets/images/lighthouse.svg" alt="">
                </div>
            </transition>

            <div class="title-container">
                <transition
                    appear
                    @before-enter="beforeEnter"
                    @enter="enterDelay">
                    <div class="title-container__title">

                        ПЕДАГОГ <br>
                        БЕЗ ОБРАЗОВАНИЯ
                        <div class="title-container__sub-title">
                            Сайт Шершнёва Дмитрия о тебе
                        </div>
                    </div>  
                </transition>
                <transition
                    appear
                    @before-enter="beforeEnter"
                    @enter="fastEnter">
                    <div class="arrow" @click="scrollDown">
                    </div>
                </transition>
            </div>
        </div>

    </div>
</template>


<script>
import gsap from 'gsap'

export default {
    setup () {
        const beforeEnter = (el) => {
            el.style.transform = 'translateY(-60px)'
            el.style.opacity = 0
        }
        const enter = (el, done) => {
            gsap.to(el, {
                duration: 2,
                y: 0,
                opacity: 1,
                onComplete: done,
                delay: 0.5
            })
        }
        const enterDelay = (el, done) => {
            gsap.to(el, {
                duration: 2,
                y: 0,
                opacity: 1,
                onComplete: done,
                delay: 2
            })
        }
        const fastEnter = (el, done) => {
            gsap.to(el, {
                duration: 2,
                y: 0,
                opacity: 1,
                onComplete: done,
                delay: 0
            })
        }
        const afterEnter = () => {

        }
        return { beforeEnter, enter, afterEnter, enterDelay, fastEnter }
    },
    methods: {
        scrollDown () {
            var element = document.querySelector('#imOnlyHuman')
            var position = element.offsetTop
            console.log(element);
            
            window.scrollTo({
                top: position, 
                behavior: 'smooth'
            })
        }
    },
}
</script>
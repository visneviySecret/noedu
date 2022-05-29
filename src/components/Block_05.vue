<template>
    <div class="block">
        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter">
         <div class="warning" v-html='data'>
             
         </div>
        </transition>
    </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
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
        const data = "ЕСЛИ ТЫ НЕ ЗНАЕШЬ, ЧТО ДЕЛАТЬ, КАК СЕБЯ СПАСТИ ~ НАЙДИ МЕНЯ, НАПИШИ МНЕ ТАК, ЧТОБЫ Я СРАЗУ ПОНЯЛ, ЧТО ТЕБЕ НУЖНА <Strong>ЭКСТРЕННАЯ</Strong> ПОМОЩЬ.<br/><br/>Я, НАСКОЛЬКО ЭТО БУДЕТ В МОИХ СИЛАХ, НЕ ПОЗВОЛЮ ТЕБЕ ПОТЕРЯТЬСЯ. БЕСПЛАТНО, ПРИ ПЕРВОЙ ЖЕ ВОЗМОЖНОСТИ,<br /><Strong>КОНФИДЕН&shyЦИАЛЬНО;</Strong> "
        return { beforeEnter, enter, data }
    }
}
    
</script>
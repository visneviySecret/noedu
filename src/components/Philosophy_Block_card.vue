<template>
        <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter">
    <div class="block-img__card">

            <div class="block-img__card__card-title">
                {{ data.title }}
            </div>

            <div class="block-img__card__card-body">
                <div class="card-img__card__card-content" v-html="data.content"></div>
                <router-link :to="{ name: data.url }" class="card-img__card__card-url"> Читать далее</router-link>
            </div>        

    </div>
        </transition>

</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
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

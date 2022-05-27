<template>
    <div class="pages-body">
        <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter">
            <div class="pages-card-title">
                {{ data.title }}
            </div>
        </transition>

        <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter">
            <div class="pages-card-content" v-html="data.content"></div>        
        </transition>

    </div>
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
                duration: 1,
            })
        }   

        return { beforeEnter, enter }
    }
}
</script>
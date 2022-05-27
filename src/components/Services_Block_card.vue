<template>
    <div class="block-img__card">
        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter">
            <div class="block-img__card__card-title more-padding-bottom">
                <div class="card-img__card__card-title " v-html="data.title"></div>
            </div>
        </transition>
        
        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter">
        <div class="block-img__card__card-body">
            <div class="card-img__card__card-content" v-html="data.content"></div>
        </div>
        </transition>

        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter">
        <button class="btn btn-below"  v-if="data.url">
            <router-link :to="{path: data.url}">{{data.title}}</router-link>
        </button>
        <button class="btn btn-below"  v-else>
            <router-link :to="{path: data.url}">Услуга ещё не доступна</router-link>
        </button>
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
                duration: 2,
            })
        }   

        return { beforeEnter, enter }
    }
}
</script>
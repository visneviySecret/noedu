<template>
        <div class="card">
        <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter">
            <div class="card__title" v-if="data.title">
                {{ data.title }}
            </div>
        </transition>
            <div class="card__body"  >
                <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter">
                <div class="card__content" v-html="data.content"></div>
            </transition>
    
            </div>
                <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter">
                <router-link :to="{path: data.url}" exact v-if=data.title>
                    <button class="btn btn-below" >
                            Свяжись со мной
                    </button>
                </router-link>
                <router-link :to="{path: data.url}" exact v-else>
                    <button class="btn btn-below" >
                        Читать блог
                    </button>
                </router-link>
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

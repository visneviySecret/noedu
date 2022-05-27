<template>
        <div class="card ">
            <transition     
                appear         
                @before-enter="beforeEnter"
                @enter="enter">
                <div class="card__title">
                    {{ data.title }}                
                </div>
            </transition>

            <div class="card__body wrapper">
                <transition       
                    appear       
                    @before-enter="beforeEnter"
                    @enter="enter">
                    <div class="card__content " v-html="data.content"></div>            
                </transition>
    
                <transition 
                    appear             
                    @before-enter="beforeEnter"
                    @enter="enter"
                    >
                    <img class="card__img" :src='data.image' alt="">                
                </transition>
                <transition
                    appear          
                    @before-enter="beforeEnter"
                    @enter="enter"
                >
                <router-link :to="{path: data.url}" class="router-btn solo-router-btn" v-if=data.url>
                        <button class="btn solo-btn">
                            Свяжись со мной
                        </button>       
                </router-link>             
                </transition>
            </div>
            
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

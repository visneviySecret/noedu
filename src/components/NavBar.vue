<template>
        <header id="Up" class="header">
            <div class="container">
                <div class="header__body">
                    <div class="header__burger"
                        v-if='!show' 
                        v-bind:class="{active: isActive}" 
                        v-on:click="myFilter"
                        >
                        <span></span>
                    </div>
                    <nav class="header__menu" 
                        v-bind:class="{active: isActive}" 
                    >
                        <NavBarItem 
                            v-for="title of navTitlesLeft"
                            v-bind:title="title"
                            v-bind:key="title.id"
                            @check-active="checkActive"
                            />
                        <img src="@/assets/images/logo.png" class="header__logo"  alt="logo">
                        
                        <NavBarItem 
                            v-for="title of navTitlesRight"
                            v-bind:title="title"
                            v-bind:key="title.id"
                            @check-active="checkActive"

                            />
                    </nav>
                </div>
            </div>
        </header>
</template>   

<script>
import NavBarItem from "@/components/NavBarItem.vue"
export default {
    data(){
        return {

            navTitlesLeft: [
                {id: 0, title: 'Философия', url: '', titleName: 'HomePhilosophy'},
                {id: 1, title: 'Обо мне', url: '', titleName: 'HomeAbout'},
            ],
            navTitlesRight: [
                {id: 2, title: 'Услуги', url: '', titleName: 'HomeServices'},
                {id: 3, title: 'Контакты', url: '', titleName: 'HomeContacts'},
            ],
            show: false,
            isActive: false,
            width: document.documentElement.clientWidth,
        mounted() {
          window.addEventListener('resize', this.getDimensions);
        },
        unmounted() {
          window.removeEventListener('resize', this.getDimensions);
        },
    }
    },
    methods: {
        getDimensions(e) {
            this.width = document.documentElement.clientWidth;
            if(e.targer.innerWidth > 768 ) {
                
                this.isActive = false
                document.body.classList.remove('active')  
                console.log(this.isActive, this.width);
            }},
        myFilter() {
            this.isActive = !this.isActive;
            this.size = document.documentElement.clientWidth;
            


            if (this.isActive) {
                document.body.classList.add('active')
            } else {
                document.body.classList.remove('active')  
            }
        },
        checkActive () {
            if (this.isActive) {
                this.myFilter ()
            }
        },
        elem () {

            
        }
    },
    components: {
        NavBarItem
    }
}
</script>


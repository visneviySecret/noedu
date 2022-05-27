<template>
    <div id="HomeContacts" class="footer">
        <div class="footer__footer-body  ">
            <div class='footer__contacts '>
                <div class="footer__contacts__title">Контакты</div>

                <div class="footer__contacts__number">+7 (917) 977-79-12</div>
            
                <div class="footer__contacts__icons">
                    <FooterItem 
                        v-for="item of contacts"
                        :key="item.id"
                        :item="item"
                    />
                </div>
            </div>

             <div class='footer__pages'>
                <FooterItem 
                    v-for="item of pages"
                    :key="item.id"
                    :item="item"
                />
            </div>

            <div class='footer__ending'>
                Педагог без образования © 2021
            </div>
        </div>
    </div>
</template>

<script>
import FooterItem from "@/components/FooterItem.vue"
export default {
    data(){
        return {
            contacts: [
                {id: 0, image: require('@/assets/images/logo-vk.svg'), url: '/vk'},
                {id: 1, image: require('@/assets/images/logo-youtube.svg'), url: '/youtube'},
                {id: 2, image: require('@/assets/images/logo-twitter.svg'), url: '/twitter'},
                {id: 3, image: require('@/assets/images/logo-instagram.svg'), url: '/inst'},
                {id: 4, image: require('@/assets/images/logo-tumblr.svg'), url: '/blog'},
                {id: 5, image: require('@/assets/images/globe.svg'), url: '/website'},

            ],
            pages: [
                {id: 0, title: 'Главная', url: 'Home', titleName: 'Home'},
                {id: 1, title: 'Философия', url: 'HomePhilosophy', titleName: 'Philosophy'},
                {id: 2, title: 'Обо мне', url: 'HomeAbout', titleName: 'About'},
                {id: 3, title: 'Услуги', url: 'HomeServices',titleName: 'Services'},
                {id: 4, title: 'Наверх', url: '', titleName: 'Up'},

            ]
        }
    },
    components: {
        FooterItem
    }
}
</script>
 
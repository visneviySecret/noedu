<template>
    <div v-if="item.image">
         <router-link :to="{path: item.url}">
            <img :src="item.image" alt="img">
         </router-link>
    </div>

    <div v-if="item.title && item.url">
         <router-link :to="{ name: item.url }">
            <div >
                {{ item.title }}
            </div>
         </router-link>
         <!--          
        <router-link :to="{ name: item.url, params: { id: item.id}}" @click="scrollTo(item.titleName)" >
            <div >
                {{ item.title }}
            </div>
         </router-link>
          -->
    </div>
    <div v-if="item.title && !item.url">
        <div  @click="scrollTo(item.titleName)" >
            <div id="goUp">
                {{ item.title }}
            </div>
         </div>
    </div>
   
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        scrollTo(itemName) {
            var element = document.querySelector(`#${itemName}`)
            var position = element.offsetTop
            console.log(element);
            
            
            window.scroll({left: 0, top: position, behavior: "smooth"})
        },
    }
}
</script>
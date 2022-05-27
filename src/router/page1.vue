<template>
    <div id="save-yourself">
        <Block_06 />
        <Block_07 />    
        <div class="pages-slider container">
            <router-link :to="{name: 'ideal-not-fairy'}">Предыдущая статья</router-link>
            <router-link  :to="{name: 'ideas-war'}">Следующая статья</router-link>
        </div>
    </div>

</template>

<script>
    import Block_06 from '@/components/Block_06'
    import Block_07 from '@/components/Block_07'
    export default {
        components: {
            Block_06, Block_07
        }
    }
</script>
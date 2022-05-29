<template>
    <div id="ideas-war">
        <Block_10 />
        <Block_11 />    
        <div class="pages-slider container">
            <router-link :to="{name: 'ideal-not-fairy'}">Предыдущая статья</router-link>
            <router-link :to="{name: 'save-yourself'}">Следующая статья</router-link>
        </div>
    </div>

</template>

<script>
    import Block_10 from '@/components/Block_10'
    import Block_11 from '@/components/Block_11'
    export default {
        components: {
            Block_10, Block_11
        }
    }
</script>
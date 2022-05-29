<template>
    <div id="ideal-not-fairy">
        <Block_08 />
        <Block_09 />    
        <div class="pages-slider container">
            <router-link :to="{name: 'save-yourself'}">Предыдущая статья</router-link>
            <router-link :to="{name: 'ideas-war'}">Следующая статья</router-link>
        </div>
    </div>

</template>

<script>
    import Block_08 from '@/components/Block_08'
    import Block_09 from '@/components/Block_09'
    export default {
        components: {
            Block_08, Block_09
        }
    }
</script>
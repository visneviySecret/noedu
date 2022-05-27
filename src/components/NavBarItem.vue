<template>
    <div>
        <router-link :to="{name: title.titleName}" @click="checkActive">{{title.title}}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: Object,
            required: true
        }
    },
    methods: {
        checkActive() {
            this.$emit('check-active')
        },
    }
}

</script>

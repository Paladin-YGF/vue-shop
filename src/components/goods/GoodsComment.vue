<template>
    <div>
        <comment :id="this.$route.params.id"></comment>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue"
export default {
    components: {
        comment
    }
}
</script>

<style scoped>

</style>
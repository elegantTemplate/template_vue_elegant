<template>
    <div class="show">
        <Alert title="提示" content="alert" :callback= "callback"></Alert>
    </div>
</template>
<script>
import Alert from '../../components/alert'
export default {
    name: 'Show',
    components: {
        Alert
    },
    data () {
        return {
        }
    },
    methods: {
        callback() {
            alert(1)
        }
    }
}
</script>
<style lang="scss">
</style>
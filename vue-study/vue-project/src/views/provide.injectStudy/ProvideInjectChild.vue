<template>
    <h3>{{thisItemLength}}</h3>
</template>
<script>
export default {
    inject:['itemLength'],
    data(){
        return{
            thisItemLength: ''
        }
    },
    mounted(){
        this.thisItemLength = this.itemLength
    }
}
</script>
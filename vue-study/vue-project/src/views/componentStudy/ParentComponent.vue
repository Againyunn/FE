<template>
    <ChildComponent @send-message="sendMessage" ref="childComponent"/>
</template>
<script>
import ChildComponent from './ChildComponent.vue'

export default {
    components:{
        ChildComponent
    },
    mounted(){
        this.$refs.childComponent.$refs.btn.click();
    }
}
</script>
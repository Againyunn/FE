<!-- 직계 자식이 아닌 경우에도 한번에 props넘겨보내기 -->
<template>
    <ProvideInjectChild />
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild.vue';

export default {
    components:{ProvideInjectChild},
    data(){
        return{
            items:['A', 'B', 'C']
        }
    },
    provide(){
        let itemLength = this.items.length;
        return{
            itemLength
        }
    }
}
</script>
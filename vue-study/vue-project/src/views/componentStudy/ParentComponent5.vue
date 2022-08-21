<!-- computed 옵션을 활용해서 자식컴포넌트의 값을 부모컴포넌트에 동기화 -->
<template>
    <div>
        <button type="button" @click="checkChild">get ChildComponent's data</button>
        <ChildComponent5 ref="ChildComponent5"/>
    </div>
</template>
<script>
import ChildComponent5 from './ChildComponent5.vue';
export default {
    components:{
        ChildComponent5
    },
    /**$emit을 사용할 때보다 최적화 
     * computed : 참조되고 있는 데이터의 변경사항을 바로 감지하여 반영 가능 */
    computed: {
        msg(){
            return this.$refs.ChildComponent5.msg;
        }
    },
    methods: {
        checkChild(){
            alert(this.msg);
        }
    }
}
</script>
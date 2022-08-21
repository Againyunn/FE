<!-- 부모 컴포넌트에서 자식 컴포넌트의 함수 실행 -->
<template>
    <ChildComponent2 @send-message="sendMessage" ref="ChildComponent2"/>
</template>
<script>
import ChildComponent2 from './ChildComponent2.vue';
export default {
    components:{ ChildComponent2},
    mounted(){
        this.$refs.ChildComponent2.callFromParent();
        /**css가 id로 html 태그를 식별하듯, js는 ref로 html태그 식별이 가능
        따라서 ref에 오타 발생 시 오류 발생*/
    }
}
</script>
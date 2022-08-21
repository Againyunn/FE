<!-- 자식컴포넌트에서 부모컴포넌트로 데이터/이벤트 전달 -->
<template>
    <div>
        <ChildComponent4 @send-message="sendMessage"/>
        <h3>{{getData}}</h3>
    </div>
</template>
<script>
import ChildComponent4 from './ChildComponent4.vue';

export default {
    components:{ChildComponent4},
    methods:{
        sendMessage(data){
            this.getData = data;
        }
    },
    data(){
        return{
            getData: 'Has no Data'
        }
    }
}
</script>
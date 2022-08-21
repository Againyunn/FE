<!-- 부모 컴포넌트에서 자식 컴포넌트의 데이터 바꾸기 -->
<template>
    <div>
        <ChildComponent3 @send-message="sendMessage" ref="ChildComponent3"/>
        <button type="button" @click="changeChildData">Change Child Data</button>
    </div>
</template>
<script>
import ChildComponent3 from "./ChildComponent3.vue";

export default{
    components:{ChildComponent3},
    data(){
        return{
            childData: '',
            change: false
        }
    },
    methods:{
        changeChildData(){
            if(!this.change){
                this.childData = this.$refs.ChildComponent3.message;
                this.$refs.ChildComponent3.message = "data that parentComponent changes";
                this.change = true;
            }
            else{
                this.$refs.ChildComponent3.message = this.childData;
                this.change = false;
            }
        }
    }
}
</script>

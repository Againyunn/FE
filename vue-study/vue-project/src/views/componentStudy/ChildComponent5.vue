<template>
    <button type="button" @click="childFunc" ref="btn">change ChildComponent's data</button>
</template>
<script>
export default{
    data(){
        return{
            msg: 'hello wolrd'
        }
    },
    methods:{
        childFunc(){
            this.msg = 'changed data'
        }
    }
}
</script>

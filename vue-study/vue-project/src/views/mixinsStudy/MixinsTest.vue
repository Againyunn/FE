<template>
    <h3>{{productlist}}</h3>
</template>
<script>
const API = 'https://57e9b586-d33d-4caf-9871-3b20bccf8fbc.mock.pstmn.io';
import mixins2 from '../../apis/mixins2';

export default {
    mixins:  [mixins2],
    data(){
        return{
            productList:[]
        }
    },
    async mounted(){
        this.productList = await this.$callAPI(API+ '/list', "get")
        console.log(this.productList);
    }
}
</script>
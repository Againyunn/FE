<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    //html과 JS코드에서 사용할 데이터 변수 선언
    data(){ 
        return{
            API: "https://57e9b586-d33d-4caf-9871-3b20bccf8fbc.mock.pstmn.io",
            productList: []
        };
    },
    //컴포넌트 생성
    created() {
        this.getList();
    },
    //컴포넌트 내에서 사용할 메소드 정의
    methods: {
        async getList(){
            this.productList = await this.api(this.API + '/list', "get")
        }
    }
}
</script>
<style scoped>
    table{
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th{
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
</style>
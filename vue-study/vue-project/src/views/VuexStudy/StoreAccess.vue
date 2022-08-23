<template>
    <div>
        <p>Count : {{count}}</p>
        <button type="button" @click="increment">Increment</button>
    </div>
</template>
<script>
export default {
    //전역 state으로 정의된 변수는 컴포넌트에서 computed 속성을 통해 변경사항 추적 가능
    computed: {
        /**$store.state.count의 값을 받아오는 역할
         * count()함수의 형태이지만, 현 컴포넌트에서 데이터의 역할
        */
        //state의 count 값 반환[rare data]
        count() {
            return this.$store.state.count;
        },
        //state의 cart.length 값 반환[managed data]
        cartCount(){
            return this.$store.state.cartCount;
        }

    },
    methods:{
        increment(){
            //전역 state는 commit()을 통해서만 변경이 가능
            /**store 전역 state의 increment 함수 실행*/
            this.$store.commit('increment');
        }
    }
}
</script>
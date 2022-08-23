<template>
    <div>
        <input type="text" v-model="num1"/>
        <span> + </span>
        <input type="text" v-model="num2">
        <span> = </span>
        <span>{{result}}</span>
    </div>
</template>
<script>
import { plusCalculator } from './compositionAPI4';

export default {
    name: 'calculatorLogic',
    setup() {
        /**인자 개수에 맞게 데이터(값)을 할당받을 변수를 지정해야 한다.*/
        let {num1, num2, result} = plusCalculator();
        
        return{
            num1, num2, result
        }
    },
}
</script>
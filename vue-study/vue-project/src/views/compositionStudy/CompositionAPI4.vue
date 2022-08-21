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
        let {num1, num2, result} = plusCalculator();
        
        return{
            num1, num2, result
        }
    },
}
</script>
<template>
    <div>
        <input type="text" v-model="num1">
        <span> + </span>
        <input type="text" v-model="num2">
        <span> = </span>
        <span>{{result}}</span>
    </div>
</template>
<script>
import {reactive, computed, toRefs} from 'vue';

const plusCalculator = () => {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(
                ()=> parseInt(state.num1) + parseInt(state.num2)
            )
    });
    return toRefs(state);
    /**
     * toRefs는 객체를 쪼개서 반환할 수 있다.
     * setup에서 받을 때 보면, let {num1, num2, result} 로 객체 내부의 속성값들을 쪼개서 받았다. 
     * */
}

export default {
    name: 'calculatorLogic2',
    setup() {
        let {num1, num2, result} = plusCalculator();
        // let state = plusCalculator();

        return{
            // state
            num1, num2, result
        }
    },
}
</script>
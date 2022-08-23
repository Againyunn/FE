import {reactive, computed, toRefs} from 'vue';

/**
 * @props null
 * @returns state.num1, state.num2, state.result
 */
const plusCalculator = () => {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    });

    return toRefs(state);
}

/**
 * plusCalculator함수를 반환하는 역할 수행
 * react에서도 외부 모듈에 선언하여 타 컴포넌트에 사용할 수 있게 만드는 방식과 유사
 */
export {
    plusCalculator
}

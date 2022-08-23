/**전역 state 정의 */
import createStore from 'vuex';

const store = createStore({
    state() {
        return{
            count : 0,
            cart: [{
                product_id: 1,
                product_name: '아이폰 거치대',
                category: "A"
            }]
        }
    },
    /**getters */
    //전역 state의 전체 DATA외에, 부차적인 데이터 속성들을 컴포넌트에 사용할 때마다 매번 연산할 필요없이,.
    //관련된 연산의 결과값만 받아올 수 있는 함수 정의
    /**vue의 state가 동기적으로 자동 반영된다는 점을 활용 */
    getters:{
        cartCount: (state) => {
            return state.cart.length
        }
    },
    mutations:{
        /**
         * state.count의 값이 +1 증가하는 함수
         * @param {*} state 
         */
        increment(state) {
            state.count++;
        }
    }
})

export default store;
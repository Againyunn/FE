import React, {useState} from 'react'

export default function State() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);



  return (
    <div>
        Count : {count}    
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(initialCount => initialCount+1)}>+</button>
        <button onClick={() => setCount(initialCount => initialCount-1)}>-</button>
    </div>
  )
}

//Hook은 if문이나 for문 내부에서 사용 불가능

//useState    이전 값을 인자로 받으며 초기화 지연(함수)활용 가능
//useEffect   의존성 배열 혹은 안줄 수 있다. [] 빈 배열을 줄 수도 있다.
//useLayoutEffect   useEffect와 유사. 모든 DOM 변경 후 브라우저가 화면을 그리기 이전 시점에 동기적으로 수행
//useReducer    여러 개의 반복적인 useState가 한번의 동작에서 나뉘어 실행되는 경우(switch구문 활용)
//useRef        current에 값이 저장. 내용의 변경은 react가 알지 못한다. callback ref를 사용한다.

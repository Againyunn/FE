import React from 'react'

export default function List() {
    //     const numbers = [1,2,3,4,5];


    //   return (
    //     <div>
    //         {numbers.map(item  => <li key={item.toString()}>{item}</li>)}
    //     </div>
    //   )

    const todos = [
        { id: 1, text: 'A' },
        { id: 2, text: 'B' },
        { id: 3, text: 'C' },
        { id: 4, text: 'D' }
    ]

    const Item = (props) => {
        return (
            <li>
                {props.text}
                {props.id}
            </li>
        );
    }

    //map에 사용된 key 값은 HTML tag의 props가 되지 못한다.
    //attribute 취급해야 한다.
    const todoList = todos.map((result) => <Item key={result.id} id={result.id} text={result.text} />);

    return (
        <>
            {todoList}
        </>
    );

}


// map             배열의 개별 요소를 순회 이때 default key를 설정하지 않으면 react는 index를 key로 사용한다
// key props       key는 props로 넘어가지 않는다. 

//비구조화 할당(destructuring assignment)구문
//배열이나 객체의 속성을 해체하여 값을 개별 변수에 담을 수 있게 하는 JS표현식

// ...의 활용법:
// 출처:
// https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9

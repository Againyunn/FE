import React, { useState } from 'react'
// import React, { Component } from 'react'

//클래스 선언
// export default class ControlledComponent extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }

//함수형 선언
export default function ControlledComponent() {

    const [name, setName] = useState('');
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM element.");
    const [flavor, setFlavor] = useState("coconut");

    // function handleChange(event) {
    //     setName(event.target.value);
    // }

    // function handleEssayChange(event) {
    //     setEssay(event.target.essay);
    //     console.log('setEssay');
    // }

    // function handleFlavorChange(event){
    //     setFlavor(event.target.flavor);
    //     console.log('setFlavor');
    //}

    function handleChange(event) {
        const name = event.target.name;
        if (name === "name") {
            setName(event.target.value);
        }
        if (name === "essay") {
            setEssay(event.target.value);
            console.log(event.target.value);
        }
        if (name === "flavor") {
            setFlavor(event.target.value);  //event객체의 target의 value 값을 반환하라는 의미
        }
    }

    function handleSubmit(event) {
        alert(`name: ${name} essay: ${essay} flavor: ${flavor}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                ControlledComponents Example
            </div>
            <br />
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
            <br />
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

//Controlled Component input의 value를 state으로 관리(React가 현재 처리하는 값 모두를 조회 및 관리 가능)
//다중입력      event.target.name
//Uncontrolled Component        form element 자체의 내부 상태 활용
//defaultValue, ref          기본값 / value 확인

//props를 바꾸려면 직접 props를 바꾸는 것이 아니라, state를 활용해야 한다.

// Hook
// React의 class 구조 한계(단점)보완과 재사용성 증대를 위해 등장
// Hook 사용 규칙 → 최상위 / 함수형 컴포넌트 / custom Hook
// Class의 state는 과거에 Hook이 출시되기 전의 특성이 담겨있다 정도만 알아두기


// JS의 배열구조 분해 활용
// const [fruit, setFruit] = useState('banana');

// 타 언어처럼 풀어서 표현하는 방법 
// var fruitStateVariable = useState('banana'); // 두 개의 아이템이 있는 쌍을 반환
// var fruit = fruitStateVariable[0]; // 첫 번째 아이템
// var setFruit = fruitStateVariable[1]; // 두 번째 아이템
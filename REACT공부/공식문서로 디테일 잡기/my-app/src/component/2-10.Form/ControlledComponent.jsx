import React, { useState } from 'react'
// import React, { Component } from 'react'

//Ŭ���� ����
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

//�Լ��� ����
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
            setFlavor(event.target.value);  //event��ü�� target�� value ���� ��ȯ�϶�� �ǹ�
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

//Controlled Component input�� value�� state���� ����(React�� ���� ó���ϴ� �� ��θ� ��ȸ �� ���� ����)
//�����Է�      event.target.name
//Uncontrolled Component        form element ��ü�� ���� ���� Ȱ��
//defaultValue, ref          �⺻�� / value Ȯ��

//props�� �ٲٷ��� ���� props�� �ٲٴ� ���� �ƴ϶�, state�� Ȱ���ؾ� �Ѵ�.
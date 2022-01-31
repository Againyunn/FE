import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
        // this.handleClick = this.handleClick.bind(this);     //class 내부에서 자체적으로 함수를 호출하여 사용할 경우 this를 통해 함수 자기 자신을 부른다는 점을 바인딩해야 한다.
        //이를 방지하는 방법 : allow function을 활용
        //allow function은 클래스 내외에 관계 없이 this를 자체적으로 선언한 형태
    }

    componentDidMount(){    //생성자와 함께 처음에 호출
        console.log('componentDidMount');
        this.timerID = setInterval(()=> this.tick(), 1000);

    }

    componentDidUpdate(){   //업데이트
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){     //삭제될 때 작동
        console.log('componentWillUnmount');
        clearInterval(this.timerID)
    }

    tick(){
        console.log('tick');
        this.setState({date: new Date()});
    }

    // handleClick(){
    //     alert(this.state.date);     
    // }
    
    handleClick = () =>{
        alert(this.state.date);
    }

  render() {
      console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

//Constructor 생성자가 가장 먼저 호출
//render가 호출
//componentDidMount가 호출
//tick(본함수)가 호출

/* 아래의 순서 반복 */
//render가 호출
//componentDidUpdate가 호출
//tick(본함수)가 호출


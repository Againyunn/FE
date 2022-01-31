import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
        // this.handleClick = this.handleClick.bind(this);     //class ���ο��� ��ü������ �Լ��� ȣ���Ͽ� ����� ��� this�� ���� �Լ� �ڱ� �ڽ��� �θ��ٴ� ���� ���ε��ؾ� �Ѵ�.
        //�̸� �����ϴ� ��� : allow function�� Ȱ��
        //allow function�� Ŭ���� ���ܿ� ���� ���� this�� ��ü������ ������ ����
    }

    componentDidMount(){    //�����ڿ� �Բ� ó���� ȣ��
        console.log('componentDidMount');
        this.timerID = setInterval(()=> this.tick(), 1000);

    }

    componentDidUpdate(){   //������Ʈ
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){     //������ �� �۵�
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

//Constructor �����ڰ� ���� ���� ȣ��
//render�� ȣ��
//componentDidMount�� ȣ��
//tick(���Լ�)�� ȣ��

/* �Ʒ��� ���� �ݺ� */
//render�� ȣ��
//componentDidUpdate�� ȣ��
//tick(���Լ�)�� ȣ��


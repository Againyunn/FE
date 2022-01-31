import React from 'react'

function UserGreeting(props) {
    return (
        <div>
            <p>���׿����� Ȱ��</p>
            <br/>
            <h1>
                {props.name ? props.name + ',' : null} Welcome {props.count ? `It's ${props.count} times for visiting.` :null }
            </h1>

            <p>�������� &&�� if ��� Ȱ��</p>
            <br/>
            <h1>
                {props.name && props.name + ','} Welcome {props.count &&  `It's ${props.count} times for visiting.` } 
            </h1>
        </div>
        
    )
}

function GuestGreeting(props) {
    return (
        <h1>
            Please sign up.
        </h1>
    )
}

function Greeting(props) {

    //�Ϲ� �� ������ ���
    // if (props.isLoggedIn) {     //isLoggedIn�� T/F�� ���� ����� �޶�����.
    //     <UserGreeting name="Againyunn" count={0} />
    // }
    // return <GuestGreeting />;

    //���� ������ ���
    return props.isLoggedIn ? <UserGreeting name="Againyunn" count={1} /> : <GuestGreeting />;
}

export default function ConditionalRendering() {
    const isLoggedIn = true; //�ʱⰪ ����
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}

//���׿����ڴ� 0�� false�� �ν�
//�������ڴ� 0�� falsy�� ������ �ν��Ͽ� 0���� ������ �����Ͽ� ��ȯ

// ���Ǻ� ������
// if�� Ȱ��
// &&                                   ���� && ���� ����� ��  
// ���׿�����                            ���� ? ���� ����� �� : ������ ����� ��
// �ƿ� ���� ��ȯ�ϰ� ���� ���� ���      null
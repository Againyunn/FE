import React, { useState } from 'react'


export default function Dialog(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button style={{
                position:"absolute",
                left:100,
            }}
            onClick={() => setIsOpen(true)}>Open</button>

            {/* isOpen�� true�̸� �Ʒ��� ������ Ȯ���� �� �ִ�. */}
            {isOpen ? <div
                style={{
                    position: "absolute",
                    zIndex: 99,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid black",
                    padding: 24,
                    backgroundColor: "white",
                }}>

                {/*title�� ���ڶ�� <h1> �±׷� ��ȯ, �ƴ� ��� �׳� props ���� �״�� ��ȯ} */}
                {typeof props.title === 'string' ? <h1>{props.title}</h1> : props.title}

                {/*description�� ���ڶ�� <h5> �±׷� ��ȯ, �ƴ� ��� �׳� props ���� �״�� ��ȯ} */}
                {typeof props.description === 'string' ? <h5>{props.description}</h5> : props.description}

                {/*
                    button�� ���ڶ�� <button> �±׷� ��ȯ, �ƴ� ��� �׳� props ���� �״�� ��ȯ   
                    ������ �θ� ��忡�� �̹� button���� custom�Ǿ ������ ���� ��忡���� button�� onclick�� ������ �� ����.
                    ���� false�� ���� ���� ����ִ� <div>�� �ְ� �ش� div�ȿ��� JS�� bubble�Ӽ��� �̿��Ͽ� onClickó���� �� �� �ִ�.
                    */}
                {typeof props.button === 'string' ?
                    <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setIsOpen(false)}>{props.button}</button> :
                    (<div onClick={() => setIsOpen(false)}>{props.button}</div>)}

            </div> : null}

            {isOpen ? <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "lightgray"
            }} />
                : null}
        </>
    )
}

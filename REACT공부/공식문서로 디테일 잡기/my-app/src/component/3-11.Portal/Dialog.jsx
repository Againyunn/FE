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

            {/* isOpen이 true이면 아래의 구문을 확인할 수 있다. */}
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

                {/*title이 글자라면 <h1> 태그로 반환, 아닐 경우 그냥 props 내용 그대로 반환} */}
                {typeof props.title === 'string' ? <h1>{props.title}</h1> : props.title}

                {/*description이 글자라면 <h5> 태그로 반환, 아닐 경우 그냥 props 내용 그대로 반환} */}
                {typeof props.description === 'string' ? <h5>{props.description}</h5> : props.description}

                {/*
                    button이 글자라면 <button> 태그로 반환, 아닐 경우 그냥 props 내용 그대로 반환   
                    상위의 부모 노드에서 이미 button으로 custom되어서 하위인 현재 노드에서는 button의 onclick을 감지할 수 없다.
                    따라서 false일 때의 값에 비어있는 <div>를 주고 해당 div안에서 JS의 bubble속성을 이용하여 onClick처리를 할 수 있다.
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

import React from 'react'
import ThankyouDialog from './ThankyouDialog'
import { createPortal } from "react-dom"

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
}


export default function Example() {
  return (
    
    <div onClick={ () => console.log("Bubbling")}>
      <Portal>
        <ThankyouDialog />
      </Portal>

        <div style={{ position: "absolute" }}>
          <button>Fighting</button>
        </div>


    </div>
  )
}

//리액트에서 의도적으로 서로 다른 부모노드를 가진 element에 message를 찍는 log를 넣었을 때, 
//일반적인 프로그래밍 언어들이라면 동일한 부모노드를 가진 객체에 발생한 event만을 bubbling을 통해 자식 → 부모 순서로 전달하지만,
//리액트는 portal을 사용하여, 특정 element를 다른 부모노드로 독립되도록 만들어도, event bubbling이 자식 → 부모(들)로 전달되도록 설계했다.
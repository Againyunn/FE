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

//����Ʈ���� �ǵ������� ���� �ٸ� �θ��带 ���� element�� message�� ��� log�� �־��� ��, 
//�Ϲ����� ���α׷��� �����̶�� ������ �θ��带 ���� ��ü�� �߻��� event���� bubbling�� ���� �ڽ� �� �θ� ������ ����������,
//����Ʈ�� portal�� ����Ͽ�, Ư�� element�� �ٸ� �θ���� �����ǵ��� ����, event bubbling�� �ڽ� �� �θ�(��)�� ���޵ǵ��� �����ߴ�.
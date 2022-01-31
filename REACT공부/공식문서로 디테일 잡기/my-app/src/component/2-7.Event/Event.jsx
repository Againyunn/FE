import React from 'react'

export default function Event() {
    const handleButtonClick = ()=>{
        console.log('handleButtonClick');
    }

    const handleClickCapture1 = () =>{
        console.log("handleClickCapture1")
    }

    const handleClickCapture2 = () =>{
        console.log("handleClickCapture2")
    }

    const handleClickBubble1 = () =>{
        console.log("handleClickBubble1")
    }

    const handleClickBubble2 = () =>{
        console.log("handleClickBubble2")
    }
  return (
    <div onClickCapture={handleClickCapture1} onClick={handleClickBubble1}>
        <div onClickCapture={handleClickCapture2} onClick={handleClickBubble2}>
      <button onClick={handleButtonClick}>button</button>
      </div>
    </div>
  )
}

//���:
// Event.jsx:9 handleClickCapture1
// Event.jsx:13 handleClickCapture2
// Event.jsx:5 handleButtonClick
// Event.jsx:21 handleClickBubble2
// Event.jsx:17 handleClickBubble1

//�ռ��̺�Ʈ    : �������̽��� ������ ���� �������� �ʴ´�.
//Bubble / Capture      :Capture > target > Bubble
//return false      : e.preventDefault() �ʿ�

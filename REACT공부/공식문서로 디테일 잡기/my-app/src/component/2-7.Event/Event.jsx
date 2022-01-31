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

//결과:
// Event.jsx:9 handleClickCapture1
// Event.jsx:13 handleClickCapture2
// Event.jsx:5 handleButtonClick
// Event.jsx:21 handleClickBubble2
// Event.jsx:17 handleClickBubble1

//합성이벤트    : 인터페이스는 같지만 직접 대응되지 않는다.
//Bubble / Capture      :Capture > target > Bubble
//return false      : e.preventDefault() 필요

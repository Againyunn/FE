import React from 'react'

function UserGreeting(props) {
    return (
        <div>
            <p>삼항연산자 활용</p>
            <br/>
            <h1>
                {props.name ? props.name + ',' : null} Welcome {props.count ? `It's ${props.count} times for visiting.` :null }
            </h1>

            <p>논리연산자 &&를 if 대신 활용</p>
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

    //일반 논리 연산자 사용
    // if (props.isLoggedIn) {     //isLoggedIn의 T/F에 따라 결과가 달라진다.
    //     <UserGreeting name="Againyunn" count={0} />
    // }
    // return <GuestGreeting />;

    //삼항 연산자 사용
    return props.isLoggedIn ? <UserGreeting name="Againyunn" count={1} /> : <GuestGreeting />;
}

export default function ConditionalRendering() {
    const isLoggedIn = true; //초기값 지정
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}

//삼항연산자는 0을 false로 인식
//논리연산자는 0을 falsy한 값으로 인식하여 0까지 값으로 인지하여 반환

// 조건부 렌더링
// if문 활용
// &&                                   조건 && 참일 경우의 값  
// 삼항연산자                            조건 ? 참일 경우의 값 : 거짓일 경우의 값
// 아예 값을 반환하고 싶지 않을 경우      null
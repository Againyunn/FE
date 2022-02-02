import React, { useEffect, useState } from 'react'

//컴포넌트를 인자로 전달받는 함수인 withLoading
export default function withLoading(Component) {

    //함수형 컴포넌트의 실질적인 연산을 수행할 함수를 내부에 정의
    const WithLoadingComponent = (props) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 3000);
    
            return () => clearTimeout(timer);
        });
    
        return (
            loading? <p>Loading...</p> : {Component}
        );
    }

    //withLoading에서 처리한 컴포넌트를 반환하는 함수인 WithLoadingComponent를 반환
    return WithLoadingComponent;
}


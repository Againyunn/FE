import React, { useEffect, useState } from 'react'

//������Ʈ�� ���ڷ� ���޹޴� �Լ��� withLoading
export default function withLoading(Component) {

    //�Լ��� ������Ʈ�� �������� ������ ������ �Լ��� ���ο� ����
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

    //withLoading���� ó���� ������Ʈ�� ��ȯ�ϴ� �Լ��� WithLoadingComponent�� ��ȯ
    return WithLoadingComponent;
}


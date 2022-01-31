import React from 'react'

export default function List() {
    //     const numbers = [1,2,3,4,5];


    //   return (
    //     <div>
    //         {numbers.map(item  => <li key={item.toString()}>{item}</li>)}
    //     </div>
    //   )

    const todos = [
        { id: 1, text: 'A' },
        { id: 2, text: 'B' },
        { id: 3, text: 'C' },
        { id: 4, text: 'D' }
    ]

    const Item = (props) => {
        return (
            <li>
                {props.text}
                {props.id}
            </li>
        );
    }

    //map�� ���� key ���� HTML tag�� props�� ���� ���Ѵ�.
    //attribute ����ؾ� �Ѵ�.
    const todoList = todos.map((result) => <Item key={result.id} id={result.id} text={result.text} />);

    return (
        <>
            {todoList}
        </>
    );

}


// map             �迭�� ���� ��Ҹ� ��ȸ �̶� default key�� �������� ������ react�� index�� key�� ����Ѵ�
// key props       key�� props�� �Ѿ�� �ʴ´�. 

//����ȭ �Ҵ�(destructuring assignment)����
//�迭�̳� ��ü�� �Ӽ��� ��ü�Ͽ� ���� ���� ������ ���� �� �ְ� �ϴ� JSǥ����

// ...�� Ȱ���:
// ��ó:
// https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9

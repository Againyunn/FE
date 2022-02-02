import React, {useState} from 'react'

export default function State() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);



  return (
    <div>
        Count : {count}    
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(initialCount => initialCount+1)}>+</button>
        <button onClick={() => setCount(initialCount => initialCount-1)}>-</button>
    </div>
  )
}

//Hook�� if���̳� for�� ���ο��� ��� �Ұ���

//useState    ���� ���� ���ڷ� ������ �ʱ�ȭ ����(�Լ�)Ȱ�� ����
//useEffect   ������ �迭 Ȥ�� ���� �� �ִ�. [] �� �迭�� �� ���� �ִ�.
//useLayoutEffect   useEffect�� ����. ��� DOM ���� �� �������� ȭ���� �׸��� ���� ������ ���������� ����
//useReducer    ���� ���� �ݺ����� useState�� �ѹ��� ���ۿ��� ������ ����Ǵ� ���(switch���� Ȱ��)
//useRef        current�� ���� ����. ������ ������ react�� ���� ���Ѵ�. callback ref�� ����Ѵ�.

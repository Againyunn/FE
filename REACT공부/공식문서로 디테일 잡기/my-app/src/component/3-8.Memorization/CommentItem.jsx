import React, { useState, Profiler, memo, useMemo } from 'react'
import "./CommentItem.css";

function CommentItem(props) {

    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback(
        id, // ��� Ŀ�Ե� Profiler Ʈ���� "id"
        phase, // "mount" (Ʈ���� ��� ����Ʈ�� �� ���) Ȥ�� "update"(Ʈ���� ���������� ���)
        actualDuration, // Ŀ�Ե� ������Ʈ�� �������ϴµ� �ɸ� �ð�
        baseDuration, // �޸������̼� ���� ���� Ʈ�� ��ü�� �������ϴµ� �ɸ��� ����ð� 
        startTime, // React�� ���� �ش� ������Ʈ�� �������ϱ� �����ߴ���
        commitTime, // React�� �ش� ������Ʈ�� ���� Ŀ���ߴ���
        interactions // �� ������Ʈ�� �ش��ϴ� ��ȣ�ۿ���� ����
    ) {
        // ������ Ÿ�̹��� �����ϰų� �α�...
        console.log(`actualDuration(${props.title}: ${actualDuration})`);
    }

    const handleClick = () => {
        //�θ� ���κ��� onClick�̶�� �Լ��� ���� �ޱ�
        props.onClick();
        setClickCount((prev) => prev+1)
        alert(`${props.title}�ȳ�`);
    };


    const rate = useMemo(() => {
        console.log("rate check");
        return props.likes > 10 ? 'Good' : 'Bad'
    },[props.likes]);

    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className="CommentItem" onClick={handleClick}>
                <span>{props.title}</span>
                <br />
                <span>{props.content}</span>
                <br />
                <span>{props.likes}</span>
                <br />
                <span>{rate}</span>
                <br/>
                <span>{clickCount}</span>
            </div>
        </Profiler>
    )
}

export default memo(CommentItem);
//��� 1�� �̸� �ҿ�
//����� ��Ҹ� ���� �׸���.(������Ʈ�Ǵ� ��Ҹ� �׸���)

// export default CommentItem;
//��� ��ҵ��� ���� ���� �׷�����.(�޸� �ҿ� �� ��ȿ����)

//React.memo �� HOC / Props ���Ͽ� �޸�
//Profiler  �� ����Ʈ ���� �м�����
//callback �� useCallback
//value �� useMemo
import React, { useState, Profiler, memo, useMemo } from 'react'
import "./CommentItem.css";

function CommentItem(props) {

    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback(
        id, // 방금 커밋된 Profiler 트리의 "id"
        phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
        actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
        baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간 
        startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
        commitTime, // React가 해당 업데이트를 언제 커밋했는지
        interactions // 이 업데이트에 해당하는 상호작용들의 집합
    ) {
        // 렌더링 타이밍을 집합하거나 로그...
        console.log(`actualDuration(${props.title}: ${actualDuration})`);
    }

    const handleClick = () => {
        //부모 노드로부터 onClick이라는 함수도 전달 받기
        props.onClick();
        setClickCount((prev) => prev+1)
        alert(`${props.title}안녕`);
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
//평균 1초 미만 소요
//변경된 요소만 새로 그린다.(업데이트되는 요소만 그리기)

// export default CommentItem;
//모든 요소들이 전부 새로 그려진다.(메모리 소요 상 비효율적)

//React.memo → HOC / Props 비교하여 메모
//Profiler  → 리액트 성능 분석도구
//callback → useCallback
//value → useMemo
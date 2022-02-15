import React from 'react';
import moment from 'moment-timezone';

export default function MomentExample() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week"); //현재 날짜에서 1주를 추가
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  return (
    <div style={{ textAlign: "center" }} >
      <h1>Moment</h1>
      <div>Immutable check</div>
      <div >
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기!
        {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기!
        {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
      </div>
      <br />
      <div>Leap Year (korea)</div>
      <div>
        2017년 1월 1일에서 1년 빼기 :
        {moment("2017-01-01 00:00:00").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에서 365일 빼기 :
        {moment("2017-01-01 00:00:00").subtract(365, "day").format()}
      </div>
    </div>
  )
}


//clone을 하면 특정 시간대로 지정할 수 있지만, clone하지 않으면 특정 날짜에 대한 수정을 하면 해당 수정 내역이 원래의 객체 데이터에도 영향을 미친다.
//moment-timezone을 통해 해당 지역의 시간대에 대한 timezone변화까지도 체크하고 적용해준다<div className=""></div>

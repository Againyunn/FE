/**현재상영하고 있는 영화 데이터 불러오기 */
document.write("<script src='./data/currentMovie.js'></script>");
// const movieList = getMovieList();

/**상영예정 영화 데이터 불러오기 */
document.write("<script src='./data/upcomingMovie.js'></script>");
// const movieList = getMovieList();


/**예매 기능 */
/************************************************** */

function returnError(error){
    alert(`${error}`);
}


/**간단한 로그인 기능 */
function setUserName(thisId){
    let selectedSeatId = document.getElementById(thisId);

    //입력받은 유저 아이디(이름) 받아오기
    let userName = selectedSeatId.value;

    //유저 아이디를 쿠키로 저장
    if(localStorage['userName'] !== undefined){
        localStorage['userName'] = userName;
    }
    else{
        localStorage.setItem('userName', userName);
    }

    //동기화(상태관리가 불가하므로 재로딩)
    window.location.reload();
}

/**사용자 설정 시 자동 입력 기능*/
function setUser(){
    let thisUser = localStorage.getItem("userName");
    let inputUser;

    if(thisUser !== null && thisUser !== undefined){
        inputUser = document.getElementById("userName");
        inputUser.value = thisUser;
    }
}


/**영화리스트 */
//영화리스트 생성 함수
function createMovieList(movieList){
    //표 시작
    document.write(`
        <table id="movieTable">
    `);

    for(var i = 0; i < movieList.length; i++){

        document.write(`
            <tr>
                <div class="movieList" id="${movieList[i].name}" onclick="selectMovie(this.id, movieList)">
                    <span id="movieTitle">
                        ${movieList[i].name}
                    </span>
                </div>
            </tr>
        `)
    }

    //표 종료
    document.write(`
        </table>
    `);
}

/**
 * tmp${useName}
 * 현재 예매하고 있는 정보 
 * 
 * booked${userName}
 * 예매 완료한 기존의 이력
 * */


//영화 선택 함수
function selectMovie(thisId, movieList){
    let userName = localStorage.getItem('userName');
    let selectedSeatId = document.getElementById(thisId);

    if(userName === null || userName === undefined){
        returnError("예매자 명을 입력해주세요.");
        return;
    }

    //클릭한 영화가 선택되었는 지 확인
    if(localStorage.getItem(`tmp${userName}`) === `${thisId}`){
        //기존에 선택했던 영화를 다시 클릭 -> 해당 영화 선택 해제
        selectedSeatId.style.backgroundColor = '#FFFFFF';
        selectedSeatId.style.color = 'black';

        localStorage.removeItem(`tmp${userName}`);
    }

    
    else{
        for(var i = 0; i < movieList.length; i++){
            document.getElementById(movieList[i].name).style.backgroundColor = '#FFFFFF';
            document.getElementById(movieList[i].name).style.color = 'black';
        }
        //새롭게 선택한 영화인 경우
        selectedSeatId.style.backgroundColor = '#00B594';
        selectedSeatId.style.color = 'white';
        localStorage.setItem(`tmp${userName}`,`${thisId}`);
    }

    //선택 변경시 상태값 적용 → rerendering
    checkedObject();
}



/**날짜 생성 함수*/
function createDate(start, days){

    let today, year, month, date, day = null;

    if(start == 'today'){
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth()+1;
        date = today.getDate();
        day = today.getDay(); //일: 0 ~ 토: 6
    }

    //윤년 계산
    let leapYear = false;
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        leapYear = true;
    }

    //표 시작
    document.write(`
        <table className="dateTable" id="dateTable">
    `);

    //월 생성
    document.write(`
        <tr>
            <div class="reserveMonth" id="month${month}">
                ${month}월
            </div>
        </tr>
    `);

    for(var i = 0; i < days; i++){
        /**변수 정의*/
        //요일 설정(css적용 용도)
        var thisDay = (day + i) % 7;
        
        //날짜 설정(말일, 월초 지정)
        var thisDate = date + i;

        //열 생성
        document.write(`
            <tr>
                <div class="reserveDate">
                    <div class="day${thisDay}" id="${year},${month},${thisDate},${thisDay}" onclick="selectDate(this.id)">
                        ${date + i}일
                    </div>
                </div>
            </tr>
        `);

        if(thisDate < 28){
            thisDate++;
        }


        /**말일 초기화 여부 결정*/
        if(thisDate == 28){
            //윤년이 아닌 경우
            if(month == 2 || leapYear === false){
                date = 0;
                month++;
                //월 생성
                document.write(`
                    <tr>
                        <div class="reserveMonth" id="month${month}">
                            ${month}월
                        </div>
                    </tr>
                `);
            }
        }

        if(thisDate == 29){
            //윤년인 경우
            if(month == 2 || leapYear === true){
                date = 0;
                month++;
                //월 생성
                document.write(`
                    <tr>
                        <div class="reserveMonth" id="month${month}">
                            ${month}월
                        </div>
                    </tr>
                `);
            }
        }

        if(thisDate == 30){
            //30일에 끝나는 달인 경우
            if(month == 4|| month == 6 || month == 9 || month == 11){
                date = 0;
                month++;
                //월 생성
                document.write(`
                    <tr>
                        <div class="reserveMonth" id="month${month}">
                            ${month}월
                        </div>
                    </tr>
                `);
            }
        }

        if(thisDate == 31){
            //31일에 끝나는 달인 경우
            if(month == 1|| month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
                date = 0;
                month++;

                if(month == 12){
                    year++;
                }

                //월 생성
                document.write(`
                    <tr>
                        <div class="reserveMonth" id="month${month}">
                            ${month}월
                        </div>
                    </tr>
                `);
            }
        }
    }

    //표 종료
    document.write(`
        </table>
    `);
}


//날짜 클릭 시
function selectDate(thisId){
    //앞의 영화이름을 선택했는 지 검증
    let thisUser = localStorage.getItem('userName');
    let getData = localStorage.getItem(`tmp${thisUser}`);
    let thisMovie = null;
    
    console.log("getData:", getData);

    if(userName === null || userName === undefined){
        returnError("예매자 명을 입력해주세요.");
        return;
    }

    //데이터가 있다면
    if(getData!==null){/**`tmp${thisUser}`: 영화이름*/
        thisMovie = getData;
    }
    else{
        //영화를 선택해주세요.
        returnError("영화를 선택해주세요.");
        return;
    }
    
    if(thisMovie == null){
        //영화를 선택해주세요.
        returnError("영화를 선택해주세요.");
        return;
    }

    let selectedSeatId, thisYear, thisMonth, thisDate = null;
    selectedSeatId = document.getElementById(thisId);

    let allData = getData.split('/');

    //기존에 선택한 날짜가 있는 경우
    if(allData[1] === thisId){
        
        thisDate = allData[1];

        selectedSeatId = document.getElementById(thisDate);
        
        selectedSeatId.style.backgroundColor = "#FFFFFF";

        //날짜 선택 해제 후 요일에 맞게 css 색 서식 복구
        if(thisDate.split(',')[3] == 0){
            selectedSeatId.style.color = "red";
        }
        else if(thisDate.split(',')[3] == 6){
            selectedSeatId.style.color = "blue";
        }
        else{
            selectedSeatId.style.color = "black";
        }
        
        //선택해제한 날짜 정보를 반영
        var updatedData = allData[0];
        localStorage[`tmp${thisUser}`] = updatedData;
        
    }
    //현재 선택한 날짜 css 표시
    else{
        selectedSeatId.style.backgroundColor = "#00B594";
        selectedSeatId.style.color = "white";
    }

    //예매 날짜 정보를 반영
    var updatedData = `${allData[0]}/${thisId}`;

    localStorage.setItem(`tmp${thisUser}`, updatedData);
    //선택 변경시 상태값 적용 → rerendering
    checkedObject();

    location.reload();
}


/**영화시간 선택 */
//1개 상영시간 블럭 생성
function createTime(movieList){//name: 영화이름, startTime: 시작시간, runtime: 상영시간

    //현재 영화 제목 받아오기
    let thisMovie;
    let thisTimes;
    let reserveDay;
    let reserveStartTime;
    let reserveEndTime;

    //예매 정보 받아오기
    let thisUser = localStorage.getItem('userName');
    let getData = localStorage.getItem(`tmp${thisUser}`);
    let allData;

    //데이터가 있다면
    if(getData!==null){/**`tmp${thisUser}`: 영화이름/년,월,일,요일*/
        allData = getData.split(`/`);
        thisMovie = allData[0]; /**영화이름 */
        reserveDay = allData[1];  /**년,월,일,요일 */

        console.log("thisTest:",thisMovie,reserveDay);
        //관람 날짜를 선택했는 지 검증
        if(reserveDay === null){
            return;
        }
    }
    else{
        return;
    }
    /**
     * movieList 의 데이터 형태
     * 0/10:20/12:10*5/11:15/13:00 
    */
    for(var j = 0; j < movieList.length; j++){
        //console.log("j:",j,"movieList:",movieList[j].name);
        if(movieList[j].name === thisMovie){
            thisTimes = movieList[j].time.split('*');
            console.log("thisTimes:",thisTimes);
            for(var i = 0; i < thisTimes.length; i++){

                reserveStartTime = thisTimes[i].split('/');
                console.log("reserveStartTime",reserveStartTime);

                if(reserveDay !== null && reserveDay.split(',')[3] == reserveStartTime[0]){
                    //영화 시작 일시 정보 디코딩
                    startTime = reserveStartTime[1].split(':');
                    startHour = startTime[0]
                    startMinute = startTime[1]

                    //영화 종료 일시 정보 디코딩
                    endTime = reserveStartTime[2].split(':');
                    endHour = endTime[0]
                    endMinute = endTime[1]

                    // console.log("startHour:",startHour);
                    // console.log("startMinute:",startMinute);
                    // console.log("endHour:",endHour);
                    // console.log("endMinute:",endMinute);


                    document.write(`
                        <div class="movieFrame" id="${startTime}" onclick="selectTime(this.id)">
                            <span>${thisMovie}</span>
                            <br/>
                            <span>시작시간: ${startHour}시 ${startMinute}분 </span>
                            <br/>
                            <span>종료시간: ${endHour}시 ${endMinute}분</span>
                        </div>
                    `)
                }
            }
        }
    }
}

//상영시간 선택함수
function selectTime(thisId){
    let selectedSeatId = document.getElementById(thisId);

    let thisUser = localStorage.getItem('userName');
    let getData = localStorage.getItem(`tmp${thisUser}`);
    let allData;

    if(userName === null || userName === undefined){
        returnError("예매자 명을 입력해주세요.");
        return;
    }

    //데이터가 있다면
    if(getData!==null){/**`tmp${thisUser}`: 영화이름/년,월,일,요일*/
       allData = getData.split(`/`);
       thisMovie = allData[0]; /**영화이름 */
       reserveDay = allData[1];  /**년,월,일,요일 */

       console.log("thisTest:",thisMovie,reserveDay);
       //관람 날짜를 선택했는 지 검증
       if(reserveDay === null){
           returnError("관람날짜를 선택해주세요.");
           return;
       }
    }
    else{
        returnError("영화를 선택해주세요.");
        return;
    }

    allData = getData.split('/'); /**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분*/

    //클릭한 시간이 선택되었는 지 확인
    if(allData[2] === thisId){
        //기존에 선택했던 시간을 다시 클릭 -> 해당 시간 선택 해제
        document.getElementById(thisId).style.backgroundColor = '#FFFFFF';
        document.getElementById(thisId).style.color = 'black';
        // selectedSeatId.style.opacity = 0.5;

        var updatedData = `${allData[0]}/${allData[1]}`;
        localStorage[`tmp${thisUser}`] = updatedData;
    }
    else{
        //새롭게 선택한 시간인 경우
        document.getElementById(thisId).style.backgroundColor = '#00B594';
        document.getElementById(thisId).style.color = 'white';
        // selectedSeatId.style.opacity = 1;
        var updatedData = `${allData[0]}/${allData[1]}/${thisId}`;

        localStorage.setItem(`tmp${thisUser}`, updatedData);
    }

    
    //선택 변경시 상태값 적용 → rerendering
    checkedObject();
    location.reload();
}

/**좌석 선택관련 함수 모음*/


//좌석 생성 함수
function createSeat(type, rows, cols){ //type은 생성할 좌석의 라인 위치

    let seatRows = ['A','B','C','D','E','F','G','H','I','J','K','L']; //최대 12열까지 가능
    let thisUser = localStorage.getItem('userName');
    let allData = localStorage.getItem(`tmp${thisUser}`);/**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분*/

            
    if(cols >= 10){
        console.log("seat cols의 범위를 초과했습니다.");
    }

    
    //표 시작
    document.write(`
        <table class="timeItem" id="${type}">
    `);
    
    for(var i = 0; i < rows; i++){
        //열 생성
        document.write(`
            <tr>
        `);
        for(var j = 0; j < cols; j++){

            let tmp = seatRows[i]+j;

            document.write(`
                <td> 
                    <div class="seat" id="${tmp}" onclick="selectSeat(this.id)" >
                        <img src="./media/component/seat_checked.jpg" alt="좌석" width="40px">
                    </div>
                </td>
            `);

            //기존에 선택된 좌석이라면 선택되었다는 표시 css적용
            if(localStorage.getItem(`seat${tmp}/${allData}`)!==undefined && localStorage.getItem(`seat${tmp}/${allData}`)!==null){
                document.getElementById(`${tmp}`).style.opacity = 1;
            }
        
        }
        //열 종료
        document.write(`
            </tr>
        `);
    }
    
    //표 종료
    document.write(`
        </table>
    `);
}

//좌석 선택함수
function selectSeat(thisId) {//thisId: 선택된 좌석id 받기
    let selectedSeatId = document.getElementById(thisId);

    let thisCount = null;

    let thisUser = localStorage.getItem('userName');
    let getData = localStorage.getItem(`tmp${thisUser}`);
    let allData;

    if(userName === null || userName === undefined){
        returnError("예매자 명을 입력해주세요.");
        return;
    }

    //데이터가 있다면
    if(getData!==null & getData!== undefined){/**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분*/
       allData = getData.split(`/`);
       thisMovie = allData[0]; /**영화이름 */
       reserveDay = allData[1];  /**년,월,일,요일 */
       reserveTime = allData[2]; /**시,분 */

       //관람 시간을 선택했는 지 검증
       if(reserveTime === null||reserveTime === undefined){
           returnError("관람시간을 선택해주세요.");
           return;
       }
    }
    else{
        returnError("영화를 선택해주세요.");
        return;
    }

    allData = getData.split('/'); /**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분/좌석번호...*/



    //클릭한 좌석이 선택되었는 지 확인
    if(localStorage.getItem(`seat${thisId}/${allData[0]}/${allData[1]}/${allData[2]}`) !== undefined & localStorage.getItem(`seat${thisId}/${allData[0]}/${allData[1]}/${allData[2]}`) !== null  ){
        
        if(localStorage.getItem(`seat${thisId}/${allData[0]}/${allData[1]}/${allData[2]}`) === thisUser){
            //기존에 선택했던 좌석을 다시 클릭 -> 해당 좌석 선택 해제
            selectedSeatId.style.opacity = 0.2;
            localStorage.removeItem(`seat${thisId}/${allData[0]}/${allData[1]}/${allData[2]}`);

            //기록에서 삭제할 현재 좌석번호 찾기
            var saveSeat = '';

            for(var i = 3; i < allData.length; i++){

                if(allData[i] !== thisId){
                        saveSeat+=`/${allData[i]}`;
                }
            }

            //좌석정보 업데이트
            var updatedData = `${allData[0]}/${allData[1]}/${allData[2]}${saveSeat}`;
            localStorage[`tmp${thisUser}`] = updatedData;
        }

    }
    else{
        //새롭게 선택한 좌석인 경우
        selectedSeatId.style.opacity = 1;
        //localStorage.setItem(`seat${thisId}/${allData[0]}/${allData[1]}/${allData[2]}`,thisUser);

        //좌석정보 업데이트
        var updatedData= `${allData[0]}`;

        for(var i = 1; i < allData.length; i++){
            updatedData += `/${allData[i]}`;
        }

        localStorage[`tmp${thisUser}`] = updatedData + `/${thisId}`;

    }

    //선택 변경시 상태값 적용 → rerendering
    checkedObject();
}


/**예매 결정*/
function setReserve(){
    let thisUser, thisMovie, thisDate, thisTime, seatRow, seatCol, peopleCount = null;
    let seatInfo =[];//좌석정보

    let seatRows = ['A','B','C','D','E','F','G','H','I','J','K','L']; //최대 12열까지 가능

    let blockTop =`
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">예매 확인</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        
        <!-- 예매정보출력 -->
    `;

    let blockBottom = `
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">변경하기</button>
        <button type="button" class="btn btn-success" onclick="confirmReservation()">예매하기</button>
        </div>
    `;

    let blockError = `
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">확인</button>
        </div>
    `

    //예매 정보 쿠키에서 받아오기
    thisUser = localStorage['userName'];
    let getData = localStorage.getItem(`tmp${thisUser}`);

    //예매 정보 디코딩
    /**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분/좌석번호...*/
    let allData = getData.split('/');

    for(var i = 0; i < allData.length; i++){
        if(i >= 3){
            seatInfo.push(`${allData[i]}`)//좌석정보
        }
        else{
            thisMovie = allData[0]; //영화제목
            thisDate = allData[1];  //관람일자
            thisTime = allData[2];  //관람시각
        }
    }


    console.log("thisUser:",thisUser);
    //필수 값 선택여부 확인
    if(!thisUser){
        document.getElementById("reservationResult").innerHTML=`
            ${blockTop}
            <div>
                예매자 성명을 입력해주세요.
            </div>
            ${blockError}
        `
        return;
    }
    if(!thisMovie){
        document.getElementById("reservationResult").innerHTML=`
            ${blockTop}
            <div>
                영화를 선택해주세요.
            </div>
            ${blockError}
        `
        return;
    }
    if(!thisDate){
        document.getElementById("reservationResult").innerHTML=`
            ${blockTop}
            <div>
                관람 날짜를 선택해주세요.
            </div>
            ${blockError}
        `
        return;
    }
    if(!thisTime){
        document.getElementById("reservationResult").innerHTML=`
            ${blockTop}
            <div>
                관람 시간을 선택해주세요.
            </div>
            ${blockError}
        `
        return;
    }

    //좌석 정보 받아오기
    
    // for(var i = 0; i < 10; i++){ //1관 당최대 100석까지만 허용할 것이므로 
    //     for(var j = 0; j < 10; j++){
    //         let seatTmp = seatRows[i]+j

    //         tmp = localStorage[`seat${seatTmp}`];
    //         if(tmp !== null & tmp !== undefined){
    //             tmp = tmp.split(',');
    //             console.log('tmp:',tmp);
    //             if(tmp[8] === thisUser){
    //                 seatInfo.push(tmp[0]);
    //             }
    //         }
    //     }
    // }

    //좌석정보 에러처리
    if(seatInfo.length === 0){
        document.getElementById("reservationResult").innerHTML=`
            ${blockTop}
            <div>
                좌석을 선택해주세요.
            </div>
            ${blockError}
        `
    return;
    }

    peopleCount = seatInfo.length;

    console.log("thisTime:", thisTime);

    //예매 날짜 정보 디코딩
    let reserveDate = thisDate.split(',');
    thisYear = reserveDate[0]
    thisMonth = reserveDate[1]
    thisDate = reserveDate[2]

    //예매 시간 정보 디코딩
    let reserveTime = thisTime.split(',');
    thisHour = reserveTime[0]
    thisMinute = reserveTime[1]

    //좌석 정보 디코딩
    let thisSeat = []

    seatInfo.map(element => (
        
        thisSeat.push(element)
    ));
    
    //가격산정
    let thisAmount = seatInfo.length * 10000;

    document.getElementById("reservationResult").innerHTML=`

        ${blockTop}
        <div>예매 정보를 확인해주세요 :)</div>
        <table>
            <tr>
                <td><b>예매자 명: </b></td>
                <td>${thisUser}</td>
            </tr>
            <tr>
                <td><b>영화 제목: </b></td>
                <td>${thisMovie}</td>
            </tr>
            <tr>
                <td><b>예매 일시: </b></td>
                <td>${thisYear}년${thisMonth}월${thisDate}일 ${thisHour}:${thisMinute}</td>
            </tr>
            <tr>
                <td><b>인원 수: </b></td>
                <td>${peopleCount}명</td>
            </tr>
            <tr>
                <td><b>좌석: </b></td>
            ${
                seatInfo.map(seat => (
                    `<td>
                        ${seat}석
                    </td>
                    `
                ))
            }
            </tr>
            <tr>
                <td><b>가격: </b></td>
                <td>${thisAmount}원</td>
            </tr>
        </table>
        ${blockBottom}
    `

    // tmp = localStorage['/seat\d{0,3}'];
}



//선택된 항목 검사 후 화면에 표시
function checkedObject(){
    //현재 접속한 유저 정보 받아오기
    let thisUser = localStorage.getItem(`userName`);
    let allData;

    //현재 저장된 정보 확인
    /**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분/좌석번호...*/
    let getData = localStorage.getItem(`tmp${thisUser}`);
    if(getData !== null && getData !== undefined){
        allData = getData.split('/');
        if(thisUser !== null && thisUser !== undefined ){
            document.getElementById("userName").value = thisUser;
            console.log("testInputName2:",thisUser);
        }
        
        //영화제목 선택
        let checkedMovie = allData[0];
        console.log("checkedMovie:", checkedMovie);
    
        if(checkedMovie !== null && checkedMovie!==undefined ){
            document.getElementById(checkedMovie).style.backgroundColor = '#00B594';
            document.getElementById(checkedMovie).style.color = 'white';
        }
    
        //날짜 선택
        let checkedDate = allData[1];
        console.log("checkedDate:", checkedDate);
    
        if(checkedDate !== null && checkedDate !== undefined ){
            document.getElementById(checkedDate).style.backgroundColor = '#00B594';
            document.getElementById(checkedDate).style.color = 'white';
        }
    
        //시간 선택
        let checkedTime = allData[2];
    
        console.log("checkedTime:", checkedTime);
    
        if(checkedTime !== null && checkedTime !== undefined ){
            document.getElementById(checkedTime).style.backgroundColor = '#00B594';
            document.getElementById(checkedTime).style.color = 'white';
        }
    }
}

//예매확정
function confirmReservation(){
    

    //예매 정보 쿠키에서 받아오기
    let thisUser = localStorage['userName'];
    let getData = localStorage.getItem(`tmp${thisUser}`);

    //예매 정보 디코딩
    /**`tmp${thisUser}`: 영화이름/년,월,일,요일/시,분/좌석번호...*/
    let allData = getData.split('/');
    let seatInfo = "";

    for(var i = 0; i < allData.length; i++){
        if(i == 3){
            seatInfo += `${allData[i]}`//좌석정보
        }
        else if( i >3){
            seatInfo += `/${allData[i]}`//좌석정보
        }
        else{
            thisMovie = allData[0]; //영화제목
            thisDate = allData[1];  //관람일자
            thisTime = allData[2];  //관람시각
        }
    }

    
    //예매 날짜 정보 디코딩
    let reserveDate = thisDate.split(',');
    thisYear = reserveDate[0]
    thisMonth = reserveDate[1]
    thisDate = reserveDate[2]

    //예매 시간 정보 디코딩
    let reserveTime = thisTime.split(',');
    thisHour = reserveTime[0]
    thisMinute = reserveTime[1]

    let seatArray = seatInfo.split("/");
    peopleCount = seatArray.length;

    /**최종 예매정보 기록*/
    //기존의 예매 내역이 없을 경우
    if(localStorage.getItem(`booked/${thisUser}`) === null || localStorage.getItem(`booked/${thisUser}`) === undefined){
        localStorage.setItem(`booked/${thisUser}`, `${thisMovie}/${thisYear}년/${thisMonth}월/${thisDate}일/${thisHour}:/${thisMinute}/${peopleCount}명/${seatInfo}`);
    }

    //기존의 예매 내역이 있는 경우
    else{
        let existReservation = [];
        existReservation.push(localStorage.getItem(`booked/${thisUser}`));
        console.log("existReservation:", existReservation);
        existReservation.push(`${thisMovie}/${thisYear}년/${thisMonth}월/${thisDate}일/${thisHour}:/${thisMinute}/${peopleCount}명/${seatInfo}`);
        // localStorage[`${thisUser}`] = existReservation;
        localStorage.setItem(`booked/${thisUser}`, existReservation);
    }

    //에매좌석 정보 기록
    for(var i = 0; i < seatArray.length; i++){
        localStorage.setItem(`seat${seatArray[i]}/${allData[0]}/${allData[1]}/${allData[2]}`,thisUser)
    }

    //각 예매 항목별 임시 저장기록 삭제
    localStorage.removeItem(`tmp${thisUser}`);

    location.href="./bookingSuccess.html"
}

/************************************************** */


/**페이지 이동 관련 함수 */
/************************************************** */
//홈화면으로
function goHome(){
    location.href="./main.html"
}

//예매화면으로
function goBooking(){
    location.href ="./booking.html";
}

//예매확인화면으로
function checkBooking(){
    location.href ="./checkBooked.html";
}

//상세 영화시간 선택 및 영화 좌석 선택


/**캐러셀 출력 */
/************************************************** */
function printCarousel(){
    let topBlock = `
    
        <div class="carouselContainer">
            <div class="carouselItem">
            <!-- 캐러셀 사용(bootstrap) -->
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
    `

    let bottomBlock = `
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    `

    let content = `
    <div class="carousel-item active">
        <img src="${movieList[0].img}" width="500px" height="750px"  alt="...">
    </div>
    `

    //모든 movieList의 내용 담기
    for(var i = 1; i < movieList.length; i++){
        content += `
            <div class="carousel-item">
                <img src="${movieList[i].img}" width="500px"  height="750px"  alt="...">
            </div>
        `
    }

    document.getElementById("carousel").innerHTML = `
        ${topBlock}${content}${bottomBlock}
    `;

}
/************************************************** */

/**예매확인& 취소 기능 */
/************************************************** */
/**예매확인 */
function getBookedList(){
    let thisUser = localStorage.getItem("userName");

    let getData = localStorage.getItem(`booked/${thisUser}`);
    if(getData === null || getData === undefined){
        returnError("영화예매를 해주세요:)");
        return;
    }
    
    console.log("getData:",getData);

    //배열로 변환
    let allData = getData.split(",");

    console.log("allData:",allData);

    let bookedMovieList = [];
    //영화정보
    let reservedName = '';
    let reservedDate = ''; 
    let reservedTime = ''; 
    let reservedPeopleCount = '';
    let reservedSeat = [];

    //출력할 화면 정보
    let printBookedBlock = '';



    //유저에 해당하는 영화리스트 디코딩
    for(var i = 0; i < allData.length; i++){
        
        var thisData = allData[i].split("/");

        console.log(`thisData${i}:`, thisData);
        //getData[i] = JSON.parse(getData[i]);
        //한번 예약할 때 저장된 값 단위대로 디코딩
        for(var j = 0; j <thisData.length; j++){
            if(j == 0){
                reservedName = thisData[j];
            }
            else if(1 <= j && j <= 3){
                reservedDate += `${thisData[j]}`;
            }
            else if(4 <= j && j <= 5){
                reservedTime += `${thisData[j]}`;
            }
            else if(j == 6){
                reservedPeopleCount = `${thisData[j]}`;
            }
            else{
                reservedSeat.push(`${thisData[j]}`);
            }

            console.log("test:",thisData[j])
        }

            //예매 내역 화면에 랜더링
            printBookedBlock += `
            
            <div class="accordion-item" id="booked/${allData[i]}">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${reservedName}, ${reservedSeat.length}명
                    </button>
                </h2>

                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h3>${reservedName}</h3>
                            <table>
                                <tr class="card-text">    
                                    <td>날짜:&nbsp;</td>
                                    <td>${reservedDate}</td>
                                </tr>
                                <tr class="card-text">
                                    <td>시작시각:&nbsp;</td>
                                    <td>${reservedTime}</td>
                                </tr>
                                <tr class="card-text">
                                    <td>좌석:&nbsp;</td>
                                    <td>${reservedSeat[0]}
            `


            //예매 좌석이 2개이상인 경우
            if(reservedSeat.length > 1){
                //좌석정보 담기
                for(var k = 1; k < reservedSeat.length; k++){
                    printBookedBlock += `
                        , ${reservedSeat[k]}
                    `
                }
            }

            let reservedAmount = reservedSeat.length * 10000;

            printBookedBlock += `
                                </td>
                            </tr>
                            <tr>
                                <td>가격:&nbsp;</td>
                                <td>${reservedAmount}원</td>
                            </tr>
                        </table>
                        <br/>
                        <button type="button" class="btn btn-danger" id="${allData[i]}" onclick="cancelBooked(this.id)">예매취소</div>
                    </div>
                </div>
            </div>
            

            `

            document.write(printBookedBlock);

            //다음정보 디코딩을 위해 초기화


            reservedName = '';
            reservedDate = ''; 
            reservedTime = ''; 
            reservedPeopleCount = '';
            reservedSeat = [];
        
            //출력할 화면 정보
            printBookedBlock = '';
    }


}

const printAllBookedList = () => {
    document.write(`
    <div class="bookedFrame">
        <h3>예매 내역 리스트</h3><br/>
            <div class="accordion" id="accordionBookedList">
    `)
    getBookedList();
    document.write(`
    </div>
    </div>
    `)
}

/**예매취소 */
function cancelBooked(thisId){ /**thisId = 닥터스트레인지2,2022년,5월,13일,11:,15,2명,E3,E4  와 같은 형식*/
    let thisUser = localStorage.getItem("userName");

    let getData = localStorage.getItem(`booked/${thisUser}`);

    //배열로 변환
    let allData = getData.split(",");

    let updateData = '';

    for(var i = 0; i < allData.length; i++){
        //예매기록에서 삭제할 예매 건 식별 후 제외
        if(thisId !== allData[i]){
            updateData += `${allData[i]}`;
        }
    }

    //선택된 예매 내역 삭제된 정보 업데이트
    localStorage.setItem(`booked/${thisUser}`, `${updateData}`);

    if(updateData === ''){
        localStorage.removeItem(`booked/${thisUser}`);
    }

    window.location.reload();
}
/************************************************** */


/**영화 리스트 출력함수 */
/************************************************** */
/**현재상영작 안내 
 * 출력할 내용:
 *      1.제목
 *      2.이미지
*/
function currentMovieList(movieList){//현재 상영작 리스트 받아오기
    /**구분방식:     
    name:"이름"
    time:"요일번호/시작/종료*요일번호/시작/종료"
    img:"썸네일 이미지의 경로"
    */



    //출력할 내용을 담은 현재상영작 mapping해서 출력
    for(var i = 0; i < movieList.length; i++){
        let thisBrief  = ''
        for(var j = 0; j < 100; j++){
            thisBrief += movieList[i].brief[j];
        }
        thisBrief += `...`;

        document.write(`
        <div class="currentMovieBlock">
            <div class="card" style="width: 18rem;">
                <img src="${movieList[i].img}" class="card-img-top" alt="${movieList[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${movieList[i].name}</h5>
                    <p class="card-text">${thisBrief}</p>
                    <button type="button" class="btn btn-success" onclick="goBooking()">예매하기</button>
                </div>
            </div>
        </div>
    `)
    }
    
}

/**개봉예정작 안내 
 * 출력할 내용:
 *      1.제목
 *      2.이미지
 *      3.개봉예정일
*/
function upcomingMovieList(comingSoonMovieList){//현재 상영작 리스트 받아오기
    /**구분방식:     
    name:"이름"
    time:"요일번호/시작/종료*요일번호/시작/종료"
    img:"썸네일 이미지의 경로"
    */

    //출력할 내용을 담은 현재상영작 mapping해서 출력
    for(var i = 0; i < comingSoonMovieList.length; i++){
        let thisBrief  = ''
        for(var j = 0; j < 100; j++){
            thisBrief += comingSoonMovieList[i].brief[j];
        }
        thisBrief += `...`;

        document.write(`
        <div class="currentMovieBlock">
            <div class="card" style="width: 18rem;">
                <img src="${comingSoonMovieList[i].img}" class="card-img-top" alt="${comingSoonMovieList[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${comingSoonMovieList[i].name}</h5>
                    <p class="card-text">${thisBrief}</p>
                </div>
            </div>
        </div>
    `)
    }
}




/**여러 공통 출력 함수 */
/************************************************** */
/**헤더&푸터 출력 함수 */
function showHeader(){
    document.write(`
    <div id="mainHeader">
        <a id="anchor" href="./main.html" target="_self">
            <img src="./media/component/대표이미지.jpg" alt="대표이미지">
            <h2 id="main_font">다시, 봄</h2>
        </a>
    </div> 

    <nav>
        <table>
            <tr>
                <td><a id="anchor" href="./booking.html" target="_self" >영화예매</a></td>
                <td><a id="anchor" href="./currentMovieList.html" target="_self" >현재상영작</a></td>
                <td><a id="anchor" href="./upcomingMovieList.html" target="_self" >개봉예정작</a></td>
                <td><a id="anchor" href="./about.html" target="_self" >극장안내</a></td>
            </tr>
        </table>
    </nav>
    `)
}

function showFooter(){
    document.write(`
        <footer>
            <table>
                <tr>
                    <td>
                        <img src="./media/component/대표이미지.jpg" alt="대표이미지">
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        (주)Againyunn's Film &nbsp; 주소: 제주 제주시 용담로 105 <br>Tel: 064)123-4567 <br>대표자명: 정재윤
                    </td>
                </tr>
            </table>
        </footer>
    `)
}
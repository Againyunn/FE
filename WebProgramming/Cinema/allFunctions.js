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
                <div class="movieList" id="${movieList[i].name}" onclick="selectMovie(this.id)">
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

//영화 선택 함수
function selectMovie(thisId){
    let selectedSeatId = document.getElementById(thisId);

    console.log("selectMovie:",thisId);

    let movieList = [
        {
            name:"닥터스트레인지2"
        },
        {
            name:"신기한동물사전3"
        }
    ];


    
    //클릭한 영화가 선택되었는 지 확인
    if(localStorage.getItem(`movie`) === `${thisId}`){
        //기존에 선택했던 영화를 다시 클릭 -> 해당 영화 선택 해제
        selectedSeatId.style.backgroundColor = '#FFFFFF';
        selectedSeatId.style.color = 'black';

        localStorage.removeItem(`movie`);
    }

    
    else{
        for(var i = 0; i < movieList.length; i++){
            document.getElementById(movieList[i].name).style.backgroundColor = '#FFFFFF';
            document.getElementById(movieList[i].name).style.color = 'black';
        }
        //새롭게 선택한 영화인 경우
        selectedSeatId.style.backgroundColor = '#00B594';
        selectedSeatId.style.color = 'white';
        localStorage.setItem(`movie`,`${thisId}`);

    }
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
        <table id="dateTable">
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
                    <div class="day${thisDay}" id="${year},${month},${thisDate}" onclick="selectDate(this.id)">
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
    let selectedSeatId, thisYear, thisMonth, thisDate = null;
    let thisUser = localStorage.getItem('userName');
    let thisMovie = localStorage.getItem('movie');

    //기존에 선택한 날짜가 있는 경우
    if(localStorage.getItem(`thisDate,${thisMovie},${thisUser}`)!== undefined){
        if(localStorage.getItem(`thisDate,${thisMovie},${thisUser}`)!== null){
            thisDate = localStorage[`thisDate,${thisMovie},${thisUser}`];
    
            selectedSeatId = document.getElementById(thisDate);
    
            selectedSeatId.style.fontWeight = "normal";
            localStorage.removeItem(`thisDate,${thisMovie},${thisUser}`);
        }
    }
    //현재 선택된 날짜로 값 변경
    selectedSeatId = document.getElementById(thisId);
    selectedSeatId.style.fontWeight = "bold";

    //예매 날짜 정보 쿠키 저장
    localStorage.setItem(`thisDate,${thisMovie},${thisUser}`, thisId);

}


/**영화시간 선택 */
//1개 상영시간 블럭 생성
function createTime(startTime, endTime){//name: 영화이름, startTime: 시작시간, runtime: 상영시간

    let thisMovie = localStorage.getItem('movie');

    //영화 시작 일시 정보 디코딩
    let reserveStartTime = startTime.split(':');
    startHour = reserveStartTime[0]
    startMinute = reserveStartTime[1]

    //영화 종료 일시 정보 디코딩
    let reserveEndTime = endTime.split(':');
    endHour = reserveEndTime[0]
    endMinute = reserveEndTime[1]


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

//상영시간 선택함수
function selectTime(thisId){
    let selectedSeatId = document.getElementById(thisId);

    let thisUser = localStorage.getItem('userName');
    let thisMovie = localStorage.getItem('movie');
    let thisDate = localStorage[`thisDate,${thisMovie},${thisUser}`];


    //클릭한 시간이 선택되었는 지 확인
    if(localStorage.getItem(`time,${thisDate},${thisMovie},${thisUser}`) === thisId){
        //기존에 선택했던 시간을 다시 클릭 -> 해당 시간 선택 해제
        selectedSeatId.style.opacity = 0.5;
        localStorage.removeItem(`time,${thisDate},${thisMovie},${thisUser}`);
    }
    else{
        //새롭게 선택한 시간인 경우
        selectedSeatId.style.opacity = 1;
        localStorage.setItem(`time,${thisDate},${thisMovie},${thisUser}`,thisId)
    }
}

/**좌석 선택관련 함수 모음*/


//좌석 생성 함수
function createSeat(type, rows, cols){ //type은 생성할 좌석의 라인 위치
            
    if(cols >= 10){
        console.log("seat cols의 범위를 초과했습니다.");
    }

    
    //표 시작
    document.write(`
        <table id="${type}">
    `);
    
    for(var i = 0; i < rows; i++){
        //열 생성
        document.write(`
            <tr>
        `);
        for(var j = 0; j < cols; j++){

            document.write(`
                <td> 
                    <div class="seat" id="${i*10+j}" onclick="selectSeat(this.id)" >
                        <img src="./media/component/seat_checked.jpg" alt="좌석" width="40px">
                    </div>
                </td>
            `);

            //기존에 선택된 좌석이라면 선택되었다는 표시 css적용
            if(localStorage.getItem(`seat${i*10+j}`)!==undefined & localStorage.getItem(`seat${i*10+j}`)!==null){
                document.getElementById(`${i*10+j}`).style.opacity = 1;
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
    let thisUser = localStorage.getItem('userName');
    let thisMovie = localStorage.getItem('movie');
    let thisDate = localStorage[`thisDate,${thisMovie},${thisUser}`];
    let thisTime = localStorage[`time,${thisDate},${thisMovie},${thisUser}`];

    let thisCount = null;


    //클릭한 좌석이 선택되었는 지 확인
    if(localStorage.getItem(`seat${thisId}`) !== undefined & localStorage.getItem(`seat${thisId}`) !== null  ){
        
        if(localStorage.getItem(`seat${thisId}`) === `${thisId},${thisTime},${thisDate},${thisMovie},${thisUser}`){
            //기존에 선택했던 좌석을 다시 클릭 -> 해당 좌석 선택 해제
            selectedSeatId.style.opacity = 0.2;
            localStorage.removeItem(`seat${thisId}`);

            //선택한 좌석 수 차감
            thisCount = Number(localStorage[`seat,${thisUser}`]);
            localStorage[`seat,${thisUser}`] = thisCount - 1; 
        }

    }
    else{
        //새롭게 선택한 좌석인 경우
        selectedSeatId.style.opacity = 1;
        localStorage.setItem(`seat${thisId}`,`${thisId},${thisTime},${thisDate},${thisMovie},${thisUser}`);

        //선택한 좌석 수 갱신
        if(localStorage[`seat,${thisUser}`] === undefined || localStorage[`seat,${thisUser}`] === null){
            localStorage.setItem(`seat,${thisUser}`,1);
        }
        else{
            thisCount = Number(localStorage[`seat,${thisUser}`]);
            localStorage[`seat,${thisUser}`] = thisCount + 1; 
        }
    }
}


/**예매 결정*/
function setReserve(){
    let thisUser, thisMovie, thisDate, thisTime, seatRow, seatCol, peopleCount = null;
    let seatInfo =[];


    //각 정보 쿠키에서 받아오기
    thisUser = localStorage['userName'];
    thisMovie = localStorage['movie'];
    thisDate = localStorage[`thisDate,${thisMovie},${thisUser}`];
    thisTime = localStorage[`time,${thisDate},${thisMovie},${thisUser}`];

    //좌석 정보 받아오기
    for(var i = 0; i < 100; i++){ //1관 당최대 100석까지만 허용할 것이므로 
        tmp = localStorage[`seat${i}`];
        if(tmp !== null & tmp !== undefined){
            tmp = tmp.split(',');
            console.log('tmp:',tmp);
            if(tmp[6] === thisUser){
                seatInfo.push(tmp[0]);
            }
        }
    }

    peopleCount = seatInfo.length;

    //예매 날짜 정보 디코딩
    let reserveDate = thisDate.split(',');
    thisYear = reserveDate[0]
    thisMonth = reserveDate[1]
    thisDate = reserveDate[2]

    //예매 시간 정보 디코딩
    let reserveTime = thisTime.split(':');
    thisHour = reserveTime[0]
    thisMinute = reserveTime[1]

    alert(
        `${thisUser}\n영화:${thisMovie}\n날짜:${thisYear}년 ${thisMonth}월 ${thisDate}일\n시각:${thisHour}시 ${thisMinute}분\n인원 수:${peopleCount}명 `
    );
    


    // tmp = localStorage['/seat\d{0,3}'];


}

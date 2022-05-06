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

/**영화리스트 생성 함수 */
function createMovieList(movieName){
    //표 시작
    document.write(`
        <table id="movieTable">
    `);

        //표 종료
        document.write(`
        </table>
    `);
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

    //기존에 선택한 날짜가 있는 경우
    if(localStorage.getItem(`thisYear`)!== undefined){
        if(localStorage.getItem(`thisYear`)!== null){
            console.log(localStorage.getItem(`thisYear`));
            thisYear = localStorage['thisYear'];
            thisMonth = localStorage['thisMonth'];
            thisDate = localStorage['thisDate'];
    
            selectedSeatId = document.getElementById(`${thisYear},${thisMonth},${thisDate}`);
    
            selectedSeatId.style.fontWeight = "normal";
            localStorage.removeItem(`thisYear`);
            localStorage.removeItem(`thisMonth`);
            localStorage.removeItem(`thisDate`);
        }
    }
    //현재 선택된 날짜로 값 변경
    selectedSeatId = document.getElementById(thisId);
    selectedSeatId.style.fontWeight = "bold";

    //예매 날짜 정보 디코딩
    let reserveDate = thisId.split(',');
    thisYear = reserveDate[0]
    thisMonth = reserveDate[1]
    thisDate = reserveDate[2]

    //예매 날짜 정보 쿠키 저장
    localStorage.setItem(`thisYear`,thisYear);
    localStorage.setItem(`thisMonth`,thisMonth);
    localStorage.setItem(`thisDate`,thisDate);
}


/**영화시간 선택 */
//1개 상영시간 블럭 생성
function createTime(name, startTime, endTime){//name: 영화이름, startTime: 시작시간, runtime: 상영시간
    document.write(`
        <div class="movieFrame" id="${startTime}">
            <span>${name}</span>
            <br/>
            <span>시작시간: ${startTime}</span>
            <br/>
            <span>종료시간: ${endTime}</span>
        </div>
    `)
}

//상영시간 선택함수
function selectTime(thisId){
    let selectedSeatId = document.getElementById(thisId);

    //클릭한 시간이 선택되었는 지 확인
    if(localStorage.getItem(`time`) === thisId){
        //기존에 선택했던 좌석을 다시 클릭 -> 해당 좌석 선택 해제
        selectedSeatId.style.opacity = 0.5;
        localStorage.removeItem(`seat`);
    }
    else{
        //새롭게 선택한 좌석인 경우
        selectedSeatId.style.opacity = 1;
        localStorage.setItem(`time`,thisId)
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
    let thisUserName = localStorage['userName'];

    //클릭한 좌석이 선택되었는 지 확인
    if(localStorage.getItem(`seat${thisId}`) !== undefined & localStorage.getItem(`seat${thisId}`) !== null  ){
        
        if(localStorage.getItem(`seat${thisId}`) === `${thisId},${thisUserName}`){
            //기존에 선택했던 좌석을 다시 클릭 -> 해당 좌석 선택 해제
            selectedSeatId.style.opacity = 0.2;
            localStorage.removeItem(`seat${thisId}`);
        }

    }
    else{
        //새롭게 선택한 좌석인 경우
        selectedSeatId.style.opacity = 1;
        localStorage.setItem(`seat${thisId}`,`${thisId},${thisUserName}`)
    }
}
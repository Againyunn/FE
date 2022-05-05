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

        document.write(`
            <tr>
        `);
        for(var j = 0; j < cols; j++){
            document.write(`
                <td> 
                    <div class="seat" id="${i*10+j}" onclick="selectSeat" >
                        <img src="./media/component/seat_unchecked.jpg" alt="좌석" width="40px">
                    </div>
                </td>
            `);
        }

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
function selectSeat(){

    //localStorage에 저장

    //alert창으로 확인받기

}
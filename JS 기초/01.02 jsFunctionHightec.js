// closure  :내부함수가 외부함수의 맥락에 접근할 수 있는 것

function outter(){ // 외부함수 outter
    var title_out = 'coding is fun';

    function inner(){ // 내부함수 inner
        title_out = 'coding everybody'; // 내부함수에서, 외부함수의 변수를 호출할 수 있다.

        var title_in = 'coding is life';
        alert(title);
    }
    inner();
}
outter();

/*  JS의 독특한 문법
외부함수가 유효하지 않을 때도, 내부함수가 외부함수의 변수를 호출할 수 있다.
*/

function outter(){
    var title = 'coding everybody';  
    return function(){        
        alert(title);
    }
}
var inner = outter(); // 변수(객체)inner에 outter함수를 정의
inner(); // outter함수를 실행

// 일반적인 프로그래밍 언어는 해당 함수가 return되면 그 함수 내에 정의된 변수들의 사용도 중지된다.
// 그렇지만 JS는 해당 함수가 return되더라도, 종료된 함수 내부에 선언된 함수가 "정의된 시점"에 따라 외부함수의 변수 값도 정의된 시점의 값을 유지하고 있기에, 
// 외부함수의 종료 여부에 관계없이 외부함수의 변수 값을 유지/사용 할 수 있다.


// private variable(캡슐화):    외부에서의 변수/함수 수정을 방지
/* JS의 Getter와 Setter
    의의:   Java와 같이 '인스턴스화'하는 역할을 수행한다.
            즉, 만약 getter와 setter로 특정객체의 변수가 아닌 모든 변수가 변경된다면 문제가 생길 때
            특정변수의 값만 제한적으로 변경할 수 있다는 특성을 갖는다.
*/

function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대'); // ghost 객체의 함수 인자만 '공각기동대'로 변경한다는 의미
 
alert(ghost.get_title());
alert(matrix.get_title());

// closure 사용 시 빈번한 실수:
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr){
    console.log(arr[index]())
}


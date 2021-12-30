// 지역변수, 전역변수 구분

var vscope = 'global';
function fscope(){
    var vscope = 'local';  // 새로운 지역변수 vscope를 선언한 상태(전역변수인 vscope와는 다른 변수로 인식)
    vscope = 'this is local'; // 바로 위의 지역변수 vscope의 값을 'this is local'로 바꾸는 것이다.
    alert(vscope); // vscope = local 인 상태이다. (지역변수로 재정의된 vscope의 값 반영)
}
function fscope2(){
    vscope = 'this is global'; // 전역변수인 vscope = 'global'의 값이 'this is global'로 바꾸는 것이다.
    alert(vscope);  // vscope = this is global 인 상태이다.
}

fscope(); 
fscope2();


// 유효범위의 효용
function a (){
    var i = 0; // 함수 a안에 내부적으로 사용하고 있는 지역변수 i(만약에 var을 빼고 i만 입력하게 되면 함수a의 입장에서 전역변수인 for문 제어자 i의 값을 0으로 변환하게 되는 문제가 발생한다.)
}
for(var i = 0; i < 5; i ++){   // for문 내부에서 i값을 통해 for문을 통제(반복, 정지)
    a();
    document.write(i);
}

// 전역변수를 사용하는 법:      전역변수를 선언하고 해당 전역변수 안에 세부 값들을 선언하고 이를 활용해 연산을 수행한다.

MYAPP = {} // 전역변수 MYAPP을 정의
MYAPP.calculator = { // MYAPP안에 calculator 메소드 생성
    'left' : null,
    'right' : null
}
MYAPP.coordinate = { // MYAPP안에 coordinate 메소드 생성
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

/* JS의 독특한 문법! */
// 전역변수 없이 위의(↑)의 결과를 얻는 방법:    익명함수(function인데 이름이 없는 함수)를 만들어, 해당 함수 내부에서 연산을 수행한다.

(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())

/* JS의 독특한 문법! */
// 유효범위의 대상(함수)
// JS는 "함수(function)" 범위에서만 해당 변수의 범위에 제약이 있다.
// 즉, if / while / for 등의 다른 논리&반복 연산에 사용된 변수들은 { }(블록)의 내부에 변수가 선언되었더라도 모두 '전역 변수' 취급한다.
// → 함수 내부의 변수만을 지역변수로 인정하고, 그 외의 모든 변수는 전역변수로 인식한다.

for(var i = 0; i < 1; i++){
    var name1 = 'coding everybody';
}
alert(name1); // for문 내부에 사용된 변수지만, JS에서는 해당 블록 바깥에서도 변수를 사용할 수 있다.

/* JS의 독특한 문법! */
// 정적 유효범위(static scoping)

var i = 5;

function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i);
}
 
a();
// 일반적인 프로그래밍 언어라고 하면, 함수b가 선언된 함수 a의 변수 i가 b에서 사용되는 변수i로 인식될텐데,
// JS는 함수가 정의될 시점에 모든 변수들의 위치 값이 지정된다. 
// → 함수가 중첩 사용되었더라도 각 단계의 함수에서 사용되는 변수들이 순차적으로 참조하는 것이 아닌, 각 함수가 선언되었을 시점의 변수들만을 고려한다.
//   같은 level에 속한 변수만을 인식한다.

// 값으로서의 함수
/* JS의 독특한 문법! */
// JS는 함수가 값으로서 사용될 수 있다.
	
var a = function a(){   // 변수 a에 함수 a가 정의되었다.
}; 

a = {                // 객체 a에 b라는 key로 함수 b가 value로서 사용되었다.
    b:function b(){      // 메소드 b로서 함수 b가 정의되었다.
    }
};

function cal(func, num){    // 함수를 변수처럼 "객체"로 사용할 수 있으므로, 함수 cal의 인자로 함수func가 사용되었다.
    return func(num)
}
function increase(num){ 
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));    // 함수 increase를 함수 cal의 인자로 사용했다.
alert(cal(decrease, 1));    // 함수 decrease를 함수 cal의 인자로 사용했다.

// 함수의 중첩 사용 (JS가 함수도 객체로 가질 수 있다는 특성을 활용)
// 함수는 함수의 리턴 값으로 사용할 수 있다.
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}

alert(cal('plus')(2,1)); // cal('plus')라고 cal함수의 key인 plus를 호출하고, cal함수의 key plus의 value인 함수의 인자값 (수1, 수2)를 입력
alert(cal('minus')(2,1));   // 

// 함수는 배열 값으로 사용할 수 있다.
var process = [
    function(input){ return input + 10;},       // process라는 배열 내의 0번째 인덱스로 함수 저장
    function(input){ return input * input;},    // process라는 배열 내의 1번째 인덱스로 함수 저장
    function(input){ return input / 2;}         // process라는 배열 내의 2번째 인덱스로 함수 저장
];

var input = 1;
for(var i = 0; i < process.length; i++){        // process배열의 인덱스 수 만큼 반복
    input = process[i](input);                  // process배열 내의 각 인덱스에 input값 대입
}

alert(input);

// first-class citizen(object) :     변수, 매개변수, 리턴값 의 용도로 사용될 수 있는 값
/* JS의 독특한 문법! */
// 함수도 first-class object에 해당하여, 변수/매개변수/리턴값으로 사용할 수 있다.(일반 변수처럼 함수를 사용할 수 있다.)



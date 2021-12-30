// ��������, �������� ����

var vscope = 'global';
function fscope(){
    var vscope = 'local';  // ���ο� �������� vscope�� ������ ����(���������� vscope�ʹ� �ٸ� ������ �ν�)
    vscope = 'this is local'; // �ٷ� ���� �������� vscope�� ���� 'this is local'�� �ٲٴ� ���̴�.
    alert(vscope); // vscope = local �� �����̴�. (���������� �����ǵ� vscope�� �� �ݿ�)
}
function fscope2(){
    vscope = 'this is global'; // ���������� vscope = 'global'�� ���� 'this is global'�� �ٲٴ� ���̴�.
    alert(vscope);  // vscope = this is global �� �����̴�.
}

fscope(); 
fscope2();


// ��ȿ������ ȿ��
function a (){
    var i = 0; // �Լ� a�ȿ� ���������� ����ϰ� �ִ� �������� i(���࿡ var�� ���� i�� �Է��ϰ� �Ǹ� �Լ�a�� ���忡�� ���������� for�� ������ i�� ���� 0���� ��ȯ�ϰ� �Ǵ� ������ �߻��Ѵ�.)
}
for(var i = 0; i < 5; i ++){   // for�� ���ο��� i���� ���� for���� ����(�ݺ�, ����)
    a();
    document.write(i);
}

// ���������� ����ϴ� ��:      ���������� �����ϰ� �ش� �������� �ȿ� ���� ������ �����ϰ� �̸� Ȱ���� ������ �����Ѵ�.

MYAPP = {} // �������� MYAPP�� ����
MYAPP.calculator = { // MYAPP�ȿ� calculator �޼ҵ� ����
    'left' : null,
    'right' : null
}
MYAPP.coordinate = { // MYAPP�ȿ� coordinate �޼ҵ� ����
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

/* JS�� ��Ư�� ����! */
// �������� ���� ����(��)�� ����� ��� ���:    �͸��Լ�(function�ε� �̸��� ���� �Լ�)�� �����, �ش� �Լ� ���ο��� ������ �����Ѵ�.

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

/* JS�� ��Ư�� ����! */
// ��ȿ������ ���(�Լ�)
// JS�� "�Լ�(function)" ���������� �ش� ������ ������ ������ �ִ�.
// ��, if / while / for ���� �ٸ� ��&�ݺ� ���꿡 ���� �������� { }(���)�� ���ο� ������ ����Ǿ����� ��� '���� ����' ����Ѵ�.
// �� �Լ� ������ �������� ���������� �����ϰ�, �� ���� ��� ������ ���������� �ν��Ѵ�.

for(var i = 0; i < 1; i++){
    var name1 = 'coding everybody';
}
alert(name1); // for�� ���ο� ���� ��������, JS������ �ش� ��� �ٱ������� ������ ����� �� �ִ�.

/* JS�� ��Ư�� ����! */
// ���� ��ȿ����(static scoping)

var i = 5;

function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i);
}
 
a();
// �Ϲ����� ���α׷��� ����� �ϸ�, �Լ�b�� ����� �Լ� a�� ���� i�� b���� ���Ǵ� ����i�� �νĵ��ٵ�,
// JS�� �Լ��� ���ǵ� ������ ��� �������� ��ġ ���� �����ȴ�. 
// �� �Լ��� ��ø ���Ǿ����� �� �ܰ��� �Լ����� ���Ǵ� �������� ���������� �����ϴ� ���� �ƴ�, �� �Լ��� ����Ǿ��� ������ �����鸸�� ����Ѵ�.
//   ���� level�� ���� �������� �ν��Ѵ�.

// �����μ��� �Լ�
/* JS�� ��Ư�� ����! */
// JS�� �Լ��� �����μ� ���� �� �ִ�.
	
var a = function a(){   // ���� a�� �Լ� a�� ���ǵǾ���.
}; 

a = {                // ��ü a�� b��� key�� �Լ� b�� value�μ� ���Ǿ���.
    b:function b(){      // �޼ҵ� b�μ� �Լ� b�� ���ǵǾ���.
    }
};

function cal(func, num){    // �Լ��� ����ó�� "��ü"�� ����� �� �����Ƿ�, �Լ� cal�� ���ڷ� �Լ�func�� ���Ǿ���.
    return func(num)
}
function increase(num){ 
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));    // �Լ� increase�� �Լ� cal�� ���ڷ� ����ߴ�.
alert(cal(decrease, 1));    // �Լ� decrease�� �Լ� cal�� ���ڷ� ����ߴ�.



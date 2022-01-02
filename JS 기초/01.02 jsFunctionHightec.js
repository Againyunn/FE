// closure  :�����Լ��� �ܺ��Լ��� �ƶ��� ������ �� �ִ� ��

function outter(){ // �ܺ��Լ� outter
    var title_out = 'coding is fun';

    function inner(){ // �����Լ� inner
        title_out = 'coding everybody'; // �����Լ�����, �ܺ��Լ��� ������ ȣ���� �� �ִ�.

        var title_in = 'coding is life';
        alert(title);
    }
    inner();
}
outter();

/*  JS�� ��Ư�� ����
�ܺ��Լ��� ��ȿ���� ���� ����, �����Լ��� �ܺ��Լ��� ������ ȣ���� �� �ִ�.
*/

function outter(){
    var title = 'coding everybody';  
    return function(){        
        alert(title);
    }
}
var inner = outter(); // ����(��ü)inner�� outter�Լ��� ����
inner(); // outter�Լ��� ����

// �Ϲ����� ���α׷��� ���� �ش� �Լ��� return�Ǹ� �� �Լ� ���� ���ǵ� �������� ��뵵 �����ȴ�.
// �׷����� JS�� �ش� �Լ��� return�Ǵ���, ����� �Լ� ���ο� ����� �Լ��� "���ǵ� ����"�� ���� �ܺ��Լ��� ���� ���� ���ǵ� ������ ���� �����ϰ� �ֱ⿡, 
// �ܺ��Լ��� ���� ���ο� ������� �ܺ��Լ��� ���� ���� ����/��� �� �� �ִ�.


// private variable(ĸ��ȭ):    �ܺο����� ����/�Լ� ������ ����
/* JS�� Getter�� Setter
    ����:   Java�� ���� '�ν��Ͻ�ȭ'�ϴ� ������ �����Ѵ�.
            ��, ���� getter�� setter�� Ư����ü�� ������ �ƴ� ��� ������ ����ȴٸ� ������ ���� ��
            Ư�������� ���� ���������� ������ �� �ִٴ� Ư���� ���´�.
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
 
ghost.set_title('�����⵿��'); // ghost ��ü�� �Լ� ���ڸ� '�����⵿��'�� �����Ѵٴ� �ǹ�
 
alert(ghost.get_title());
alert(matrix.get_title());

// closure ��� �� ����� �Ǽ�:
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr){
    console.log(arr[index]())
}


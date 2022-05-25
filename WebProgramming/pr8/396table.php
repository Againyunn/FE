<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>369 table</title>
    <style>
        /* 전체 서식 지정 */
        table{
            border-collapse: collapse;
            width: 600px;
            border: 2px solid black;
        }
        td{
            border: 1px solid black;
            text-align: center;
            padding: 5px;
        }

        /* 각 요소 별 서식 지정 */
        .multiple3{
            background-color: aqua;
            color: red;
            font-weight: bold;
        }

        .include3{
            background-color: yellow;
            color: blue;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <table>
        <?php
            
            for($a = 0; $a < 1000; $a++){
                //줄 단위 식별용
                $b = $a % 10;

                //검증시작!
                if($b == 0){
                    //행 시작
                    echo "<tr>";

                    //테이블 찍어내기
                    printTableContent($a);
                }
                else if($b == 9){
                   
                    //테이블 찍어내기
                    printTableContent($a);

                    //행 종료
                    echo "</tr>";
                }
                else{
                    //테이블 찍어내기
                    printTableContent($a);
                }
            }

            /**동작함수 정의  */
            //함수1: 3의 배수 식별 함수
            function checkMultiple3($check){
                $result = 0;

                if($check%3 == 0){
                    $result = 1;
                }

                return $result;
            }

            //함수2: 3을 포함하고 있는 지 식별
            function checkInclude3($check){
                $find = 0;
                $checkLen = strlen($check);

                for($i = 0; $i < $checkLen; $i++){
                    if( (substr($check, $i, 1)== 3) || (substr($check, $i, 1)== 6) || (substr($check, $i, 1)== 9)){
                        $find += 1;
                    }
                }

                return $find;
            }

            //함수3: 테이블 내부 찍어내기
            function printTableContent($target){
                //3의 배수인지 식별
                if(checkMultiple3($target) == 1){ //3의 배수인 경우
                    echo '<td class="multiple3">';
                }
                else{
                    //3을 포함하고 있는 지 식별
                    if(checkInclude3($target) > 0){ //3을 포함한 경우
                        echo '<td class="include3">';
                    }
                    else{
                        echo '<td>';
                    }
                }
                echo "{$target} </td>";
            }

        ?>
    </table>
</body>
</html>
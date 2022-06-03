<html>
    <head>
        <meta charset="utf-8">
        <style>
            table{
                border-collapse: collapse;
                border: solid 3px red;
                text-align: center;
                width: 250px;
            }
            td{
                font-weight: bold;
                border: solid 1px red;
            }
        </style>
    </head>
    <body>
        <?php
        //연산과정
            $lengthNum = $_POST["lengthNum"];
            $lengthUnit = $_POST["lengthUnit"];

            $result = 0;
            $unitType = "";

            $resultM = 0;
            $resultIN = 0;
            $resultFT = 0;
            $resultYD = 0;

            //미터연산
            if($lengthUnit == "m"){
                $result = $lengthNum;
                $unitType = "미터(m)";
            }

            //인치연산
            else if($lengthUnit == "in"){
                $result = round($lengthNum * 0.0254, 4);
                $unitType = "인치(in)";
            }

            //피트연산
            else if($lengthUnit == "ft"){
                $result = round($lengthNum * 0.3048, 4);
                $unitType = "피트(ft)";
            }

            //야드연산
            else if($lengthUnit == "yd"){
                $result = round($lengthNum * 0.9144, 4);
                $unitType = "야드(yd)";
            }

            //결과 연산
            $resultM = $result;
            $resultIN = round($result / 0.0254, 4);
            $resultFT = round($result / 0.3048, 4);
            $resultYD = round($result / 0.9144, 4);
        
        //결과출력용 함수
            echo "<h2>단위 변환기 : ".$lengthNum." ".$unitType."</h2>";
            
            echo "<table>";

            echo "<tr><td>".$resultM." 미터(m)</td></tr>";
            echo "<tr><td>".$resultIN." 인치(in)</td></tr>";
            echo "<tr><td>".$resultFT." 피트(ft)</td></tr>";
            echo "<tr><td>".$resultYD." 야드(yd)</td></tr>";
            echo "</table>";
        ?>

    </body>
</html>
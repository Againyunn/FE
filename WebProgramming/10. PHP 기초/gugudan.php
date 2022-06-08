<style>
    table{ 
        border-collapse:collapse; width: 600px;
    }
    td{
        border: solid 1px gray;
        text-align: center;
        padding: 5px;
    }
</style>
<h3>구구단 표</h3>
<table>
    <?php
        
        for($a = 2; $a <=9; $a++){
            echo "<tr>";
            for($b = 0; $b <= 9; $b++){
                $c = $a * $b;
                if($b == 0){
                    echo"<td>{$a}단</td>";
                }
                echo "<td>{$a}X{$b}=$c</td>";
            }
            echo "</tr>";
        }
    ?>
</table>
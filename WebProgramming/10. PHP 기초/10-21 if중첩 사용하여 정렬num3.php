<?php
	$a=2;
	$b=6;
	$c=9;

	if ($a > $b) {
		if ($a > $c) {		// $a > $b and $a > $c
			$max1 = $a;
			if ($b > $c) {	// $a > $b > $c
				$max2 = $b;
				$max3 = $c;
			}
			else {			// $a > $c > $b
				$max2 = $c;
				$max3 = $b;
			}
		}
		else {				// $a > $b and $c > $a
			$max1 = $c;
			$max2 = $a;
			$max3 = $b;
		}
	}	   
	else {
		if ($a > $c) {		// $b > $a and $a > $c
			$max1=$b;
			$max2=$a;
			$max3=$c;
		}
		else {
			if ($b > $c) {	// $c > $a and $b > $c
				$max1 = $b;
				$max2 = $c;
				$max3 = $a;
			}
			else {			// $b > $a and $c > $b
				$max1 = $c;
				$max2 = $b;
				$max3 = $a;
			}					 
		}  
	}	

	echo"입력된 세 정수 : $a $b $c<br>";
	echo"큰 수대로 배열 : $max1 $max2 $max3<br>";
?>


<!-- 내가 직접 짠 php 정렬 코드 -->
<?php 
	//선택정렬 방식으로 구현(오름차순)
	function SelectSort($arr){
		for($i = 0; $i < (count($arr) - 1); $i++){
			$tmp = $i;

			for($j = $i + 1; $j < count($arr); $j++){
				if($arr[$tmp] >= $arr[$j]){
					$tmp = $j;
				}
			}
			//두 값 교환
			$imsi = $arr[$i];
			$arr[$i] = $arr[$tmp];
			$arr[$tmp] = $imsi;
		}

		return $arr;
	}

	//선택정렬 방식으로 구현(내림차순)
	function SelectSortDown($arr){
		for($i = 0; $i < (count($arr) - 1); $i++){
			$tmp = $i;

			for($j = $i + 1; $j < count($arr); $j++){
				if($arr[$tmp] <= $arr[$j]){
					$tmp = $j;
				}
			}
			//두 값 교환
			$imsi = $arr[$i];
			$arr[$i] = $arr[$tmp];
			$arr[$tmp] = $imsi;
		}

		return $arr;
	}

	$arr = array(2, 6, 9);
	$result = SelectSort($arr);

	$result2 = SelectSortDown($arr);

	echo "<br/>오름차순 정렬";

	//배열 출력용1
	for($z = 0; $z < count($result); $z++){
		echo "<br/>{$result[$z]}";
	}

	echo "<br/><br/>내림차순 정렬";

	
	//배열 출력용2
	for($z = 0; $z < count($result2); $z++){
		echo "<br/>{$result2[$z]}";
	}

	
?>

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
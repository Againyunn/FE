<?php
	$sum = 0;

	for ($i = 5; $i <= 100; $i += 5) {
		$sum = $sum + $i;
	}

	echo "1~100의 정수 중 5의 배수의 합계 : $sum";
?>
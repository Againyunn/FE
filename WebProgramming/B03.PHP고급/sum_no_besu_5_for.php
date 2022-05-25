<?php
	$sum = 0;

	for ($i = 1; $i <= 100; $i++) {
		if ($i%5 == 0) continue;
		$sum = $sum + $i;
	}

	echo "1~100에서 5의 배수가 아닌 수의 합계 : $sum";
?>
<?php
	$score = 83;

	if ($score >= 90)
		$grade = "A";
	elseif ($score >= 80)
		$grade = "B";
	elseif ($score >= 70)
		$grade = "C";
	elseif ($score >= 60)
		$grade = "D";
	else 
		$grade = "F";

	echo "입력된 점수 : $score 점<br>";
	echo "등급 : $grade";
?>

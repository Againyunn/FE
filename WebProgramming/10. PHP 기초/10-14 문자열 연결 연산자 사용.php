<?php
	$num1 = "010";
	$num2 = "1234";
	$num3 = "5678";
	// $phone_number = $num1."-".$num2."-".$num3;
	$phone_number = "{$num1}-{$num2}-{$num3}";
	echo "휴대폰 번호 : $phone_number"."<br>";

	$email1 = "admin";
	$email2 = "codingschool.info";
	// $email = $email1."@".$email2;
	$email = "{$email1}@{$email2}";
	echo "이메일 주소 : $email";
?>

<!-- 문자열 사이에 {$변수명} 을 통해 해당 서식 그대로 변수도 포함한 string을 만들 수 있다. -->
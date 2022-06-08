<?php
	//세션은 항상 세션의 시작 정보를 상단에 표기해야 한다.
	session_start();
	echo "세션 시작!!!<br>";

	$_SESSION['userid'] = "wcjeon";
	$_SESSION['username'] = "전우치";
	echo '세션 등록 완료!!!<br>';

	echo $_SESSION['userid']."<br>";
	echo $_SESSION['username']."<br>";
?>
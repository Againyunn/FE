<?php
	//세션은 항상 세션의 시작 정보를 상단에 표기해야 한다.
	session_start();

	$userid = $_SESSION["userid"];
	$username = $_SESSION["username"];
?>
<h3>등록된 세션의 사용</h3>
<ul>
	<li>등록된 세션(userid) : <?= $userid?></li>
	<li>등록된 세션(username) : <?= $username?></li>
</ul>
<?php
	//세션은 항상 세션의 시작 정보를 상단에 표기해야 한다.
	session_start();
	unset($_SESSION["username"]);
?>
<h3>등록된 세션의 삭제</h3>
<ul>
    <li>userid 세션 : <?= $_SESSION["userid"]?></li>
    <li>username 세션 : <?= $_SESSION["username"]?></li>
</ul>
<?php
	setcookie("userid", "", time() - 3600);
	setcookie("username", "", time() - 3600);
	//setcookie의 2번째 인자는 "초"단위로 값을 인식하므로, 1시간 == 3600 이 된다.

	echo "userid와 username 쿠키가 삭제되었다!";
?>
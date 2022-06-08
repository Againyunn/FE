<html>
<head>
	<meta charset="utf-8">
	<link href="style.css" rel="stylesheet">
</head>
<body>
	<?php
		$id = $_POST["id"];
		$pass = $_POST["pass"];
	?>
	<ul>
		<li>아 이 디 : <?=$id?></li>
		<li>비밀번호 : <?=$pass?></li>
	</ul>
</body>
</html>
<html>
<head>
	<meta charset="utf-8">
	<link href="style.css" rel="stylesheet">
</head>
<body>
	<?php
		$file_dir = "C:/xampp/htdocs/07/data/";

		//upload[name] 을 php에서는 ["upload"]["name"]로 표시
		//                          배열명[메소드 or 인덱스]
		$file_path = $file_dir.$_FILES["upload"]["name"];
		if(move_uploaded_file($_FILES["upload"]["tmp_name"], $file_path)) {
			$img_path = "data/".$_FILES["upload"]["name"];
	?>
			<ul>
				<li>파일 이름 : <?= $_FILES["upload"]["name"]?></li>
				<li>임시파일 패스 : <?= $_FILES["upload"]["tmp_name"]?></li>
				<li>$file_path : <?= $file_path?></li>
				<li>$img_path : <?= $img_path?></li>
				<li><img src="<?= $img_path?>"></li>
				<li><?= $_POST["comment"]?></li>
			</ul>
	<?php
		}
		else {
			echo "파일 업로드 오류가 발생했습니다!!!";
		}
	?>
</body>
</html>

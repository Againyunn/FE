<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>수도권 날씨예보</title>
</head>
<body>
	<?php
		//form으로 전달받은 최대/최소 값 받기
		$max = $_POST["max_temp"];
		$min = $_POST["min_temp"];
	
		//sql연결
		// $con = mysqli_connect("localhost", "user1", "12345", "sample");
		$con = mysqli_connect("localhost", "root", "", "sample");

		//실행할 sql명령어
		$sql = "select * from weather where low_temp <= $max and high_temp >= $min";//최소 값과 최대 값에 해당하는 기온을 가진 레코드 모두 호출
		
		//sql query 가져오기
		$result = mysqli_query($con, $sql);

		//sql query의 개수 
		$count = mysqli_num_rows($result);

		
		for ($i = 0; $i < $count; $i++) {
			//sql내에서 i번째 레코드를 가져오라는 명령어
			mysqli_data_seek($result, $i);

			//sql query를 배열로 바꾸기
			$row = mysqli_fetch_array($result);

			echo("
				<h3>{$row["city"]}의 날씨</h3>
				<span>최고 기온 {$row["high_temp"]} 도 </span><br>
				<span>최저 기온 {$row["low_temp"]} 도 </span><br>
			");
		}

		//sql 서버와 연결 종료
		mysqli_free_result($result);
		mysqli_close($con);
	?>
</body>
</html>
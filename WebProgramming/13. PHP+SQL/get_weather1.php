<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>수도권 날씨예보</title>
</head>
<body>
	<?php
		$city = $_POST["city"];
	
		// $con = mysqli_connect("localhost", "user1", "12345", "sample");
		$con = mysqli_connect("localhost", "root", "", "sample");

		//실행할 sql명령어
		$sql = "select * from weather where city='$city'"; //해당 city에 맞는 날씨 table 가져오기

		//sql query 가져오기
		$result = mysqli_query($con, $sql); //mysqli_query(연결할sql과정보, 실행할sql명령어)
		
		//sql query를 배열로 바꾸기
		$row = mysqli_fetch_array($result);

		//sql 서버와 연결 종료
		mysqli_close($con);

		//실행결과 출력
		echo("
			<h2>{$row["city"]}의 날씨</h2>
			<span>최고 기온 {$row["high_temp"]} 도 </span><br>
			<span>최저 기온 {$row["low_temp"]} 도 </span><br>
			<span>비올 확률 {$row["rain_ratio"]} % </span><br>
			<span>예상 강수량 {$row["rain_mm"]} mm </span>
		");
	?>
</body>
</html>
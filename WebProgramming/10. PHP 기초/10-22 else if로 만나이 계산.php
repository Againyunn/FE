<?php
   // 출생 년월일에 따라 만 나이 계산하기

   $now_year  = 2019;
   $now_month = 3;
   $now_day   = 10;

   $birth_year  = 1990;
   $birth_month = 3;
   $birth_day   = 30;

   //태어난 월 < 지금 월(생일 날짜가 지난 경우)
   if ($birth_month < $now_month)  
	  $age = $now_year - $birth_year;

   //태어난 월 = 지금 월(생일 날짜가 이번 달에 있는 경우)
   elseif ($birth_month == $now_month) {

     //이번 달에 생일이 이미 지난 경우
	  if($birth_day <= $now_day)
			$age = $now_year - $birth_year;

     //이번 달에 생일이 있지만 아직 안 지난 경우
	  else
			$age = $now_year - $birth_year - 1;
   } 

   //태어난 월 > 지금 월(생일 날짜가 아직 도래하지 않은 경우)
   else
	  $age = $now_year - $birth_year - 1;

   echo "오늘 날짜 : $now_year 년 $now_month 월 $now_day 일<br>";
   echo "출생년월일 : $birth_year 년 $birth_month 월 $birth_day 일생<br>";
   echo "만 나이 : $age 세";
?>

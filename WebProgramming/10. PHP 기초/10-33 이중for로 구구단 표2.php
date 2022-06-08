<style>
	table { border-collapse:collapse; width:600px; }
	td { border: solid 1px gray; text-align: center; padding:5px; }
</style>
<h3>구구단 표</h3>
<table>
<?php
	echo "<tr>";
	for ($a = 2; $a <= 9; $a++)
		echo "<td>{$a}단</td>";
	echo "</tr>";

	for ($b = 1; $b <= 9; $b++) {
		echo "<tr>";
		for ($a = 2; $a <= 9; $a++) {
			$c = $a * $b;
			echo "<td>{$a}x{$b}=$c</td>";
		}
		echo "</tr>";
	}
?>
</table>
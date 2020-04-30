<?php
header("Content-Type: text/html;charset=utf-8");
$begin_day = date("Y-m-d");
$servername = "localhost";
$username = "root";
$password = "Lx599807....";
$dbname = "mybook";

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_query($conn,'set names utf8');
// 检测连接
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
$sql = "SELECT * FROM MyGuests WHERE consumedate='{$begin_day}'";
$result = mysqli_query($conn, $sql);
$temparr = [];
$i = 0;
$j = 0;

if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
    	$tempObj = new stdClass();
    	foreach($row as $key => $value){
    		    if(strstr($value,'"') || strstr($value,'[') || strstr($value, ']')){
    		    	$value = str_replace('"','',$value);
    		    	$value = str_replace('[','',$value);
    		    	$value = str_replace(']','',$value);
    		    }
		    	$tempObj->$key = $value;
		    }
		$temparr[$i] = $tempObj;
		$i = $i + 1;
        //echo "id: " . $row["id"]. " - mymoney: " . $row["mymoney"]. "- method " . $row["method"]. "- notes:" . $row["notes"] . "-// consume" . $row["consume"] . "- consumedate" . $row["consumedate"] ."<br>";
    }
} else {
    echo "0 结果";
}

echo json_encode($temparr);
mysqli_close($conn);
?>
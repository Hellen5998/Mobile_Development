<?php
header("Content-Type: text/html;charset=utf-8");

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

/*
$sql = "SELECT * FROM MyGuests";
$result = mysqli_query($conn, $sql);
$tempObj = new stdClass();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)){
		    foreach($row as $key => $value){
		    	$tempObj->$key = $value;
		    }
		} 
	}
print_r($tempObj);
echo 'json:'.json_encode($tempObj,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
*/

$sql = "SELECT * FROM MyGuests";
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
//print_r($temparr);
/*
while($temparr[$j + 1]!=null){
	echo json_encode($temparr[$j],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	$j = $j + 1;
}
echo json_encode($temparr[$j],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
*/
mysqli_close($conn);

//echo "传递成功".$image_url

?>
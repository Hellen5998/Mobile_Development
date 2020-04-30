<?php
header("Content-Type: text/html;charset=utf-8");
$money = $_GET["money"];
$method = $_GET["method"];
$notes = $_GET["notes"];
$data = $_GET["date"];
$consume = $_GET["consume"];
/*
echo $money;
echo $method;
echo $notes;
echo $data;
echo $consume;
*/

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


$sql = "INSERT INTO MyGuests (mymoney, method, notes, consume, consumedate)
VALUES ('{$money}', '{$method}', '{$notes}', '{$consume}', '{$data}')";
 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

/*
$sql = "SELECT id, mymoney, method, notes, consume, consumedate FROM MyGuests";
$result = mysqli_query($conn, $sql);
 
if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - mymoney: " . $row["mymoney"]. "- method " . $row["method"]. "- notes:" . $row["notes"] . "- consume" . $row["consume"] . "- consumedate" . $row["consumedate"] ."<br>";
    }
} else {
    echo "0 结果";
}
*/
mysqli_close($conn);

//echo "传递成功".$image_url
?>
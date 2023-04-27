<?php
header("Access-Control-Allow-Origin: *");

$cn = mysqli_connect("localhost","root","","dataset");
$rs = mysqli_query($cn,"select id,address,latitude,longitude,altitude from datitos");

while($row = mysqli_fetch_assoc($rs)){
    $res[] = array_map("utf8_encode",$row);
}

echo json_encode($res)
?>

<?php
header("Access-Control-Allow-Origin: *");

$cn = mysqli_connect("localhost","root","","dataset");
$rs = mysqli_query($cn,"UPDATE datitos SET address, latitude,longitude,altitude where id");

while($row = mysqli_fetch_assoc($rs)){
    $res[] = array_map("utf8_encode",$row);
}

echo json_encode($res)
?>

























"UPDATE user SET nombre = '$nombre', correo = '$correo', telefono = '$telefono',
		password ='$password' WHERE id = '$id' ";
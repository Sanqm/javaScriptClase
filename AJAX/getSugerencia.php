<?php 
$arr[] = "Berlin";
$arr[] = "Londres";
$arr[] = "Paris";
$arr[] = "Madrid";
$arr[] = "Lisboa";
$arr[] = "Atenas";
$arr[] = "Roma";
$arr[] = "Praga";
$arr[] = "Estocolmo";
$arr[] = "Copenaghe";
$arr[] = "Oslo";

$param = $_REQUEST["param"];
$sugerencia = "";
if ($param !== "") {
    $param = strtolower($param);
    $len = strlen($param);
    foreach ($arr as $nombre) {
        if (stristr($param, substr($nombre,0,$len))) {
            if($sugerencia === ""){
                $sugerencia = $nombre;
            }else{
                $sugerencia .= ", $nombre";
            }
        }
    }
}
echo $sugerencia === "" ? "ninguna sugerencia" : $sugerencia;
?>
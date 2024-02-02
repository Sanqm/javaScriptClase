<?php

$participantes [] = "Ainhoa";
$participantes [] = "David";
$participantes [] = "Andrea";
$participantes [] = "sandra";
$participantes [] = "Ana";

$param = $_REQUEST["param"];
$participante []= "";
foreach ($participantes as $p) {
    $partipante .= " , $p"; 
}
echo $participante;
?>
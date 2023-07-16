<?php
require '/laragon/www/echo/include/bd.class.php';
require '/laragon/www/echo/include/panier.class.php';
$DB = new DB();
$panier = new panier($DB);
?>
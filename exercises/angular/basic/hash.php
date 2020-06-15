<?php
$email = trim("jmfcool@me.com");
$email = strtolower($email);
echo md5($email);
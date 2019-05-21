<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

$file=str_replace('/captiveportal_user/','/captiveportal/',$_SERVER["SCRIPT_FILENAME"]);
$folder=dirname($file);
chdir($folder);
require_once($file);

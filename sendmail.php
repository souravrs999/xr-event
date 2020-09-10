<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function send_mime_mail($name, $email, $name_to, $email_to, $data_charset, $send_charset, $subject, $body, $html = true) {
    $to = $name_to . ' <' . $email_to . '>';
    $from = $name . ' <' . $email . '>';
    $headers = "MIME-Version: 1.0\n";
    $type = ($html) ? 'html' : 'plain';
    $headers .= "Content-type: text/$type; charset=$send_charset\n";
    $headers .= "From: $from\n";
    return mail($to, $subject, $body, $headers);
}

if(isset($_REQUEST['email']) && isset($_REQUEST['name']) && isset($_REQUEST['message']) && isset($_REQUEST['name_to']) && isset($_REQUEST['email_to'])) {
	$email = $_REQUEST['email'];
	$name = $_REQUEST['name'];
    $name_to = $_REQUEST['name_to'];
    $email_to = $_REQUEST['email_to'];
	$data_charset = isset($_REQUEST['data_charset']) ? $_REQUEST['data_charset'] : 'CP1251';
	$send_charset = isset($_REQUEST['send_charset']) ? $_REQUEST['send_charset'] : 'KOI8-R';
	$subject = isset($_REQUEST['subject']) ? substr(htmlspecialchars(trim($_REQUEST['subject'])), 0, 1000) : '';
	$message = isset($_REQUEST['message']) ? $_REQUEST['message'] : '';
	$msg = "<html><head></head><body>".$message."</body></html>";
	$result = send_mime_mail($name, $email, $name_to, $email_to, $data_charset, $send_charset, $subject, $msg, true);
	echo '{"success":"'.$result.'"}';
} else {
	echo '{"success":"0", "massage":"no set required parameters (email, name, message, name_to, email_to)"}';
}


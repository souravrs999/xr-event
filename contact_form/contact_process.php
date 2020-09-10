<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post){
	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);
	$phone = stripslashes($_POST['phone']);
	$site = stripslashes($_POST['website']);
	$message = stripslashes($_POST['message']);





	$mail = mail(CONTACT_FORM, $website, $message,
	     "From: ".$name." <".$email.">\r\n"
	    ."Reply-To: ".$email."\r\n"
	    ."X-Mailer: PHP/" . phpversion());


	if($mail){
		echo 'OK';
	}

}
?>
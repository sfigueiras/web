<?php

/**
 * This file is part of ubykuo site
 * @author Valentin Mari <valen.mari@ubykuo.com>
 * @desc Front controller
 * 21/04/2017
 */

require __DIR__ . '/../vendor/autoload.php';
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
/*
define('MAILER_SUBJECT', 'Nueva consulta desde ubykuo.com');
define('MAILER_TO_MAIL', 'info@ubykuo.com');
define('MAILER_TO_NAME', 'ubykuo');

define('SMTP_HOST', 'relay-hosting.secureserver.net');
define('SMTP_PORT', '25');
define('SMTP_SECURITY', null);
define('SMTP_USER', 'info@ubykuo.com'); //Gmail user@gmail.com
define('SMTP_PASS', 'ubykuo2017'); //Gmail password
*/
define('MAILER_SUBJECT', 'Nueva consulta desde ubykuo.com');
define('MAILER_TO_MAIL', 'valentinmarii@gmail.com');
define('MAILER_TO_NAME', 'Valentin Mari');

define('SMTP_HOST', 'relay-hosting.secureserver.net');
define('SMTP_PORT', '25');
define('SMTP_SECURITY', null);
define('SMTP_USER', 'valentinmarii@gmail.com'); //Gmail user@gmail.com
define('SMTP_PASS', 'Permi5ivo'); //Gmail password


use ubykuo\Contact;
use Symfony\Component\HttpFoundation\Request;

$request = Request::createFromGlobals();

$contact = new Contact();
$response = $contact->handle($request);
header("Location: /");
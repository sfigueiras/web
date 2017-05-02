<?php

/**
 * This file is part of ubykuo site
 * @author Valentin Mari <valen.mari@ubykuo.com>
 * @desc Front controller
 * 21/04/2017
 */

require __DIR__ . '/../vendor/autoload.php';
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

require __DIR__ . '/../src/config.php';

use ubykuo\Contact;
use Symfony\Component\HttpFoundation\Request;

$request = Request::createFromGlobals();

$contact = new Contact();
if($contact->handle($request)){
    header("Location: /");
}else{
    header("Location: /?error");
}

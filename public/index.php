<?php

require '../vendor/autoload.php';

$config['displayErrorDetails'] = true;

$app = new \Slim\App(['settings' => $config]);

require('../app/container.php');
$app->get('/', \App\Controller::class . ':map');
$app->run();

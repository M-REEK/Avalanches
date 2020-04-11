<?php

require 'vendor/autoload.php';

$config['displayErrorDetails'] = true;

$app = new \Slim\App(['settings' => $config]);

require('app/container.php');
$app->get('/', \App\Controller::class . ':map')->setName('map');
$app->get('/aboutUs', \App\Controller::class . ':aboutUs')->setName('aboutUs');
$app->get('/analyse', \App\Controller::class . ':analyse')->setName('analyse');
$app->run();

<?php

namespace App;
use \Psr\Http\Message\RequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

class Controller{

    private $container;

    public function __construct($container){
        $this->container = $container;
    }

    public function map(Request $request, Response $response){
        $this->container->view->render($response,'map.twig');
    }
}
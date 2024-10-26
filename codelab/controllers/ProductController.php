<?php

namespace Controller;

include "Traits/ResponseFormatter.php";
include "controllers/controller.php";

use Traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construct(){
        $this->controllerName = "Get All product";
        $this->controllerMethod = "Get";
    }

    public function getAllProduct(){
        $dummydata = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"

        ];
        
        $response =[
            "controller_attribute"=> $this->getControllerAttribute(),
            "product" =>   $dummydata
        ];

        return $this->responseFormatter(200, "Success", $response);

        
    }
}
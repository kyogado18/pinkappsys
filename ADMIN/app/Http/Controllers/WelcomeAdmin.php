<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeAdmin extends Controller
{
    public function welcome(){
        return view('Welcome');
    }
}

<?php

use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas Registro/Login de usuarios

Route::post("register", [UserController::class, "register"]);
Route::post("login", [UserController::class, "login"]);

Route::group (["middleware" => ["auth:sanctum"]], function() {
    Route::get("user-profile", [UserController::class, "userProfile"]);
    Route::get("logout", [UserController::class, "logout"]);
});

// Rutas para obtener y modificar los items(ropa)

Route::controller(ItemController::class)->group(function() {
    Route::get("/items", "index");
    Route::post("/item", "store");
    Route::get("/item/{id}", "show");
    Route::put("/item/{id}", "update");
    Route::delete("/item/{id}", "destroy");
});
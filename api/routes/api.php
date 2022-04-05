<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BlogController;
use App\Http\Controllers\WorkController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix("works")->group(function() {
    Route::get("page/{page}",    [WorkController::class, "page"]);
    Route::get("{id}",           [WorkController::class, "contents"]);
});

Route::prefix("blogs")->group(function() {
    Route::get("page/{page}",    [BlogController::class, "page"]);
    Route::get("{id}",           [BlogController::class, "contents"]);
});

Route::prefix("admin")->group(function() {
    Route::prefix("works")->group(function() {
        Route::post("create",   [WorkController::class, "create"]);
        Route::post("edit",     [WorkController::class, "edit"]);
        Route::post("delete",   [WorkController::class, "delete"]);
    });
    Route::prefix("blogs")->group(function() {
        Route::post("create",   [BlogController::class, "create"]);
        Route::post("edit",     [BlogController::class, "edit"]);
        Route::post("delete",   [BlogController::class, "delete"]);
    });
});
<?php

use App\Http\Controllers\Api\v1\aboutController;
use App\Http\Controllers\Api\v1\contactController;
use App\Http\Controllers\Api\v1\PortfolioController;
use App\Http\Controllers\Api\v1\SkillsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('v1')->group(function(){

    //About
    Route::get('/getabout', [aboutController::class, 'show']);
    Route::post('/setabout', [aboutController::class, 'update']);

    //Contact
    Route::post('/setcontact', [contactController::class, 'insert']);
    Route::get('/getcontacts', [contactController::class, 'show']);
    Route::post('/deletecontact/{contact}', [contactController::class, 'destroy']);

    //Portfolio
    Route::post('/addportfolio', [PortfolioController::class, 'insert']);
    Route::get('/getportfolios', [PortfolioController::class, 'show']);
    Route::post('/deleteportfolio/{portfolio}', [PortfolioController::class, 'destroy']);
    Route::post('/editportfolio/{portfolio}', [PortfolioController::class, 'edit']);

    //Skill
    Route::post('/addskill', [SkillsController::class, 'insert']);
    Route::get('/getskills', [SkillsController::class, 'show']);
    Route::post('/deleteskill/{skills}', [SkillsController::class, 'destroy']);
    Route::post('/editskill/{skills}', [SkillsController::class, 'edit']);
});

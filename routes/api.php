<?php

use App\Http\Controllers\DatakunjunganController;
use App\Http\Controllers\DataTitipanController;
use App\Http\Controllers\DataWBPController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/caridataWBP/{cari}', [DataWBPController::class, 'Cari']);
Route::get('/caridatatitipan/{cari}', [DataTitipanController::class, 'Cari']);
Route::get('/caridatakunjungan/{cari}', [DatakunjunganController::class, 'Cari']);

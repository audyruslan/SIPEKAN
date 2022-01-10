<?php

use App\Http\Controllers\User\AntriansayaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DatakunjunganController;
use App\Http\Controllers\DataPengunjungController;
use App\Http\Controllers\DataTitipanController;
use App\Http\Controllers\DataWBPController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\InformasiKnjController;
// use App\Http\Controllers\KontakKamiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RegistrasiKunjunganController;
use App\Http\Controllers\User\KodeRegistrasiController;
use App\Http\Controllers\User\KontakKamiController;
use App\Http\Controllers\User\PanduanController as UserPanduanController;
use App\Http\Controllers\User\PendaftarankunjunganController;
use App\Http\Controllers\User\PendaftaranTitipanController;
use App\Http\Controllers\User\RegisterController as UserRegisterController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserPendaftarankunjunganController;
use App\Models\User;
use Psy\TabCompletion\Matcher\FunctionsMatcher;
use Spatie\Permission\Models\Role;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'ceklogin']);


Route::get('/register', [UserRegisterController::class, 'index']);
Route::post('/register', [UserRegisterController::class, 'daftarakun']);

// admin
Route::middleware('auth')->group(function () {
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);
        Route::get('/DataWBP', [DataWBPController::class, 'index']);
        Route::post('/insertWBP', [DataWBPController::class, 'insert']);
        Route::post('/editWBP', [DataWBPController::class, 'edit']);
        Route::post('/hapusdataWBP', [DataWBPController::class, 'hapus']);
        // Route::post('/lihatdataWBP', [DataWBPController::class, 'lihat']);   

        Route::get('/datakunjungan', [DatakunjunganController::class, 'index']);

        Route::get('/datapengunjung', [DataPengunjungController::class, 'index']);

        Route::get('/datatitipan', [DataTitipanController::class, 'index']);

        Route::get('/registrasikunjungan', [RegistrasiKunjunganController::class, 'index']);
    });

    Route::post('/logout', [LoginController::class, 'logout']);
    // User
    Route::middleware(['role:user'])->group(function () {
        Route::get('/userdashboard', [UserDashboardController::class, 'index']);
        Route::get('/antriansaya', [AntriansayaController::class, 'index']);
        Route::get('/informasikunjungan', [InformasiKnjController::class, 'index']);
        Route::get('/kontakkami', [KontakKamiController::class, 'index']);
        Route::get('/panduan', [UserPanduanController::class, 'index']);
        Route::get('/koderegistrasi', [KodeRegistrasiController::class, 'index']);

        Route::get('/pendaftarankunjungan', [PendaftarankunjunganController::class, 'index']);
        Route::post('/insertdatakunjungan', [DatakunjunganController::class, 'insert']);
        Route::post('/editdatakunjungan', [DatakunjunganController::class, 'edit']);
        // Route::post('', [DatakunjunganController::class, 'hapus']);

        Route::get('/pendaftarantitipan', [PendaftaranTitipanController::class, 'index']);
        Route::post('/inserttitipan', [DataTitipanController::class, 'insert']);
    });
});

<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Register');
    }


    public function daftarakun(Request $request)
    {
        $request->validate([
            'nomor_identitas' => ['unique:users']
        ]);

        $user = User::create([
            'nama' => $request->nama,
            'nomor_identitas' => $request->nomor_identitas,
            'alamat' => $request->alamat,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'foto' => $request->Foto,


        ]);

        $user->assignRole('user');

        return redirect('/login')->with([
            'type' => 'success',
            'message' => 'Pendaftaran Berhasil, silahkan masuk!'
        ]);
    }
}

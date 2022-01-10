<?php

namespace App\Http\Controllers;

use App\Models\DataWBP;
use Illuminate\Http\Request;

class DataWBPController extends Controller
{
  public function cari($cari)
  {
    $datawbp = DataWBP::where('nama_wbp', 'LIKE', '%' . $cari . '%')->orwhere('no_register', 'LIKE', '%' . $cari . '%')->get();
    return $datawbp;
  }
  public function index()
  {
    return inertia('DataWBP', [
      'data' => DataWBP::paginate(10)
    ]);
  }

  public function insert(Request $request)
  {

    // dd($request);

    $request->validate([
      'nama_wbp' => ['required'],
      'no_register' => ['required', 'unique:data_w_b_p_s'],
      'jenis_kelamin' => ['required'],
      'agama' => ['required'],
      'pendidikan' => ['required'],
      'tempat_lahir' => ['required'],
      'tanggal_lahir' => ['required'],
      'alamat' => ['required'],
      'kewarganegaraan' => ['required'],
      'perkara_pasal' => ['required'],
      'tanggal_mulai_ditahan' => ['required'],
      'lama_dipidana' => ['required'],

    ]);

    DataWBP::create([
      'nama_wbp' => $request->nama_wbp,
      'no_register' => $request->no_register,
      'jenis_kelamin' => $request->jenis_kelamin,
      'agama' => $request->agama,
      'pendidikan' => $request->pendidikan,
      'tempat_lahir' => $request->tempat_lahir,
      'tanggal_lahir' => $request->tanggal_lahir,
      'alamat' => $request->alamat,
      'kewarganegaraan' => $request->kewarganegaraan,
      'perkara_pasal' => $request->perkara_pasal,
      'tanggal_mulai_ditahan' => $request->tanggal_mulai_ditahan,
      'lama_dipidana' => $request->lama_dipidana,
    ]);
    return back()->with([
      'type' => 'success',
      'message' => 'Data WBP Berhasil Disimpan'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
      'nama_wbp' => ['required'],
      'no_register' => ['required'],
      'jenis_kelamin' => ['required'],
      'agama' => ['required'],
      'pendidikan' => ['required'],
      'tempat_lahir' => ['required'],
      'tanggal_lahir' => ['required'],
      'alamat' => ['required'],
      'kewarganegaraan' => ['required'],
      'perkara_pasal' => ['required'],
      'tanggal_mulai_ditahan' => ['required'],
      'lama_dipidana' => ['required'],

    ]);

    DataWBP::where('no_register', $request->no_register)->update([
      'nama_wbp' => $request->nama_wbp,
      'no_register' => $request->no_register,
      'jenis_kelamin' => $request->jenis_kelamin,
      'agama' => $request->agama,
      'pendidikan' => $request->pendidikan,
      'tempat_lahir' => $request->tempat_lahir,
      'tanggal_lahir' => $request->tanggal_lahir,
      'alamat' => $request->alamat,
      'kewarganegaraan' => $request->kewarganegaraan,
      'perkara_pasal' => $request->perkara_pasal,
      'tanggal_mulai_ditahan' => $request->tanggal_mulai_ditahan,
      'lama_dipidana' => $request->lama_dipidana,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data WBP Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    DataWBP::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}

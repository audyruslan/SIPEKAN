<?php

namespace App\Http\Controllers;

use App\Models\data_titipan;
use Illuminate\Http\Request;

class DataTitipanController extends Controller
{
  public function cari($cari)

  {
    $datatitipan = data_titipan::with('wbp')->where('nama_wbp', 'LIKE', '%' . $cari . '%')->orwhere('nama_pengirim', 'LIKE', '%' . $cari . '%')->get();
    return $datatitipan;
    // $datatitipan = data_titipan::with('wbp', function ($query) use ($cari) {
    //   return $query->where('nama_wbp', 'LIKE', '%' . $cari . '%');
    // })->where('nama_pengirim', 'LIKE', '%' . $cari . '%')->get();
    // return $datatitipan;
  }


  public function index()
  {
    return inertia('DataTitipan', [
      'ttp' => data_titipan::with('wbp')->paginate(10)
    ]);
  }
  public function insert(Request $request)
  {
    $request->validate([
      'nama_wbp' => ['required'],
      'hubungan' => ['required'],
      'nama_pengirim' => ['required'],
      'nomor_identitas' => ['required'],
      'nomor_hanphone' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'jenis_kiriman' => ['required'],
      'foto' => ['required'],
      'waktu_tglttp' => [''],

    ]);

    data_titipan::create([
      'nama_wbp' => $request->nama_wbp,
      'hubungan' => $request->hubungan,
      'nama_pengirim' => $request->nama_pengirim,
      'nomor_identitas' => $request->nomor_identitas,
      'nomor_hanphone' => $request->nomor_hanphone,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'jenis_kiriman' => $request->jenis_kiriman,
      'jumlah_uang' => $request->jumlah_uang,
      'detail_kiriman' => $request->detail_kiriman,
      'foto' => $request->foto,
      'waktu_tglttp' => $request->waktu_tglttp,
      'status' => '1',

    ]);
    return back()->with([
      'type' => 'success',
      'message' => 'Pendaftaran Titipan Berhasil dilakukan'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
      'nama_wbp' => ['required'],
      'hubungan' => ['required'],
      'nama_pengirim' => ['required'],
      'nomor_identitas' => ['required'],
      'nomor_hanphone' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'jenis_kiriman' => ['required'],
      'foto' => ['required'],
      'waktu_tglttp' => [''],
    ]);

    data_titipan::where('id', $request->id)->update([
      'nama_wbp' => $request->nama_wbp,
      'hubungan' => $request->hubungan,
      'nama_pengirim' => $request->nama_pengirim,
      'nomor_identitas' => $request->nomor_identitas,
      'nomor_hanphone' => $request->nomor_hanphone,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'jenis_kiriman' => $request->jenis_kiriman,
      'jumlah_uang' => $request->jumlah_uang,
      'detail_kiriman' => $request->detail_kiriman,
      'foto' => $request->foto,
      'waktu_tglttp' => $request->waktu_tglttp,

    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Titipan Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    data_titipan::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}

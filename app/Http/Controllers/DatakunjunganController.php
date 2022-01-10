<?php

namespace App\Http\Controllers;

use App\Models\data_kunjungan;
use Illuminate\Http\Request;

class DatakunjunganController extends Controller
{
  public function cari($cari)
  {
    $datakunjungan = data_kunjungan::with('wbp')->where('nama_wbp', 'LIKE', '%' . $cari . '%')->orwhere('nama_pengunjung', 'LIKE', '%' . $cari . '%')->get();
    return $datakunjungan;
  }


  public function index()
  {
    return inertia('DataKunjungan', [
      'knj' => data_kunjungan::with('wbp')->paginate(10)
    ]);
  }
  public function insert(Request $request)
  {
    //  dd($request);
    $request->validate([
      'nama_wbp' => ['required'],
      'hubungan' => ['required'],
      'nama_pengunjung' => ['required'],
      'nomor_identitas' => ['required'],
      'no_handphone' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'jplaki_laki' => ['required'],
      'jpperempuan' => ['required'],
      'jpanak_anak' => ['required'],
      'detail_barang' => ['required'],
      'foto' => ['required'],


    ]);

    data_kunjungan::create([
      'nama_wbp' => $request->nama_wbp,
      'hubungan' => $request->hubungan,
      'nama_pengunjung' => $request->nama_pengunjung,
      'nomor_identitas' => $request->nomor_identitas,
      'no_handphone' => $request->no_handphone,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'jplaki_laki' => $request->jplaki_laki,
      'jpperempuan' => $request->jpperempuan,
      'jpanak_anak' => $request->jpanak_anak,
      'detail_barang' => $request->detail_barang,
      'foto' => $request->foto,
      'status' => '1',

    ]);
    return back()->with([
      'type' => 'success',
      'message' => 'Data Kunjungan Berhasil Disimpan'
    ]);
  }

  public function edit(Request $request)
  {
    $request->validate([
      'nama_wbp' => ['required'],
      'hubungan' => ['required'],
      'nama_pengunjung' => ['required'],
      'nomor_identitas' => ['required'],
      'no_handphone' => ['required'],
      'jenis_kelamin' => ['required'],
      'alamat' => ['required'],
      'jplaki_laki' => ['required'],
      'jpperempuan' => ['required'],
      'jpanak_anak' => ['required'],
      'detail_barang' => ['required'],
      'foto' => ['required'],
    ]);

    data_kunjungan::where('id', $request->id)->update([
      'nama_wbp' => $request->nama_wbp,
      'hubungan' => $request->hubungan,
      'nama_pengunjung' => $request->nama_pengunjung,
      'nomor_identitas' => $request->nomor_identitas,
      'no_handphone' => $request->no_handphone,
      'jenis_kelamin' => $request->jenis_kelamin,
      'alamat' => $request->alamat,
      'jplaki_laki' => $request->jplaki_laki,
      'jpperempuan' => $request->jpperempuan,
      'jpanak_anak' => $request->jpanak_anak,
      'detail_barang' => $request->detail_barang,
      'foto' => $request->foto,
    ]);

    return back()->with([
      'type' => 'success',
      'message' => 'Data Kunjungan Berhasil Diupdate'
    ]);
  }

  public function hapus(Request $request)
  {
    data_kunjungan::where('id', $request->id)->delete();
    return back()->with([
      'type' => 'success',
      'message' => 'Data Berhasil diHapus!'
    ]);
  }
}

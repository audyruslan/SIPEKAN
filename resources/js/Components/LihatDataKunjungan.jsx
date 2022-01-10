import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, lihatdata } from '../store';

export default function LihatDataKunjungan() {
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editknj = useRecoilValue(editData);
    const [nama_wbp, setnama_wbp] = useState(editknj?.wbp.nama_wbp);
    const [hubungan, sethubungan] = useState(editknj?.hubungan);
    const [nama_pengunjung, setnama_pengunjung] = useState(editknj?.nama_pengunjung);
    const [nomor_identitas, setnomor_identitas] = useState(editknj?.nomor_identitas);
    const [no_handphone, setno_handphone] = useState(editknj?.no_handphone);
    const [jenis_kelamin, setjenis_kelamin] = useState(editknj ? editknj?.jenis_kelamin : 'Laki-laki');
    const [alamat, setalamat] = useState(editknj?.alamat);
    const [jplaki_laki, setjplaki_laki] = useState(editknj?.jplaki_laki);
    const [jpperempuan, setjpperempuan] = useState(editknj?.jpperempuan);
    const [jpanak_anak, setjpanak_anak] = useState(editknj?.jpanak_anak);
    const [detail_barang, setdetail_barang] = useState(editknj?.detail_barang);
    const [waktu_dan_tglknj, setwaktu_dan_tglknj] = useState(editknj?.waktu_dan_tglknj);
    const [foto, setfoto] = useState(editknj?.foto);

    return (
        <div className="p-5 top-12 rounded-xl shadow-xl absolute space-y-3 items-center justify-center bg-white  sm:w-4/6 w-full">
            <div className="flex flex-col items-center justify-center font-bold "> DETAIL</div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1"> Nama WBP </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nama_wbp}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1"> Hubungan</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{hubungan}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Nama Pengunjung</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nama_pengunjung}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Nomor Identitas</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nomor_identitas}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Nomor Handphone</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{no_handphone}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jenis Kelamin</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jenis_kelamin}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Alamat </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{alamat}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jumlah Pengikut Laki-laki</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jplaki_laki}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jumlah Pengikut Perempuan </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jpperempuan}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jumlah Pengikut Anak-anak </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jpanak_anak}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Detail Barang</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{detail_barang}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Foto</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{foto}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Waktu dan tanggal Kunjungan</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{waktu_dan_tglknj}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Kode Kunjungan</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left"></div>
            </div>
            <div className=" flex flex-col space-x-4 items-center justify-center">
                <button onClick={() => {
                    setShowForm(false)
                }} className='bg-red-500 text-white font-bold p-3 rounded-md'>Tutup</button>
            </div>
        </div>
    )
}

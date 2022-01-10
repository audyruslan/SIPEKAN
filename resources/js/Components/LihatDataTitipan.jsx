import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, lihatdata } from '../store';

export default function LihatDataTitipan() {
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editttp = useRecoilValue(editData);
    const [nama_wbp, setnama_wbp] = useState(editttp ? editttp?.nama_wbp : namawbp[0].id);
    const [hubungan, sethubungan] = useState(editttp?.hubungan);
    const [nama_pengirim, setnama_pengirim] = useState(editttp?.nama_pengirim);
    const [nomor_identitas, setnomor_identitas] = useState(editttp?.nomor_identitas);
    const [nomor_hanphone, setnomor_hanphone] = useState(editttp?.nomor_hanphone);
    const [jenis_kelamin, setjenis_kelamin] = useState(editttp ? editttp?.jenis_kelamin : 'Laki-laki');
    const [alamat, setalamat] = useState(editttp?.alamat);
    const [jenis_kiriman, setjenis_kiriman] = useState(editttp ? editttp?.jenis_kiriman : 'Makanan');
    const [jumlah_uang, setjumlah_uang] = useState(editttp?.jumlah_uang);
    const [detail_kiriman, setdetail_kiriman] = useState(editttp?.detail_kiriman);
    const [waktu_dan_tglpengiriman, setwaktu_dan_tglpengiriman] = useState(editttp?.waktu_dan_tglpengiriman);
    const [foto, setfoto] = useState(editttp?.foto);

    return (
        <div className="p-5 rounded-md shadow-xl absolute space-y-3 items-center justify-center bg-white  sm:w-2/4 w-full">
            <div className="flex flex-col items-center justify-center font-bold "> DETAIL</div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1"> Nama WBP </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nama_wbp}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1"> Hubungan </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{hubungan}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Nama Pengirim </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nama_pengirim}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Nomor Identitas </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nomor_identitas}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Nomor Handphone </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nomor_hanphone}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jenis Kelamin </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jenis_kelamin}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Alamat </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{alamat}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jenis Kiriman </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jenis_kiriman}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jumlah Uang </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jumlah_uang}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Detail Kiriman </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{detail_kiriman}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Foto</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{foto}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Waktu dan Tanggal Penitipan</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{waktu_dan_tglpengiriman}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Kode Penitipan</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">TATO</div>
            </div>

            <div className=" flex flex-col space-x-4 items-center justify-center">
                <button onClick={() => {
                    setShowForm(false)
                }} className='bg-red-500 text-white font-bold p-3 rounded-md'>Tutup</button>
            </div>
        </div>
    )
}

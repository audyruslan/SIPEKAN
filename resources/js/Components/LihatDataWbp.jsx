import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form, lihatdata } from '../store';

export default function LihatDataWbp() {
    const [showForm, setShowForm] = useRecoilState(lihatdata);
    const editWbp = useRecoilValue(editData);
    const [nama_wbp, setnama_wbp] = useState(editWbp?.nama_wbp);
    const [no_register, setno_register] = useState(editWbp?.no_register);
    const [jenis_kelamin, setjenis_kelamin] = useState(editWbp ? editWbp?.jenis_kelamin : 'Laki-laki');
    const [agama, setagama] = useState(editWbp ? editWbp?.agama : 'Islam');
    const [pendidikan, setpendidikan] = useState(editWbp ? editWbp?.pendidikan : 'Tidak Tamat SD');
    const [tempat_lahir, settempat_lahir] = useState(editWbp?.tempat_lahir);
    const [tanggal_lahir, settanggal_lahir] = useState(editWbp?.tanggal_lahir);
    const [alamat, setalamat] = useState(editWbp?.alamat);
    const [kewarganegaraan, setkewarganegaraan] = useState(editWbp ? editWbp?.kewarganegaraan : 'WNI');
    const [perkara_pasal, setperkara_pasal] = useState(editWbp?.perkara_pasal);
    const [tanggal_mulai_ditahan, settanggal_mulai_ditahan] = useState(editWbp?.tanggal_mulai_ditahan);
    const [lama_dipidana, setlama_dipidana] = useState(editWbp?.lama_dipidana);

    return (

        <div className="p-5 rounded-md shadow-xl absolute space-y-3 items-center justify-center bg-white  md:w-2/4 w-full">
            <div className="flex flex-col items-center justify-center font-bold "> DETAIL</div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1"> Nama WBP </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{nama_wbp}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className=" col-span-3 flex space-x-1"> Nomor Register </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{no_register}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Jenis Kelamin </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{jenis_kelamin}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Agama  </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{agama}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Pendidikan </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{pendidikan}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Tempat Lahir </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{tempat_lahir}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Alamat </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{alamat}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Kewarganegaraan </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{kewarganegaraan}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Perkara/Pasal </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{perkara_pasal}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Tanggal Mulai ditahan </div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{tanggal_mulai_ditahan}</div>
            </div>
            <div className="grid grid-cols-10 items-center ">
                <div className="col-span-3 flex space-x-1">Lama Pidana</div>
                <div className="col-span-1 space-x-1">:</div>
                <div className="col-span-6 text-left">{lama_dipidana}</div>
            </div>

            <div className=" flex flex-col space-x-4 items-center justify-center">
                <button onClick={() => {
                    setShowForm(false)
                }} className='bg-red-500 text-white font-bold p-3 rounded-md'>Tutup</button>
            </div>
        </div>
    )
}

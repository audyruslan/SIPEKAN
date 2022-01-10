import React, { useState } from 'react'
import AuthorizedP from '../../Layout/AuthorizedP'
import * as IconMd from "react-icons/md";
import { editData, lihatdata } from '../../store';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function KodeRegistrasi(props) {
    // const [knj, setdata] = useState(props.knj.data);
    // const [showForm, setShowForm] = useRecoilState(lihatdata);
    // const editknj = useRecoilValue(editData);
    // const [nama_wbp, setnama_wbp] = useState(editknj?.wbp.nama_wbp);
    return (

        <div className="border-2 border-gray-700 rounded-md">
            <div className="flex flex-col items-center justify-center space px-5 py-5 font-bold text-lg">Selamat!!! Anda Berhasil Melakukan Pendaftaran Kunjungan</div>

            <div className="flex flex-col border-2 border-gray-700  rounded-t-none py-5 px-5 ">
                <div className="flex flex-col place-items-end justify-items-end p-2">
                    <button className=" flex bg-yellow-500 px-3 py-3 items-center justify-center hover:scale-105 transform transition-all duration-500 rounded-xl">
                        <div className="col-span-1 flex px-2 ">
                            <IconMd.MdPrint size={20} />
                        </div>
                        CETAK KARTU</button>
                </div>

                <div className="flex flex-col space-x-50 items-center justify-center font-bold  border-2 border-white-500 bg-indigo-900 
                text-white rounded-md">DATA PENGUNJUNG</div>
                <div className="px-10 grid grid-cols-2 gap-2 items-center justify-center ">
                    <div className="flex space-x-1">
                        Nama WBP :
                    </div>
                    {/* <div className="">{knj.nama_wbp}</div> */}
                    <div className=" flex space-x-">
                        Hubungan :
                    </div>
                    <div className="flex space-x-1">
                        Nama Pengunjung :
                    </div>

                    <div className="flex space-x-1">
                        Nomor Identitas :
                    </div>
                    <div className="flex space-x-1">
                        Jenis Kelamin :
                    </div>
                    <div className="flex space-x-1">
                        Alamat :
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center font-bold px-5 py-20 w-full h-full">
                    <div className="">Tunjukkan Kode Berikut Ke Petugas Lapas Saat Berkunjung!!!</div>
                    <div className="">Diharapkan Datang 10 menit lebih awal dari jadwal antrian!!!</div>

                    <div className="py-8 flex flex-col items-center justify-center ">
                        <div className="">Anda Memiliki 0 Nomor Antrian</div>
                        <div className="">Pada Tanggal dd-mm-yyyy</div>

                        <div className="flex flex-col items-center justify-center border-2 px-20 py-8 bg-yellow-500 rounded-xl ">
                            <div className="">Nomor Antrian Anda</div>
                            <div className="">0</div>
                            <div className="">Hari, dd-mm-yyyy</div>
                            <div className="">Kode Antrian : xxxxxxxx </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
KodeRegistrasi.layout = (page) => <AuthorizedP children={page} title="Kode Registrasi" />
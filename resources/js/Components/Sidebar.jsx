import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as IconAi from "react-icons/ai";
import * as IconFa from "react-icons/fa";
import * as IconMd from "react-icons/md";
import { useRecoilState } from "recoil";
import { sidebar } from "../store";


export default function Sidebar() {
    const [showSidebar, setShowsidebar] = useRecoilState(sidebar);

    return (
        <div className="">
            {showSidebar && (
                <div className="w-56 overflow-hidden">
                    <div className="flex justify-center items-center border-r-2 border-b-2 border-yellow-500 space-x-3 bg-io-900">
                        <img src="img/log.jpg" className="w-9 " alt="" />
                        <h1 className="py-6 font-extrabold font-logo tracking-wider text-2xl text-white">
                            SIPEKAN

                        </h1>
                    </div>
                    <div className="font-poppins text-white overflow-x-hidden overflow-y-auto space-y-2 px-2 mt-5">
                        <Link
                            href="/dashboard"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-yellow-600 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1 flex">
                                    <IconMd.MdDashboard size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="text-left">Beranda</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/DataWBP"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1">
                                    <IconAi.AiFillDatabase size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">WBP</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datakunjungan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1">
                                    <IconAi.AiFillDatabase size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Kunjungan</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datatitipan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1">
                                    <IconAi.AiFillDatabase size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Titipan</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datapengunjung"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1">
                                    <IconFa.FaUserCog size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Pengguna</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/datapengunjung"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1">
                                    <IconMd.MdContactMail size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Pengaduan</span>
                                </div>
                            </div>
                        </Link>
                        {/* <Link
                            href="/registrasikunjungan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="text-sm py-2 px-11 w-64 bg-blue-100 grid grid-cols-4 gap-4 place-items-center text-white rounded-xl">
                                <div className="col-span-1">
                                    <IconFa.FaCashRegister size={20} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Registrasi Kunjungan</span>
                                </div>
                            </div>
                        </Link> */}
                    </div>
                </div>
            )}

        </div>
    );
}
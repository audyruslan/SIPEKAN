import { Link } from "@inertiajs/inertia-react";
import React from "react";
import * as IconAi from "react-icons/ai";
import * as IconFi from "react-icons/fi";
import * as IconRi from "react-icons/Ri";
import * as IconCg from "react-icons/cg";
import * as IconMd from "react-icons/md";
import * as IconFa from "react-icons/fa";
import { sidebar } from "../store";
import { useRecoilState } from "recoil";

export default function SidebarP() {
    const [showSidebar, setShowsidebar] = useRecoilState(sidebar);

    return (
        <div className="">
            {showSidebar && (
                <div className="w-56 overflow-hidden">
                    <div className="flex justify-center items-center border-b-2 border-yellow-500 space-x-3">
                        <img src="img/logo.jpg" className="w-9" alt="" />
                        <h1 className="py-6 font-extrabold font-logo tracking-wider text-2xl text-white">
                            SIPEKAN

                        </h1>
                    </div>
                    <div className="font-poppins text-white overflow-x-hidden overflow-y-auto space-y-2 px-2 mt-5 text-sm">
                        <Link
                            href="/userdashboard"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="py-2 px-11 w-64 bg-yellow-500 grid grid-cols-4 gap-4 place-items-center text-white rounded-2xl">
                                <div className="col-span-1 flex">
                                    <IconMd.MdDashboard size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="text-left">Beranda</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/antriansaya"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-2xl">
                                <div className="col-span-1">
                                    <IconFi.FiServer size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Antrian Saya</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/informasikunjungan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-2xl">
                                <div className="col-span-1">
                                    <IconRi.RiInformationLine size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Informasi Kunjungan</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/panduan"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-2xl">
                                <div className="col-span-1">
                                    <IconCg.CgNotes size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Panduan</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/kontakkami"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-2xl">
                                <div className="col-span-1">
                                    <IconMd.MdContactMail size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Hubungi Kami</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/koderegistrasi"
                            className="flex justify-between items-center font-semibold space-x-2"
                        >
                            <div className="py-2 px-11 w-64 bg-indigo-900 grid grid-cols-4 gap-4 place-items-center text-white rounded-2xl">
                                <div className="col-span-1">
                                    <IconFa.FaCashRegister size={25} />
                                </div>
                                <div className="col-span-3 w-full">
                                    <span className="">Registrasi Kunjungan</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );

}

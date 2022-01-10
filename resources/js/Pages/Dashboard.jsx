import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Authorized from "../Layout/Authorized";
// import { Head } from "@inertiajs/inertia-react";

export default function Dashboard() {

    return (
        <div className="p-10">
            {/* <Toaster /> */}
            <div className="flex space-x-3 col-span-4">
                <div className="grid grid-cols-4 gap-3 text-gray-500 font-semibold w-full">
                    <div className="flex flex-col justify-center items-center bg-yellow-500  shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-md">Pengguna</h6>
                        <span className="text-5xl mt-2 font-extrabold text-blue-400">
                            111
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-md">Pengunjung</h6>
                        <span className="text-5xl mt-2 font-extrabold text-green-400">
                            134
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-md">Titipan</h6>
                        <span className="text-5xl mt-2 font-extrabold text-yellow-400">
                            200
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-3xl px-5 py-2 border-2 border-gray-50">
                        <h6 className="text-md">Saran & Masukan</h6>
                        <span className="text-5xl mt-2 font-extrabold text-red-400">
                            1000
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
Dashboard.layout = (page) => <Authorized children={page} title="Dashboard" />;

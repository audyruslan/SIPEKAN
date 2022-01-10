import React from 'react'
import { Link } from "@inertiajs/inertia-react";
import * as HiIkon from "react-icons/hi"
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';


export default function Register(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const daftarakun = (data) => {
        Inertia.post("register", data);

    };

    return (
        <div className="">
            <div className="h-screen  w-full flex justify-center items-center">
                <div className="w-3/5 flex h-a1 overflow-hidden rounded-3xl">
                    <div className="p-12 bg-blue-700 bg-opacity-70 w-3/5 shadow-xl md:flex hidden flex-col justify-center ">
                        <div className="mb-10">
                            <Link
                                href="/"
                                className="text-xs text-white hover:text-green-200"
                            >
                                <HiIkon.HiOutlineLogin size={20} />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center w-5/6">
                                <img
                                    src="/img/logo.jpg"
                                    alt=""
                                    className="px-5"
                                />
                            </div>
                            <div className="mt-8 text-xs italic text-white text-center">
                                Selamat Datang Di Halaman Register SIPEKAN
                            </div>
                        </div>
                    </div>

                    <div className="py-8 px-10 text-center flex flex-col flex-grow bg-white  shadow-xl justify-center items-center ">
                        <form onSubmit={handleSubmit(daftarakun)}>
                            <div>
                                <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">
                                    Register Page
                                </h1>
                            </div>
                            <div className="space-y-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Nama Lengkap"
                                    name="nama"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("nama", {
                                        required: true,
                                    })}
                                />
                                {errors?.nama && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Nama Lengkap
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="NIP_Nomor_Identitas"
                                    name="nomor_identitas"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("nomor_identitas", {
                                        required: true,
                                    })}
                                />
                                {errors?.nomor_identitas && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *nip_nomor_identitas
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="Alamat"
                                    name="alamat"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("alamat", {
                                        required: true,
                                    })}
                                />
                                {errors?.alamat && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Alamat
                                    </span>
                                )}
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("username", {
                                        required: true,
                                    })}
                                />
                                {errors?.username && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Username
                                    </span>
                                )}
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors?.password && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Password
                                    </span>
                                )}
                                <input
                                    type="password"
                                    placeholder="Konfirmasi_Password"
                                    name="konfirmasi_password"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("konfirmasi_password", {
                                        required: true,
                                    })}
                                />
                                {errors?.password && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Konfirmasi Password
                                    </span>
                                )}
                                <input
                                    type="file"
                                    placeholder="Konfirmasi_Password"
                                    name="konfirmasi_password"
                                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    {...register("gambar", {
                                        required: true,
                                    })}
                                />
                                {errors?.gambar && (
                                    <span className="flex pl-1 justify-start text-red-300 text-xs">
                                        *Gambar
                                    </span>
                                )}
                            </div>
                            {props?.errors.nip_nomor_identitas && <span className='text-red-300 text-xs'> Nomor Identitas Sudah di daftarkan, silahkan coba Nomor Identitas lain!</span>}
                            <div className="text-center mt-6 w-full">
                                <button
                                    type='submit'
                                    className="w-full py-2 text-xl shadow-sm text-blue-400 border-2 hover:text-white hover:bg-green-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30"
                                >
                                    Daftar
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// Register.layout = (page) => <Guest children={page} title="Register"/>;

import { Tab } from '@headlessui/react';
import React, { useState } from 'react'
import AuthorizedP from '../../Layout/AuthorizedP';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function KontakKami() {
    let [categories] = useState({
        Persyaratan: [
            {
                id: 1,
                title: '1. Ada Identitas Pengadu yang jelas ',
            },
            {
                id: 2,
                title: "2. Substansi aduan jelas",
            },
            {
                id: 3,
                title: "3. Pihak yang diadukan jelas",
            },
        ],
        Prosedur: [
            {
                id: 1,
                title: '1. Pihak mengadu melaporkan pengaduan',
            },
            {
                id: 2,
                title: '2. Petugas Unit Layanan Pengaduan mencatat pengaduan di buku register pengaduan',
            },
            {
                id: 3,
                title: '3. Petugas Unit Layanan Pengaduan melakukan verfikasi teradap substansi pengaduan',
            },
            {
                id: 4,
                title: '4. Petugas Unit Layanan Pengaduan melakukan investigasi terhadap laporan pengaduan',
            },
            {
                id: 5,
                title: '5. Petugas Unit Layanan Pengaduan menyampaikan klarifikasi atas laporan pengaduan kepada pihak pengadu',
            },
        ],
        Jangka_Waktu_Penyelesaian: [
            {
                id: 1,
                title: 'Waktu yang dibutuhkan sejak diterimanya pengaduan sampai dengan sampainya surat penyampaian hasil penanganan pengaduan kepihak pengadu adalah 14 (empat belas) hari kerja dan dapat diperpanjang 14 (empat belas) hari',
            },

        ],
        Jaminan_Pelayanan: [
            {
                id: 1,
                title: '1. Kepastian tindak lanjut pengaduan sesuai prosedur',
            },
            {
                id: 2,
                title: "2. Pelayanan diberikan tepat waktu",
            },
            {
                id: 3,
                title: "3. Pelayanan tidak dipungut biaya",
            },
            {
                id: 4,
                title: "4. Tidak diskriminatif",
            },
        ],
        Jaminan_Keamanan: [
            {
                id: 1,
                title: 'Identitas pengadu dijamin kerahasiaannya',
            },
        ],
    })

    return (
        <div className="">
            <div className="flex items-center justify-center font-bold">LEMBAGA PEMASYARAKATAN KELAS IIA PALU</div>
            <div className="flex items-center justify-center font-bold py-2">PROVINSI SULAWESI TENGAH</div>
            <div className="flex items-center justify-center font-bold py-4">LAYANAN PENGADUAN</div>
            <div className="flex flex-col items bg-center justify-center w-full h-fullmax-w-md sm:px-0 ">
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl bg">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                                        'focus:outline-none focus:ring-2 bg-yellow-500 ring-offset-2 border-2 ring-offset-blue-400 ring-white ring-opacity-60 hover:scale-105 transform transition-all duration-500',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white rounded-xl p-3',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 rounded-xl shadow-xl border-2 border-gray-300 '
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 rounded-md hover:bg-coolGray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>


                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>

                <div className="flex flex-col px-2 py-7">
                    <div className="flex flex-col py-5">
                        <div className=" grid grid-cols-3 px-5 py-5 space-x-10 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 rounded-xl shadow-xl border-2 border-gray-300 ">
                            <div className="">
                                <div className="flex font-bold">Alamat : </div>
                                <div className="">Jalan Dewi Sartika No.73, Birobuli Selatan, Palu Selatan, Birobuli Sel., Palu, Kota Palu, Sulawesi Tengah 94111</div>
                            </div>
                            <div className="">
                                <div className="flex font-bold">Email : </div>
                                <div className="">lapaskelasIIAPalu@sultengprov.go.id</div>
                            </div>
                            <div className="">
                                <div className="flex font-bold">Telp : </div>
                                <div className="">+62451481550 / +6281354522084</div>
                            </div>

                        </div>
                    </div>
                    <div className=" flex flex-col border-2 border-yellow-500 p-5 h-full w-full">
                        <div className="flex items-center justify-center font-bold py-2">Masukkan Kritik dan Saran</div>
                        <label htmlFor="">Nama Anda</label>
                        <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label htmlFor="">Alamat E-Mail Anda</label>
                        <input type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label htmlFor="">Pesan</label>
                        <textarea type="text" className="mt-1 block w-full py-2 px-3 border border-black-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                </div>
            </div>
        </div>
    )
}
KontakKami.layout = (page) => <AuthorizedP children={page} title="Kontak Kami" />;

import { Link } from '@inertiajs/inertia-react'

import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="w-full h-24 items-center bg-white shadow-lg px-5 py-3 flex justify-between">
                <div className="px-8">
                    <a href="/" className="flex items-center space-x-4">
                        <img src="img/log.jpg" className="w-12" alt="" />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-gray-700">KEMENTRIAN HUKUM DAN HAM RI</h1>
                            <h1 className="text-sm font-bold text-gray-700">KANTOR WILAYAH SULAWESI TENGAH</h1>
                            <h1 className="text-sm font-bold text-gray-700">LAPAS KELAS II A PALU</h1>
                        </div>
                    </a>
                </div>

                <div className="px-8">
                    <nav className='space-x-10 flex items-center'>
                        <div className="space-x-5">
                            <Link href="">About</Link>
                            <Link href="/login">Masuk</Link>
                            <Link href="/register">Register</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

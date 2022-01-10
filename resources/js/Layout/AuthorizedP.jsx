import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import * as IconHi from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import Header from "../Components/Header";
import SidebarP from "../Components/SidebarP";

export default function AuthorizedP({ children, title }) {
    const { flash } = usePage().props;
    const { auth } = usePage().props;

    flash.type && toast[flash.type](flash.message);
    return (
        <RecoilRoot>
            <div className="flex h-screen font-poppins bg-indigo-900">
                <Toaster />
                <Head title={title} />
                <SidebarP />
                <div className="flex-grow bg-white text-white-400 flex flex-col overflow-hidden">
                    <Header className="shadow-2xl" title={title} user={auth.user.nama} />
                    <div className="flex flex-col overflow-x-hidden overflow-y-auto p-5 to-indigo-900 flex-grow">
                        {children}
                    </div>
                </div>
            </div>
        </RecoilRoot>
    );
}

import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import TableDataKunjungan from '../Components/TableDataKunjungan'
import Authorized from '../Layout/Authorized';
import { editData, form, lihatdata } from '../store';
import * as BiIkon from "react-icons/bi"
import * as GrIkon from "react-icons/gr"
import * as AiIkon from "react-icons/ai"
import Pagination from '../Components/pagination';
import FormDataKunjungan from '../Components/user/FormDataKunjungan';
import axios from 'axios';
import LihatDataKunjungan from '../Components/LihatDataKunjungan';

export default function DataKunjungan(props) {
    const [cari, setCari] = useState();
    const [knj, setdata] = useState(props.knj.data);
    const pencarian = async () => {
        try {
            let response = await axios.get(`/caridatakunjungan/${cari}`);
            setdata(response.data);

        } catch (error) { }
    };

    // const data = props.knj.data;
    const links = props.knj.links;
    const from = props.knj.from;

    const [showForm, setShowForm] = useRecoilState(form);
    const [editknj, setEditknj] = useRecoilState(editData);
    const [lihatknj, setlihatknj] = useRecoilState(lihatdata)

    return (

        <div className='relative min-h-screen flex items-center justify-center '>
            {showForm && <FormDataKunjungan />}
            {lihatknj && <LihatDataKunjungan />}

            <div className="w-full h-full space-y-3">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <button onClick={() => {
                            setEditWbp(null);
                            setShowForm(true);
                        }} className="p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center">
                            <GrIkon.GrNewWindow size={15} />
                            <h1>Cetak</h1>
                        </button>
                        <div className="flex items-center">
                            <p className='w-24' htmlFor="data_WBP">Status :</p>
                            <select
                                className="mt-1 block w-full py-2 px-3 border-2 border-yellow-500 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    setstatus(e.target.value)
                                }}
                                value={status}>
                                <option value='Ya'>Ya</option>
                                <option value='Belum'>Belum</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 justify-end ">
                        <button onClick={() => {
                            pencarian();
                        }}>
                            <BiIkon.BiSearchAlt2 size={20} /></button>

                        <input type="text" className='p-1 bg-white border-yellow-500 border-2 rounded-md'
                            value={cari}
                            onChange={(e) => {
                                setCari(e.target.value);
                                if (e.target.value == "") {
                                    setdata(props.knj.data);
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <TableDataKunjungan dataknj={knj} from={from} />
                </div>
                <Pagination links={links} />

            </div>
        </div>
    )
}
DataKunjungan.layout = (page) => (
    <Authorized children={page} title="Data Kunjungan" />
);

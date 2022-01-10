import React, { useState } from 'react'
import TableDataWBP from '../Components/TableDataWBP';
import Authorized from '../Layout/Authorized';
import * as BiIkon from "react-icons/bi"
import * as GrIkon from "react-icons/gr"
import FormDataWBP from '../Components/FormDataWBP';
import { useRecoilState } from 'recoil';
import { editData, form, lihatdata } from '../store';
import Pagination from '../Components/pagination';
import axios from 'axios';
import LihatDataWbp from '../Components/LihatDataWbp';

export default function DataWBP(props) {
    const [cari, setCari] = useState();
    const [data, setdata] = useState(props.data.data);
    const pencarian = async () => {
        try {
            let response = await axios.get(`/caridataWBP/${cari}`);
            setdata(response.data);
            // console.log(response);
        } catch (error) { }
    };


    // const data = props.data.data;
    const links = props.data.links;
    const from = props.data.from;


    const [showForm, setShowForm] = useRecoilState(form);
    const [editWbp, setEditWbp] = useRecoilState(editData);
    const [lihatwbp, setlihatwbp] = useRecoilState(lihatdata)

    return (
        <div className='relative min-h-screen flex items-center justify-center'>
            {showForm && <FormDataWBP />}
            {lihatwbp && <LihatDataWbp />}

            <div className="w-full h-full space-y-3">
                <div className="flex justify-between">
                    <button onClick={() => {
                        setEditWbp(null);
                        setShowForm(true);
                    }} className=" p-2  bg-yellow-500 rounded-lg border-2 item-end flex space-x-2 items-center">
                        <GrIkon.GrNewWindow size={15} />
                        <h1>Tambah Data</h1>
                    </button>
                    <div className="flex items-center">
                        <button onClick={() => {
                            pencarian();
                        }}>
                            <BiIkon.BiSearchAlt2 size={20} /></button>
                        <input type="text" className='p-1 bg-white border-yellow-500 border-2 rounded-md'
                            value={cari}
                            onChange={(e) => {
                                setCari(e.target.value);
                                if (e.target.value == "") {
                                    setdata(props.data.data);
                                }
                            }}
                        />

                    </div>
                </div>
                <TableDataWBP datawbp={data} from={from} />
                <Pagination links={links} />
            </div>

        </div>
    );
}

DataWBP.layout = (page) => (
    <Authorized children={page} title="Data WBP" />
);

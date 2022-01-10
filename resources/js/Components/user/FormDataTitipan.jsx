import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editData, form } from '../../store';

export default function FormDataTitipan({ namawbp }) {
  const [showForm, setShowForm] = useRecoilState(form);
  const editttp = useRecoilValue(editData);

  const { register, handleSubmit, formState: { error } } = useForm();
  const [nama_wbp, setnama_wbp] = useState(editttp ? editttp?.nama_wbp : '-Pilih-');
  const [hubungan, sethubungan] = useState(editttp?.hubungan);
  const [nama_pengirim, setnama_pengirim] = useState(editttp?.nama_pengirim);
  const [nomor_identitas, setnomor_identitas] = useState(editttp?.nomor_identitas);
  const [nomor_hanphone, setnomor_hanphone] = useState(editttp?.nomor_hanphone);
  const [jenis_kelamin, setjenis_kelamin] = useState(editttp ? editttp?.jenis_kelamin : '-Pilih-');
  const [alamat, setalamat] = useState(editttp?.alamat);
  const [jenis_kiriman, setjenis_kiriman] = useState(editttp ? editttp?.jenis_kiriman : '-Pilih-');
  const [jumlah_uang, setjumlah_uang] = useState(editttp?.jumlah_uang);
  const [detail_kiriman, setdetail_kiriman] = useState(editttp?.detail_kiriman);
  const [waktu_dan_tglpengiriman, setwaktu_dan_tglpengiriman] = useState(editttp?.waktu_dan_tglpengiriman);
  const [foto, setfoto] = useState(editttp?.foto);

  const insertData = (ttp) => {
    ttp['nama_wbp'] = nama_wbp;
    ttp['hubungan'] = hubungan;
    ttp['nama_pengirim'] = nama_pengirim;
    ttp['nomor_identitas'] = nomor_identitas;
    ttp['nomor_hanphone'] = nomor_hanphone;
    ttp['jenis_kelamin'] = jenis_kelamin;
    ttp['alamat'] = alamat;
    ttp['jenis_kiriman'] = jenis_kiriman;
    ttp['jumlah_uang'] = jumlah_uang;
    ttp['detail_kiriman'] = detail_kiriman;
    ttp['waktu_dan_tglpengiriman'] = waktu_dan_tglpengiriman;
    ttp['foto'] = foto;

    Inertia.post("/inserttitipan", ttp, {
      onSuccess: () => {
        setShowForm(false);
      },
      onError: (e) => {
        console.log(e);
      }

      // if (editttp) {
      //   Inertia.post("/edittitipan", ttp, {
      //     onSuccess: () => {
      //       setShowForm(false);
      //     }
      //   });
      // } else {
      //   Inertia.post("/inserttitipan", ttp, {
      //     onSuccess: () => {
      //       setShowForm(false);
      //     },
      //     onError: (e) => {
      //       console.log(e)
      //     }
      //   });
      // }
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit(insertData)} className='w-full'>
        <div className=" overflow-hidden sm:rounded-md flex justify-center">
          <div className="px-10 py-5 bg-white rounded-md sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nama WBP</label>
                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnama_wbp(e.target.value)
                    }}
                    value={nama_wbp}>
                    <option value=''>-Pilih-</option>
                    {namawbp?.map((wbp, key) => {
                      return (
                        <option key={key} value={wbp.id}>{wbp.nama_wbp}</option>
                      )
                    })}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Hubungan</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      sethubungan(e.target.value)
                    }}
                    value={hubungan} />

                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nama Pengirim</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                         bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                         focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnama_pengirim(e.target.value)
                    }}
                    value={nama_pengirim} />

                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nomor Identitas</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                       bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                       focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnomor_identitas(e.target.value)
                    }}
                    value={nomor_identitas} />

                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Nomor Handphone</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                       bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                       focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setnomor_hanphone(e.target.value)
                    }}
                    value={nomor_hanphone} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Jenis Kelamin</label>
                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white
                         rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                         focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setjenis_kelamin(e.target.value)
                    }}
                    value={jenis_kelamin}>
                    <option value=''>-Pilih-</option>
                    <option value='Laki-laki'>Laki-laki</option>
                    <option value='Perempuan'>Perempuan</option>
                  </select>
                </div>

              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Alamat Pengirim</label>
                  <input type="text"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                      bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                      focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setalamat(e.target.value)
                    }}
                    value={alamat} />


                </div>

                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan"  >Jenis Kiriman</label>
                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                        rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setjenis_kiriman(e.target.value)
                    }}
                    value={jenis_kiriman}>
                    <option value=''>-Pilih-</option>
                    <option value='Makanan'>Makanan</option>
                    <option value='Uang'>Uang</option>
                    <option value='Lainnya'>Lainnya</option>
                  </select>

                </div>
                {jenis_kiriman == 'Uang' ? <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Jumlah Uang</label>
                  <textarea
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 
                        bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setjumlah_uang(e.target.value)
                    }}
                    value={jumlah_uang}>
                  </textarea>
                </div> :
                  <div className="flex flex-col">
                    <label htmlFor="data_kunjungan">Detail Kiriman</label>
                    <textarea

                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                         mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      onChange={(e) => {
                        setdetail_kiriman(e.target.value)
                      }}
                      value={detail_kiriman}>

                    </textarea>
                  </div>
                }

                <div className="flex flex-col">
                  <label htmlFor="data_kunjungan">Foto</label>
                  <input type="file"
                    onChange={(e) => {
                      setfoto(e.target.value)
                    }}
                    value={foto} />
                </div>
                <div className="space-x-4 space-y-5">
                  <button type='submit' className='bg-green-500 text-white font-bold p-3 rounded-md'>Kirim</button>
                  <button onClick={() => {
                    setShowForm(false)
                  }} className='bg-red-500 text-white font-bold p-3 rounded-md'>Batal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>


    </>
  )
}

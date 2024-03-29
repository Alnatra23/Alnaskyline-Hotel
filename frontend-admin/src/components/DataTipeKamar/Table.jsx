import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteData, editData } from "../../assets";
import axios from 'axios'

const Table = () => {

  let [tipeKamar, setTipeKamar] = useState([]);
  let [search, setSearch] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    if(sessionStorage.getItem('isLogin') != "Login"){
      navigate('/loginAdmin')
    }
  },[])

  useEffect(() => {
    axios.get(`http://localhost:8080/tipe_kamar`, {
        headers : {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
    })
    .then(res => {
        console.log(res.data.tipe_kamar)
        setTipeKamar(res.data.tipe_kamar)
    })
    .catch(error => { 
    console.log(error)
    })
}, [])

const handleCari = () => {
  let data = {
    nama_tipe_kamar:search
  }
  axios
  .post(`http://localhost:8080/tipe_kamar/search`, data,{
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  })
  .then((res) => {
    console.log(res.data.tipe_kamar);
    setTipeKamar(res.data.tipe_kamar);
  })
  .catch((error) => {
    console.log(error);
  });
};

useEffect(() => {
  if (search !== "") {
    handleCari();
  } else if (search === "") {
    axios
      .get(`http://localhost:8080/tipe_kamar`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.tipe_kamar);
        setTipeKamar(res.data.tipe_kamar);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [search]);

function Delete (id) {
  let url = "http://localhost:8080/tipe_kamar/" + id
  if(window.confirm("Apakah Anda Yakin Untuk Menghapus Data?")){
      axios.delete(url, {
          headers : {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
      })
      .then((response) => {
          console.log(response)
          window.location.reload(false);
          tipeKamar()
      })
      .catch((error) => {
          console.log(error)
          // if(window.confirm("Error")){
          //     window.location.reload(false);
          // }
      })
  }
  // window.location.reload(false);
}

  return (
    <div className="p-4 mt-14 ">
<div className="flex items-center justify-between">
        <button>
          <Link
            className="p-4 text-white bg-yellow-400 rounded-lg hidden mb-4 sm:block" to="/addDataTipeKamar" >
            Tambah Data
          </Link>
        </button>
        {/* <form onSubmit={(e) => handleSearch(e)}> */}
        <div className="flex space-x-1">
          <input
            type="text"
            id="default-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-primary-400 focus:ring-primary-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-black rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {/* </form> */}
      </div>
      <table className="p-4 w-full ">
        <thead className="text-left border-b-2 border-gray-200">
          {/* <th className="p-4">No</th> */}
          <th className="p-4">Foto</th>
          <th className="p-4">Nama Tipe Kamar</th>
          <th className="p-4">Harga</th>
          <th className="p-4">Aksi</th>
        </thead>
        <tbody>
          {tipeKamar.map((tipeKamar, index) => (
            <tr key={tipeKamar.id_tipe_kamar}>
              {/* <td className="p-4">{tipeKamar.no}</td> */}
              {console.log(tipeKamar)}
              <td className="p-4 ">
                <img className="w-14 rounded-full" src={`http://localhost:8080/image/tipe_kamar/${tipeKamar.foto}`} alt="" />
              </td>
              <td className="p-4">{tipeKamar.nama_tipe_kamar}</td>
              <td className="p-4">{tipeKamar.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
              <td className="flex justify-start items-center p-9">
                <Link to={`/editDataTipeKamar/${tipeKamar.id_tipe_kamar}`}><img className='w-4' src={editData} alt="" /></Link>
                <button onClick={() => Delete(tipeKamar.id_tipe_kamar)}><img className='w-4 ml-2' src={deleteData} alt="" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex">
        <div className="flex mt-14">
          <p className='text-base text-gray'>Menampilkan <span className='text-black'>{tipeKamar !== undefined ? tipeKamar.length : ''}</span> Data</p>
        </div>
      </div>
    </div>
  );
};

export default Table;

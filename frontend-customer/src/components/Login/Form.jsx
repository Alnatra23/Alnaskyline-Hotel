import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'


const Form = () => {

    let [email, setEmail] = useState([])
    let [password, setPassword] = useState([])
    let navigate = useNavigate()


    function Submit(event){
        event.preventDefault()
        let url = "http://localhost:8080/customer/auth"
        // console.warn(email, password)
    
        let data = {
          email: email,
          password: password,
        }
    
        axios.post(url, data)
        .then(res => {
          console.log(res.data);
          if(JSON.stringify(res.data.logged) == "true" ){
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('nama', res.data.data.nama)
            // sessionStorage.setItem('role', res.data.data.role)
            sessionStorage.setItem('id_customer', res.data.data.id_customer)
            sessionStorage.setItem('isLogin', "Login")
            navigate('/home')
          }else{
            window.confirm("email atau Password salah, silahkan coba lagi!")
          }
        })
        .catch(error => {
          console.log(error)
        })
      }

  return (
    <div className='flex flex-col p-20'>
        <div className='w-[550px]'>
            <img className='h-[100px]' src={"/images/Alnaskyline.png"} alt="" />
            <div className='flex flex-col mt-24'>
                <h1 className='text-4xl font-bold text-black'>Selamat Datang!</h1>
                <p className='text-base text-gray mt-4'>Masuk untuk mengakses fitur yang telah tersedia pada website kami!</p>
            </div>

            <form onSubmit={Submit} className='flex flex-col mt-10 '>
                <div>
                    <label htmlFor="email">Alamat Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name='email' placeholder='Masukkan Email' className='mt-1 p-4 stroke-form w-full' required />
                </div>
                <div className='mt-6'>
                    <label htmlFor="pass">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name='pass' placeholder='Masukkan Password' className='mt-1 p-4 stroke-form w-full' required />
                </div>
                <form action="" className='mt-6'>
                    <p className='ml-2 text-gray'>Belum Memiliki Akun?<Link className='black-text font-medium'to="/register" > Registrasi</Link></p>
                    {/* <input type="checkbox" name='ingat'/>
                    <label htmlFor="ingat" className='ml-2 text-gray'>Ingat Akun?</label> */}
                </form>
                <button type='submit' className='w-full h-[48px] sm:flex justify-center items-center text-white bg-black rounded-lg hidden mt-10'>
                    Masuk
                </button>
            </form>


            <p className='text-gray mt-24'>© AlnaSkyline 2023 - All Rights Reserved </p>
            
        </div>
    </div>
  )
}

export default Form
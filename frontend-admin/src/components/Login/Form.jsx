import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logo } from "../../assets";

const Form = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  function Submit(event) {
    event.preventDefault();
    let url = "http://localhost:8080/user/auth";

    let data = {
      email: email,
      password: password,
    };

    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        if (JSON.stringify(res.data.logged) === "true") {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("nama", res.data.data.nama_user);
          sessionStorage.setItem("role", res.data.data.role);
          sessionStorage.setItem("id_user", res.data.data.id);
          sessionStorage.setItem("isLogin", "Login");
          if (res.data.data.role === "resepsionis") {
            console.log(res.data.data.role);
            navigate("/dataPemesanan");
          } else {
            navigate("/dataKamar");
          }
        } else {
          window.confirm("Email atau Password salah, silahkan coba lagi!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      // Jika sudah terotentikasi, redirect ke halaman yang sesuai
      const role = window.sessionStorage.getItem("role");
      if (role === "resepsionis") {
        navigate("/dataPemesanan");
      } else if (role === "admin") {
        navigate("/dataKamar");
      }
    }
  }, [navigate]);

  return (
    <div className="flex flex-col p-20">
      <div className="w-[550px]">
        <img className="h-[100px]" src={logo} alt="" />
        <div className="flex flex-col mt-24">
          <h1 className="text-4xl font-bold black-text">Selamat Datang!</h1>
          <p className="text-base text-gray mt-4">
            Masuk untuk mengakses fitur yang telah tersedia pada website kami!
          </p>
        </div>

        <form onSubmit={Submit} className="flex flex-col mt-10 ">
          <div>
            <label htmlFor="email">Alamat Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              name="email"
              placeholder="Masukkan Email"
              className="mt-1 p-4 stroke-form w-full"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="pass">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="pass"
              placeholder="Masukkan Password"
              className="mt-1 p-4 stroke-form w-full"
              required
            />
          </div>
          <form action="" className="mt-6">
            <input type="checkbox" name="ingat" />
            <label htmlFor="ingat" className="ml-2 text-gray">
              Ingat Akun?
            </label>
          </form>
          <button
            type="submit"
            className="w-full bg-black h-[48px] sm:flex justify-center items-center text-white rounded-lg hidden mt-10"
          >
            Masuk
          </button>
        </form>

        <p className="text-gray mt-24">
          © AlnaSkyline 2023 - All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Form;

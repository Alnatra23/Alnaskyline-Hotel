import React from "react";
import { alasanLogo1, alasanLogo2, alasanLogo3 } from "../../assets";

const Alasan = () => {
  return (
    <div className="mt-20 flex flex-col">
      <h1 className="text-xl font-medium">Alasan Dibalik Mengapa Memilih Kami?</h1>

      <div className='flex justify-between mt-16'>
        <div className="flex flex-col">
          <img className="w-14" src={alasanLogo1} alt="" />
          <h1 className="text-xl font-medium mt-5">Pelayanan Terbaik</h1>
          <p className="text-gray text-base w-80 mt-5"> Kami mengutamakan kepuasan pelanggan dan berkomitmen untuk memberikan pelayanan yang luar biasa. Tim kami terlatih dengan baik dan siap untuk menjawab pertanyaan Anda, memberikan bantuan, dan menangani kebutuhan khusus Anda dengan ramah dan profesional. Kami selalu berusaha memberikan pengalaman yang menyenangkan dan tak terlupakan selama Anda tinggal bersama kami.</p>
        </div>
        <div className="flex flex-col">
          <img className="w-14" src={alasanLogo2} alt="" />
          <h1 className="text-xl font-medium mt-5">Fasilitas Aman & Lengkap</h1>
          <p className="text-gray text-base w-80 mt-5">Keamanan Anda adalah prioritas utama kami. Kami memiliki fasilitas yang didesain untuk memberikan rasa aman selama Anda menginap. Mulai dari sistem keamanan modern hingga fasilitas darurat yang tersedia sepanjang waktu, kami berkomitmen untuk menjaga kenyamanan dan keamanan Anda. Selain itu, fasilitas lengkap kami akan memenuhi semua kebutuhan Anda, termasuk tempat makan yang lezat, kolam renang, pusat kebugaran, dan banyak lagi.</p>
        </div>
        <div className="flex flex-col">
          <img className="w-14" src={alasanLogo3} alt="" />
          <h1 className="text-xl font-medium mt-5">Cepat & Terpercaya</h1>
          <p className="text-gray text-base w-80 mt-5">Kami menghargai waktu Anda dan berusaha untuk memberikan layanan yang cepat dan efisien. Ketika Anda memesan atau meminta bantuan, kami akan merespons dengan segera. Kepercayaan Anda sangat penting bagi kami, dan kami selalu berusaha untuk memenuhi harapan Anda dan menjaga standar kualitas tertinggi dalam setiap aspek bisnis kami.</p>
        </div>
      </div>
    </div>
  );
};

export default Alasan;

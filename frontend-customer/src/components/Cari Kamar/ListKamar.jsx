import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { arrowLeftRekomendasi, arrowRightRekomendasi } from '../../assets';

const ListKamar = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 rounded-full">
        <img src={arrowLeftRekomendasi} alt="Previous" className="w-4 h-4" />
      </button>
    ),
    nextArrow: (
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 rounded-full">
        <img src={arrowRightRekomendasi} alt="Next" className="w-4 h-4" />
      </button>
    ),
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium">Rekomendasi Tipe Kamar Terbaik</h1>
      <p className="text-sm text-gray">Rekomendasi Tipe Kamar</p>

      <div className="relative mt-4">
        <Slider {...settings}>
          {data.map((room, i) => (
            <div className="w-64 h-auto p-4" key={i}>
              <Link to={`/detailKamar/${room.id_tipe_kamar}`}>
                <div className="flex flex-col h-full border rounded-lg overflow-hidden">
                  <img
                    className="w-full h-40 object-center object-cover rounded-t-lg"
                    src={`http://localhost:8080/image/tipe_kamar/${room.foto}`}
                    alt=""
                  />
                  <div className="flex-grow p-4">
                    <h1 className="text-base font-semibold">{room.nama_tipe_kamar}</h1>
                    <p className="text-sm mt-2">
                      {room.harga.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      })}{' '}
                      Per Malam
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex mt-6">
        <p className="text-base text-gray">
          Menampilkan <span className="text-black">{data.length}</span> Data
        </p>
      </div>
    </div>
  );
};

export default ListKamar;

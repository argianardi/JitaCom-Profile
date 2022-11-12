import React from "react";
import logoTokped from "../img/logo-tokped.png";
import logoGoogleMap from "../img/google-map.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineClockCircle,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="px-5 py-3 text-white sm:px-3 md:px-10 lg:px-20 xl:px-28 2xl:px-44 bg-biruJita font-roboto">
      <div className="flex flex-wrap justify-between">
        <div className="mb-5 ">
          <div className="mb-5">
            <h2 className="font-bold">Social Media</h2>
            <div className="flex items-center ml-3">
              <AiFillFacebook size={25} />
              <p className="text-sm">Candra Jita Kom</p>
            </div>
            <div className="flex items-center ml-3">
              <AiFillInstagram size={25} />
              <p className="text-sm">Jita_Komputer_Bengkulu</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Toko Online</h2>
            <div className="flex items-end ml-3">
              <img src={logoTokped} alt="logo-tokopedia" />
              <p className="text-sm">Pagoda Komputer</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Toko Kami</h2>
          <div className="flex flex-col gap-1 ml-0 sm:ml-2">
            <div className="flex items-center">
              <BiMap size={25} />
              <p className="text-sm ml-[0.5px]">
                JL. Mangga 04 No 09 Lingkar Timur Singaran Pati Kota Bengkulu
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={logoGoogleMap}
                alt="logo google map"
                height={25}
                width={25}
              />
              <p className="text-sm ml-[0.5px]">Jita Computer</p>
            </div>
            <div className="flex items-center">
              <AiOutlineClockCircle size={25} />
              <p className="text-sm ml-[2px]">
                Buka Setiap Hari, 08:00-20:00 WIB
              </p>
            </div>
            <div className="flex items-center">
              <AiOutlineWhatsApp size={25} />
              <p className="text-sm ml-[2px]">0812 7952 2663</p>
            </div>
            <div className="flex items-center">
              <AiOutlinePhone size={25} />
              <p className="text-sm ml-[2px]">
                0812 7952 2663 / 0852 6698 5603
              </p>
            </div>
            <div className="flex items-center">
              <AiOutlineMail size={25} />
              <p className="text-sm ml-[2px]">Pagoda.5elemen@gmail.com</p>
            </div>
            <div className="flex items-center">
              <AiOutlineMail size={25} />
              <p className="text-sm ml-[2px]">lutfy1992@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm text-center">
          &copy; 2022 Hak Cipta Terpelihara PT Jita Ilham Berkarya
        </p>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

export const CardCCTV = ({ img, title, harga4ch, harga8ch }) => {
  return (
    <div className="bg-[#d9d9d9] pt-7 pb-6 rounded-lg w-[280px] ">
      <Link to={`/`}>
        <img src={img} alt={title} className="mx-auto h-52" />
        <p className="my-1 text-2xl font-bold uppercase ml-9 text-biruJita font-poppins hover:text-orangeJita">
          {title}
        </p>
      </Link>
      {harga4ch !== 0 && (
        <p className="font-bold ml-9 text-biruJita">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            currencyDisplay: "symbol",
          }).format(harga4ch)}
        </p>
      )}
      <p className="font-bold text-biruJita ml-9">
        {Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          currencyDisplay: "symbol",
        }).format(harga8ch)}
      </p>
      <a
        className="flex items-center justify-center p-1 mx-auto rounded-lg mt-7 w-52 bg-biruJita hover:bg-orangeJita"
        href="https://wa.link/3507s0"
      >
        <IoLogoWhatsapp color="green" size={40} />
        <p className="text-xl font-bold text-white">Pesan Sekarang</p>
      </a>
    </div>
  );
};

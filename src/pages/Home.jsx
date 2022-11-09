import React from "react";
import { CardProduct } from "../components/CardProduct";
import Header from "../components/Header";
import cctvImg from "../img/cctv/paket16camera.jpg";
import laptopImg from "../img/laptop/laptop.png";
import printerImg from "../img/printer/printer.png";

export const Home = () => {
  return (
    <div>
      <div className="bg-[url('../img/jumbotronHome.png')] bg-center  relative pb-3 sm:pb-10 md:pb-16">
        <div className="absolute w-full h-full opacity-75 bg-biruJita"></div>
        <Header />
        <div className="relative my-10 text-xl text-center md:my-14 lg:my-20 xl:my-24 sm:text-3xl md:text-4xl xl:text-5xl ">
          <p className="font-bold text-white ">
            Jita Com{" "}
            <span className="text-3xl font-bold md:text-5xl font-roboto">
              &rarr;
            </span>{" "}
            Solusi kebutuhan{" "}
          </p>
          <p className="mt-2 font-bold text-white font-roboto">
            Informatika & Teknologi
          </p>
        </div>
      </div>

      <div className="px-3 mt-5 sm:px-10 md:px-28 lg:px-36 xl:px-52">
        <h1 className="py-3 mb-4 text-2xl font-bold text-center border-b-2 lg:text-4xl border-biruJita text-orangeJita font-poppins">
          Tentang Kami
        </h1>
        <p className="text-base sm:text-lg font-roboto text-biruJita">
          PT. JITA ILHAM BERKARYA adalah workshop resmi yang bergerak di bidang
          informatika dan teknologi dengan Nomor : AHU-037610.AH.01.30.Tahun
          2022. Workshop ini berfokus di bidang IT, Perakitan Komputer, Printer,
          CCTV, Laptop, Finger Print, jaringan Internet dan Service.
        </p>
        <p className="mt-2 text-base sm:text-lg font-roboto text-biruJita">
          Company profile ini di buat sebagai dasar pertimbangan, penawaran,
          kerja sama dan informasi produk yang dapat di kerjakan oleh workshop
          kami dan sudah memiliki banyak pengalaman di bidang informatika dan
          teknologi.
        </p>
      </div>

      <div className="px-5 mt-3 sm:px-20 md:px-40 lg:px-56 xl:px-72">
        <h2 className="py-3 text-xl font-bold text-center text-orangeJita">
          Visi
        </h2>
        <p className="text-base text-center text-biruJita sm:text-lg">
          Menjadi penyedia barang dan jasa produk teknologi yang berkualitas dan
          terpercaya.
        </p>

        <h2 className="py-3 text-xl font-bold text-center text-orangeJita">
          Misi
        </h2>
        <ul className="px-3 text-base list-disc text-biruJita sm:text-lg">
          <li>
            Memberikan layanan komunikasi dan solusi terkait barang IT secara
            detail dan terpercaya.
          </li>
          <li>
            Menjalin kerjasama dengan instansi juga user untuk lebih maju
            menganal dan mengoprasikan perangkat IT yang uptodate.
          </li>
          <li>
            Bertanggung jawab atas semua pekerjaan yang di percayakan oleh mitra
            dan customer.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-orangeJita font-poppins">
          Produk Kami
        </h2>
        <p className="my-3 text-xl text-center text-biruJita ">
          Perangkat dijamin <b>Original</b> dan <b>Bergaransi</b>
        </p>
        <div className="flex flex-wrap justify-center gap-8 py-20 bg-putihJita ">
          <CardProduct
            img={cctvImg}
            product={"cctv"}
            desc={"Menyediakan  paket pemasangan CCTV"}
          />

          <CardProduct
            img={laptopImg}
            product={"laptop"}
            desc={"Menjual berbagai brand laptop berkualitas"}
          />

          <CardProduct
            img={printerImg}
            product={"printer"}
            desc={"Menjual berbagai brand printer berkualitas"}
          />
        </div>
      </div>
    </div>
  );
};

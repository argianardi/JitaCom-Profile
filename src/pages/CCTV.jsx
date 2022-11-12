import React, { useState } from "react";

import cctvInhp from "../img/cctv/cctv-in-hp.png";
import dahuaPaket2 from "../img/cctv/dahuaPaket2.jpg";
import dahuaPaket4 from "../img/cctv/dahuaPaket4.jpg";
import dahuaPaket6 from "../img/cctv/dahuaPaket6.jpg";
import dahuaPaket8 from "../img/cctv/dahuaPaket8.jpg";
import dahuaPaket16 from "../img/cctv/dahuaPaket16.jpg";

import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { CardCCTV } from "../components/CardCCTV";

export const CCTV = () => {
  const [dataCCTV] = useState([
    {
      title: "DAHUA IR 2 2MP",
      fullTitle: "DAHUA PAKETAN 2 CAMERA 2MP IR DVR 4/8 CH",
      camIndoor: "2 Camera Indoor",
      camOutdoor: null,
      dvr: "DVR 4 Chanel",
      psu: "Power Suplay 10 A",
      rg59: "Kabel 100M",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 500GB (Perekaman 1 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 2500000,
      harga8CH: 2900000,
      img: dahuaPaket2,
    },
    {
      title: "DAHUA IR 4 2MP",
      fullTitle: "DAHUA PAKETAN 4 CAMERA 2MP IR DVR 4/8 CH",
      camIndoor: "2 Camera Indoor",
      camOutdoor: "2 Camera Outdoor",
      dvr: "DVR 4 Chanel",
      psu: "Power Suplay 10 A",
      rg59: "Kabel 100M",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 1TB (Perekaman 1 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 3800000,
      harga8CH: 4150000,
      img: dahuaPaket4,
    },
    {
      title: "DAHUA IR 6 2MP",
      fullTitle: "DAHUA PAKETAN 6 CAMERA 2MP IR DVR 4/8 CH",
      camIndoor: "4 Camera Indoor",
      camOutdoor: "2 Camera Outdoor",
      dvr: "DVR 8 Chanel",
      psu: "Power Suplay 20 A",
      rg59: "Kabel 100M",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 1TB (Perekaman 1 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 0,
      harga8CH: 5235000,
      img: dahuaPaket6,
    },
    {
      title: "DAHUA IR 8 2MP",
      fullTitle: "DAHUA PAKETAN 8 CAMERA 2MP IR DVR 8 CH",
      camIndoor: "4 Camera Indoor",
      camOutdoor: "4 Camera Outdoor",
      dvr: "DVR 8 Chanel",
      psu: "Power Suplay 20 A",
      rg59: "Kabel 1 Roll",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 1TB (Perekaman 1/2 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 0,
      harga8CH: 6750000,
      img: dahuaPaket8,
    },
    {
      title: "DAHUA IR 16 2MP",
      fullTitle: "DAHUA PAKETAN 16 CAMERA 2MP IR DVR 16 CH",
      camIndoor: "8 Camera Indoor",
      camOutdoor: "8 Camera Outdoor",
      dvr: "DVR 16 Chanel",
      psu: "Power Suplay 30 A",
      rg59: "Kabel 2 Roll",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 2TB",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 0,
      harga8CH: 15400000,
      img: dahuaPaket16,
    },
    {
      title: "DAHUA IR 4 2MP Color Full",
      fullTitle: "DAHUA PAKETAN 4 CAMERA 2MP COLOR FULL IR DVR 4/8 CH",
      camIndoor: "2 Camera Indoor Gelap Tetap Berwarna",
      camOutdoor: "2 Camera Outdoor Gelap Tetap Berwarna",
      dvr: "DVR 8 Chanel",
      psu: "Power Suplay 10 A",
      rg59: "Kabel 100M",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 1TB (Perekaman 1 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 5300000,
      harga8CH: 5680000,
      img: dahuaPaket4,
    },
    {
      title: "DAHUA IR 6 2MP Color Full",
      fullTitle: "DAHUA PAKETAN 6 CAMERA 2MP COLOR FULL IR DVR 8 CH",
      camIndoor: "4 Camera Indoor Gelap Tetap Berwarna",
      camOutdoor: "2 Camera Outdoor Gelap Tetap Berwarna",
      dvr: "DVR 8 Chanel",
      psu: "Power Suplay 20 A",
      rg59: "Kabel 1 Roll",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 1TB (Perekaman 1 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 0,
      harga8CH: 7300000,
      img: dahuaPaket6,
    },
    {
      title: "DAHUA IR 8 2MP Color Full",
      fullTitle: "DAHUA PAKETAN 8 CAMERA 2MP COLOR FULL IR DVR 8 CH",
      camIndoor: "4 Camera Indoor Gelap Tetap Berwarna",
      camOutdoor: "4 Camera Outdoor Gelap Tetap Berwarna",
      dvr: "DVR 8 Chanel",
      psu: "Power Suplay 20 A",
      rg59: "Kabel 1 Roll",
      conector: "BNC CCTV",
      powerCamera: "DC CCTV",
      hdd: "HDD 1TB (Perekaman 1/2 Bulan)",
      kabelDisplay: "Kabel HDMI/VGA 1,5M",
      jasa: "Jasa Instalasi & Configurasi",
      harga4CH: 0,
      harga8CH: 9800000,
      img: dahuaPaket4,
    },
  ]);

  return (
    <div>
      <div className="bg-[url('../img/jumbotronCctv.png')] relative  bg-center  ">
        <div className="absolute w-full h-full opacity-75 bg-biruJita"></div>
        <Header />
        <div className="relative flex items-center justify-between px-1 mt-10 mb-0 text-xl lg:mt-20 2sm:px-10 md:px-20 2sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl md:-mb-2 ">
          <p className="font-bold text-white ">
            Dengan satu sentuhan terpantau di genggaman
          </p>
          <img
            src={cctvInhp}
            alt="gambar cctv di dalam hp"
            className="h-32 -mb-5 md:h-48 lg:h-64 2xl:h-72"
          />
        </div>
      </div>

      <div>
        <p className="bg-[#d9d9d9] inline-block p-2 rounded-b-xl text-biruJita font-bold md:text-xl md:p-3">
          Harga kompetitif dan berkualitas
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-5 text-3xl font-bold text-center font-roboto text-biruJita">
          Paket CCTV
        </h2>
        <div className="w-[300px] 2sm:w-[600px] lg:w-[900px] mx-auto">
          <div className="flex flex-wrap gap-5">
            {dataCCTV.map((item, index) => (
              <CardCCTV
                key={index}
                img={item.img}
                title={item.title}
                harga4ch={item.harga4CH}
                harga8ch={item.harga8CH}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

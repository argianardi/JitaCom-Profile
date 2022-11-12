import React, { useEffect, useState } from "react";
// import { Jumbotron } from "../components/Jumbotron";
import cctvInhp from "../img/cctv/cctv-in-hp.png";
import dahuaPaket2 from "../img/cctv/dahuaPaket2.jpg";
import dahuaPaket4 from "../img/cctv/dahuaPaket4.jpg";
import dahuaPaket6 from "../img/cctv/dahuaPaket6.jpg";
import dahuaPaket8 from "../img/cctv/dahuaPaket8.jpg";
import dahuaPaket16 from "../img/cctv/dahuaPaket16.jpg";

import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { DataCCTV } from "../data/DataCCTV";

export const CCTV = () => {
  const [dataCCTV, setDataCCTV] = useState([
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
      img: dahuaPaket2,
    },
  ]);
  // useEffect(() => {
  //   setDataCCTV(DataCCTV);
  // }, []);
  console.log(dataCCTV);
  console.log(dataCCTV[0].img);
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

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center font-roboto text-biruJita">
          Paket CCTV
        </h2>
        <img src={dataCCTV[0].img} alt="" />
      </div>

      <Footer />
    </div>
  );
};

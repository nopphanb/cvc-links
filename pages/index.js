import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
    <NextSeo
      title="COVID-19 Vaccine"
    />
    <div className="flex flex-col align-middle justify-center items-center w-full h-screen container">
      <h1 className="font-head text-xl font-semibold">ลงทะเบียนวัคซีน COVID บางซื่อ</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
        <a className="block text-center p-12 bg-white shadow-md hover:shadow-xl rounded-md transition-all" href="https://vaccine.trueid.net/">
          <Image
          src="/../public/true.png"
          width={120}
          height={55}
          />
          <p>True</p>
        </a>
        <a className="block text-center p-12 bg-white shadow-md hover:shadow-xl rounded-md transition-all" href="https://vaccineforthais.ais.th/Reserve/Login">
        <Image
          src="/../public/ais_logo.webp"
          width={95}
          height={49}
          />
          <p>AIS</p>
        </a>
        <a className="block text-center p-12 bg-white shadow-md hover:shadow-xl rounded-md transition-all" href="https://app.dtac.co.th/vaccine/index.html">
        <Image
          src="/../public/dtac.png"
          width={100}
          height={50}
          />
          <p>dtac</p>
        </a>
        <a className="block text-center p-12 bg-white shadow-md hover:shadow-xl rounded-md transition-all" href="https://covid19vaccine.ntplc.co.th/CVC/info">
        <Image
          src="/../public/nt.png"
          width={71}
          height={50}
          />
          <p>NT</p>
        </a>
      </div>
    </div>
    </>
  )
}

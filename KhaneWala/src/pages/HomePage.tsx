import AppDownload from "../assets/appDownload.png";
import Landing from "../assets/landing.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-transparent rounded-lg shadow-md py-8 flex flex-col gap-5 text-center ">
        <h1 className="font-bold text-black text-5xl">
          Don't think, Just Order kuch KhaneWala !
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          <img src={Landing} alt="" />

          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-2xl">
              Now, Kill you cravings Fast !!
            </span>
            <span className="font-semibold">
              Download the KhaneWala App for faster ordering and personalised
              recommendations
            </span>
            <img src={AppDownload} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

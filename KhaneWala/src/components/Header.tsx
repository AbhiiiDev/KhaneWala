import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import HeroSection from "@/components/HeroSection";

type Props={
showHero:boolean;
}

const Header = ({showHero}:Props) => {


  return (
    <>
      <div className="relative">
     {  showHero && <div className="absolute inset-0 z-0">
          <HeroSection />
        </div>}
        <div className="fixed top-3 left-2 right-2 z-30">
          <div className="bg-[#D6D6D6] bg-opacity-5 backdrop-filter backdrop-blur-lg z-20 py-4 rounded-full">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
              <Link
                to="/"
                className="text-3xl font-bold tracking-tight text-black"
              >
                KhaneWala.com
              </Link>

              <div className="md:hidden">
                <MobileNav />
              </div>
              <div className="hidden md:block">
                <MainNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

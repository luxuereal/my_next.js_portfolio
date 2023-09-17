import Navigator from "./navigator";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-24 fixed top-0 left-0 drop-shadow-md backdrop-blur-md bg-white/3 backdrop-brightness-150 flex justify-end items-center">
      <div className="w-full flex justify-between items-center"> 
        <div className="pl-48 flex items-center">
          <div className="w-18 h-18">
            <Image width="72" height="72" src="/assets/symbol.png" alt="logo" />
          </div>
          <span className="pl-4 text-slate-300 italic text-4xl font-yatra">V. S.</span>
        </div>
        <Navigator />
      </div>
    </header>
  ) 
}

export default Header;
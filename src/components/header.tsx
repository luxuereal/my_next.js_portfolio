import Navigator from "./navigator";

const Header = () => {
  return (
    <header className="w-full h-20 fixed top-0 left-0 border border-b-2 border-black backdrop-blur-sm bg-white/4 flex justify-end items-center">
      <Navigator />
    </header>
  ) 
}

export default Header;
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="pt-24 col-span-2 w-full flex flex-col justify-items-center">
        <div className="flex items-center mx-auto">
          <Image
            width="180"
            height="180"
            alt="avatar"
            src="/assets/vs_avatar.png"
            className=""
          />
          <div className="h-36 border-l-2 border-l-white w-6 ml-12"></div>
          <div className="ml-6 tracking-wider animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
            <p className="font-yatra italic font-bold text-4xl">Hi, there</p>
            <p className="mt-8 font-yatra italic text-4xl">I'm  <span className="font-bold text-5xl">Viktor Splavnyk</span></p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          width="400"
          height="400"
          alt="logo"
          src="/assets/symbol.png"
          className="opacity-10 absolute right-[calc(50%-200px)] top-[20%]"
        />
      </div>
    </div>
  )
}

export default Home;
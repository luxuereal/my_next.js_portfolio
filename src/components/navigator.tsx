import Link from "next/link";

const Navigator = () => {
  return (
    <div className="pr-24">
      <Link href="/home"><span className="px-6 py-2 text-xl text-white/70 font-sans">Home</span></Link>
      <Link href="/about"><span className="px-6 py-2 text-xl text-white/70 font-sans">About</span></Link>
      <Link href="/experience"><span className="px-6 py-2 text-xl text-white/70 font-sans">Experience</span></Link>
      <Link href="/projects"><span className="px-6 py-2 text-xl text-white/70 font-sans">Projects</span></Link>
      <Link href="/contact"><span className="px-6 py-2 text-xl text-white/70 font-sans">Contact</span></Link>
    </div>
  )
}

export default Navigator;
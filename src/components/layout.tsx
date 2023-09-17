import Background from "@/components/background";
import Header from "@/components/header";
import { Yatra_One, Courgette } from "next/font/google"

const yatra = Yatra_One({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-yatra',
  display: 'swap'
});

const courgette = Courgette({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-courgette',
  display: 'swap'
})

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={`w-full h-[100vh] ${yatra.variable} ${courgette.variable}`} >
      <Background />
      <Header />
      <div className="absolute top-20 left-0 w-full h-full">
        {children}
      </div>
    </div>
  )
}

export default Layout;
import Background from "@/components/background";
import Header from "@/components/header";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-full h-[100vh]">
      <Background />
      <Header />
      <div className="absolute top-20 left-0 w-full h-full">
        {children}
      </div>
    </div>
  )
}

export default Layout;
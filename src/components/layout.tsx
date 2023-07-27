import Background from "@/components/background";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-full h-[100vh]">
      <Background />
      {children}
    </div>
  )
}

export default Layout;
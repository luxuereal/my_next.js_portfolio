import Background from "@/components/background";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Background />
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
          <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>Viktor Splavnyk</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;


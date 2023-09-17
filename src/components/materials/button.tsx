const Button = ({name}: {name: string}) => {
  return (
    <div className="relative !w-28 before:absolute before:bg-[rgba(255,255,255,0.1)] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.15] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 text-[1.2rem] text-white/70 font-courgette text-center">
      <span className="relative">{name}</span>
    </div>
  )
}

export default Button;
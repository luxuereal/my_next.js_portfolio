import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Button from "./materials/button";

const Navigator = () => {

  const router = useRouter();
  

  return (
    <div className="pr-24 flex gap-4">
      <Link href="/home"><Button name='Home' /></Link>
      <Link href="/about"><Button name='About' /></Link>
      <Link href="/experience"><Button name='Experience' /></Link>
      <Link href="/projects"><Button name='Projects' /></Link>
      <Link href="/contact"><Button name='Contact' /></Link>
    </div>
  )
}

export default Navigator;
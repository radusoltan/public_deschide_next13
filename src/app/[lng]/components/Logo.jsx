import logo from './../../../../public/logo.png'
import Image from "next/image";
import Link from "next/link";
export const Logo = ({lng}) => {

  return <div className="mr-10">
    <Link href={`/${lng}`}>
      <Image src={logo} alt="deschide.md" width={150} />
    </Link>
  </div>
}
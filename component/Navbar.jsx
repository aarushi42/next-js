import Link from "next/link";
import Image from "next/image"

export default function Navbar (){
  return <header>
    <div>
      <nav className="flex justify-between px-4 py-2 bg-black text-white items-center text-md font-bold">
        <div>
          <Image src="/RB-Melody-Logo.png" alt="logo" width={40} height={10}></Image>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/service">
              Service
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
}
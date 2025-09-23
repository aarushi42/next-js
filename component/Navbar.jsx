import Link from "next/link";
import Image from "next/image"

export default function Navbar (){
  return <header>
    <div>
      <nav className="flex justify-between px-4 py-2 bg-slate-700 text-white items-center text-md font-bold w-full h-auto">
        <div>
          <Image src="/RB-Melody-Logo.png" alt="logo" width={30} height={10}></Image>
        </div>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About us
            </Link>
          </li>
          <li>
            <Link href="/service">
              Services
            </Link>
          </li>
          <li>
            <Link href="/">
              Notice
            </Link>
          </li>
          <li>
            <Link href="/">
              Our Songs
            </Link>
          </li>
          <li>
            <Link href="/">
              Testimonial
            </Link>
          </li>
          <li>
            <Link href="/">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/">
              Studio Gallery
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
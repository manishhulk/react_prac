import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
      <div className="logo mx-5 ">
        <Link href={"/"}>
          <a>
            <Image src="/logo.png" alt="" width={200} height={40} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold">
          <Link href={"/tshirts"}><a><li>Tshirts</li></a></Link>
          <Link href={"/"}><a><li>Hoodies</li></a></Link>
          <Link href={"/"}><a><li>Stickers</li></a></Link>
          <Link href={"/"}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart">
        <button><AiOutlineShoppingCart className="text-3xl" /></button>
      </div>
    </div>
  )
}

export default Navbar
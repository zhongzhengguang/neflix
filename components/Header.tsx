import Image from "next/image";
import Logo from "../public/logo.svg";
import account from "../public/account.png";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const { signIn, signUp, logout } = useAuth();
  // 下拉後變換背景顏色
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScroll && " bg-[#141414]"}`}>
      {/* left side */}
      <div className=" flex items-center space-x-2 md:space-x-10">
        <Image
          width={100}
          height={100}
          src={Logo}
          alt="/"
          className=" cursor-pointer object-contain"
        />
        <ul className=" hidden space-x-4 md:flex">
          <li className=" headerLink">Home</li>
          <li className=" headerLink">Tv</li>
          <li className=" headerLink">Movies</li>
          <li className=" headerLink">New & Popular</li>
          <li className=" headerLink">My list</li>
        </ul>
      </div>
      {/* right side */}
      <div className=" flex items-center space-x-4 text-sm font-light">
        <AiOutlineSearch className="hidden sm:inline h-6 w-6" />
        <p className=" hidden lg:inline">Kids</p>
        <AiFillBell className=" h-6 w-6" />
        <Link href="/account">
          <Image onClick={logout} src={account} alt="/" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

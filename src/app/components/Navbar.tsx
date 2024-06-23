
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";
import logo from '/public/logo.png';

function NavBar() {

  return (
    <nav className="fixed top-0 w-full flex item-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex, item-center"
      >
        <Image src={logo} alt="Logo" width={110}/>
        Mobile Representações
      </Link>
      <div className="flex items-center gap-8">
        <Cart />
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border rounded-md border-gray-400 px-3 py-2">
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

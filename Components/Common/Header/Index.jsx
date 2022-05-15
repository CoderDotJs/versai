import React from "react";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <header className="w-full container mx-auto flex justify-between items-center">
      <div className="">
        <Image
          src="https://i.postimg.cc/3N9ys718/logo.png"
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      <div className="flex w-4/12 justify-between items-center">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
          <Link href="/">Search</Link>
        </span>
        <span>
          <Link href="/help">Help</Link>
        </span>
        <span>
          <Link href="/account">Account</Link>
        </span>
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
      </div>
    </header>
  );
};

export default Index;

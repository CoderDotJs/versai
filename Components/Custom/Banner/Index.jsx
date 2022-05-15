import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../../Common/Header/Index";
import Image from "next/image";
import Link from "next/link";
import Progress from "../Progress/Index";

const Index = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="banner__wrapper relative h-screen px-5">
      <header className="w-full container mx-auto flex justify-between items-center">
        <div className="">
          <Image
            src="https://i.postimg.cc/3N9ys718/logo.png"
            alt="logo"
            width={100}
            height={50}
          />
        </div>
        {screenWidth > 768 && (
          <div className="flex w-4/12 justify-around items-center">
            <span className="text-white">
              <i className="fa-solid fa-magnifying-glass mr-2 text-sm"></i>
              <Link href="/">Search</Link>
            </span>
            <span className="text-white">
              <Link href="/help">Help</Link>
            </span>
            <span className="text-white">
              <Link href="/account">Account</Link>
            </span>
            <span className="text-white">
              <Link href="/">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </span>
          </div>
        )}
        {screenWidth <= 768 && (
          <div>
            <span className="text-white mx-2">
              <i className="fa-solid fa-magnifying-glass text-sm"></i>
            </span>
            <span className="text-white mx-2">
              <Link href="/">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </span>
            <span className="text-white mx-3">
              <i
                className="fa-solid fa-bars"
                onClick={() => setIsOpen(!isOpen)}
              ></i>
            </span>
          </div>
        )}
        {/* <Burger
          className="burger-menu"
          isOpen={isOpen}
          selectedKey={"entry"}
          onClose={() => setIsOpen(false)}
        >
          <Item itemKey={"manage"} text={"User Management"}></Item>
          <Item itemKey={"user"} text={"User Center"}></Item>
          <SubMenu title="Union Management">
            <Item itemKey={"notice"} text={"Announcement"}></Item>
            <Item itemKey={"union"} text={"Union Inquiries"}></Item>
            <Item itemKey={"entry"} text={"Entry information"}></Item>
          </SubMenu>
        </Burger> */}
        {isOpen && (
          <div className="w-full h-full transition-all ">
            <div
              className="w-screen h-screen z-40 backdrop-blur-lg absolute top-0 left-0 transition-all duration-500 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            ></div>
            <div className="w-8/12 sm:w-7/12 md:6/12 h-screen z-50 bg-gray-900 absolute left-0 top-0 p-5 transition-all ">
              <div className="flex justify-end items-center ">
                <i
                  className="fa-solid fa-xmark text-white"
                  onClick={() => setIsOpen(!isOpen)}
                ></i>
              </div>
              <div className="flex w-full justify-center items-center flex-col mt-5">
                <span className="text-white my-3">
                  <i className="fa-solid fa-magnifying-glass mr-2 text-sm"></i>
                  <Link href="/">Search</Link>
                </span>
                <span className="text-white my-3">
                  <Link href="/help">Help</Link>
                </span>
                <span className="text-white my-3">
                  <Link href="/account">Account</Link>
                </span>
                <span className="text-white my-3">
                  <Link href="/">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
      <div
        className={`container mx-auto w-full h-full flex flex-col justify-evenly items-start progresses__wrapper`}
      >
        <div className="banner__text">
          <h1 className="text-white text-6xl  md:text-8xl">Cari Cari</h1>
          <p className="text-gray-400 text-base md:text-xl w-8/12 font-normal mt-5">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
        <div className="flex justify-between items-center w-full overflow-x-scroll overflow-y-hidden ">
          <Progress
            value={80}
            bg={"#0A0B1A"}
            borderColor="rgb(75, 85, 99)"
            progressColor="rgb(236, 72, 153)"
            size={14}
          >
            <div className="flex flex-col justify-between items-center bg-gray bg-gray text-white">
              <i className="fa-regular fa-heart text-gray-400 text-3xl"></i>
              <p className="text-3xl">0</p>
              <p className="text-gray-600 text-xl">Likes</p>
            </div>
          </Progress>
          <Progress
            value={50}
            bg={"#0A0B1A"}
            borderColor="rgb(75, 85, 99)"
            progressColor="rgb(236, 72, 153)"
            size={14}
          >
            <div className="flex flex-col justify-between items-center bg-gray bg-gray text-white">
              <i className="fa-regular fa-heart text-gray-400 text-3xl"></i>
              <p className="text-3xl">0</p>
              <p className="text-gray-600 text-xl">Hot</p>
            </div>
          </Progress>
          <Progress
            value={90}
            bg={"#0A0B1A"}
            borderColor="rgb(75, 85, 99)"
            progressColor="rgb(236, 72, 153)"
            size={14}
          >
            <div className="flex flex-col justify-between items-center bg-gray bg-gray text-white">
              <i className="fa-regular fa-heart text-gray-400 text-3xl"></i>
              <p className="text-3xl">0</p>
              <p className="text-gray-600 text-xl">Movies</p>
            </div>
          </Progress>
          <Progress
            value={30}
            bg={"#0A0B1A"}
            borderColor="rgb(75, 85, 99)"
            progressColor="rgb(236, 72, 153)"
            size={14}
          >
            <div className="flex flex-col justify-between items-center bg-gray bg-gray text-white">
              <i className="fa-regular fa-heart text-gray-400 text-3xl"></i>
              <p className="text-3xl">0</p>
              <p className="text-gray-600 text-xl">Celebrities</p>
            </div>
          </Progress>
        </div>
      </div>
    </div>
  );
};

export default Index;

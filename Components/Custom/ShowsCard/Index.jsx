import React from "react";
import Image from "next/image";
import show1 from "../../../assets/images/shows/show_1.png";
import Link from "next/link";
import styles from "../../../styles/Showes.module.css";
import styledComponents from "styled-components";
import bookmark from "../../../assets/icons/bookmark.png";
import bookmarkHover from "../../../assets/icons/hoverBookmark.png";

const Card = styledComponents.div`
  width: 270px;
  height: 390px;
`;

const Index = () => {
  return (
    <div className="flex justify-center items-center w-full mx-3 lg:mx-3">
      <Card
        className={`my-5 sm:my-0 rounded-2xl shadow-lg ${styles.card__shows}`}
      >
        <div className={styles.bg}></div>
        <div className={styles.card__body}>
          <div className="rounded-2xl">
            <Image
              src={show1}
              layout="responsive"
              width={265}
              height={230}
              alt="show1"
              className="w-full max-h-56 rounded-2xl"
            />
          </div>
          <div className="px-8">
            <p className="px-3 py-1 text-sm inline-block mt-5 mb-3 text-gray-800 bg-yellow__bg rounded-sm">
              Folk
            </p>
            <h3 className="text-3xl text-white">Benny Dayal</h3>
            <div className="flex justify-between items-center my-3">
              <span className="text-blue-700 text-xl flex justify-between items-center">
                <Link href="/">More Info</Link>
                <i className="fa-solid fa-arrow-right-long ml-5"></i>
              </span>
              <button className="border-l-2 pl-2 border-l-slate-700 flex justify-center items-center">
                {/* <i className="fa-solid fa-bookmark text-pink-600"></i> */}
                <div className={styles.bookmark}></div>
                {/* <Image src={bookmark} alt={"bookmark"} width={32} height={32} />
                <Image
                  src={bookmarkHover}
                  alt={"bookmark"}
                  width={32}
                  height={32}
                /> */}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;

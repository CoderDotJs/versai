import React from "react";
import Link from "next/link";
import styles from "../../../styles/Reviews.module.css";
import styledComponents from "styled-components";
import Image from "next/image";
import show1 from "../../../assets/images/shows/show_1.png";
import { createGlobalStyle } from "styled-components";

const Card = styledComponents.div`
  width: 360px;
  height: 250px;
`;

const Index = ({ review }) => {
  console.log("df");
  return (
    <div className="flex justify-center items-center w-full mx-3 lg:mx-3">
      <Card
        className={`my-5 sm:my-0 rounded-2xl shadow-lg ${styles.card__reviews} `}
      >
        <div className={styles.bg}></div>
        <div
          className={`border-yellow__bg border-2 px-6 py-9 w-full h-full flex flex-col justify-between items-start ${styles.card__body}`}
        >
          <div className="rounded-2xl  flex justify-start items-center">
            <div className="mr-5">
              {/* <Image
                src={review.img}
                width={48}
                height={48}
                alt="show1"
                className="rounded-full w-12 h-12"
              /> */}
            </div>
            <div>
              <h5 className="text-white">{review.name}</h5>
              <p className="text-yellow__bg text-sm">{review.country}</p>
            </div>
          </div>
          <div className="text-slate-300">
            <p>{review.text.slice(0, 135)}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;

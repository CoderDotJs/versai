import React, { useState, useEffect } from "react";
import styledComponents from "styled-components";
import Link from "next/link";
import ReviewCard from "../ReviewCard/Index";

const Title = styledComponents.h2`&:after {
        content: "";
        width: 40px;
        height: 3px;
        background: blue;
        margin: 5px 0 0 0 ;
        display: block;
        border-radius: 10px;
    }`;
const Span = styledComponents.span`
    color: #E5C558;
    `;

const Index = ({ reviews }) => {
  const [counter, setCounter] = useState(1);
  const [screenWidth, setScreenWidth] = useState(0);
  console.log(screenWidth);

  const forward = () => {
    const state = counter + 1;
    if (state > reviews.length) {
      setCounter(1);
      console.log(counter);
    } else {
      setCounter(state);
      console.log(counter);
    }
  };
  const backward = () => {
    const state = counter - 1;
    if (state <= 0) {
      setCounter(reviews.length);
      console.log(counter);
    } else {
      setCounter(state);
      console.log(counter);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-16 px-4 md:px-0">
        <Title className="text-left text-4xl text-white">Reviews</Title>
        <p className="text-md text-right text-slate-400">
          {screenWidth >= 768 && (
            <>
              <span className="text-slate-300">{counter}</span>/
              <span className="text-slate-400">{reviews?.length || 0}</span>
              <span>
                <i
                  className="fa-solid fa-arrow-left-long ml-5 text-slate-400 cursor-pointer"
                  onClick={() => backward()}
                ></i>
                <i
                  className="fa-solid fa-arrow-right-long ml-5 text-slate-400 cursor-pointer"
                  onClick={() => forward()}
                ></i>
              </span>
            </>
          )}
        </p>
      </div>
      <div className="flex justify-between items-center py-10 overflow-x-scroll overflow-y-hidden ">
        {screenWidth >= 769 &&
          reviews.slice(counter - 1, counter + 3).map((review) => {
            return (
              <ReviewCard key={review.name + Math.random(5)} review={review} />
            );
          })}
        {screenWidth <= 768 &&
          reviews.map((review) => {
            return (
              <ReviewCard key={review.name + Math.random(5)} review={review} />
            );
          })}
      </div>
    </div>
  );
};

export default Index;

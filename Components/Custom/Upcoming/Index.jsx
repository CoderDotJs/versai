import React from "react";
import styledComponents from "styled-components";
import Link from "next/link";
import ShowCard from "../ShowsCard/Index";

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

const Index = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-16 px-4 md:px-0">
        <Title className="text-left text-4xl text-white">Upcomming Shows</Title>
        <Span className="text-md text-right text-yellow__bg">
          <Link href="/view-all">View All</Link>
        </Span>
      </div>
      <div className="flex justify-between items-center py-10 overflow-x-scroll overflow-y-hidden ">
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </div>
    </div>
  );
};

export default Index;

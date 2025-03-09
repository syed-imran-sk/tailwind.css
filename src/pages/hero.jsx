import React from "react";
import Lap from "..//assets/proud.png";
import Web from "../assets/web.png";
import Java from "../assets/java.png";
import Dev from "../assets/dev.png";

const home = () => {
  return (
    <>
      <div className="container mx-auto mt-12 flex">
        <div className="w-1/2 text-center">
          <p className="mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-6 font-medium">
            Get Strated
          </button>
        </div>

        <div className="w-1/2">
          <img className="mx-auto w-90" src={Lap} alt="" />
        </div>
      </div>

      {/* main section */}
      <div className="flex">

        <div>
          <h1>Full Stack Web Development</h1>
          <img src={Web} alt="" className="w-90"/>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            
          </p>
        </div>


        <div>
        <h1>Full Stack Python Development</h1>
          <img src={Dev} alt="" className="w-90"/>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in 
          </p>
        </div>


        <div>
        <h1>Full Stack Java Development</h1>
          <img src={Java} alt="" className="w-90"/>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
          </p>
        </div>

      </div>
    </>
  );
};

export default home;

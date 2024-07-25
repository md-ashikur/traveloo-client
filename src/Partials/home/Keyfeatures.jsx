import React from "react";
import { HiMiniTicket } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import feature1 from "../../assets/images/New folder/feature1.jpg";
import feature2 from "../../assets/images/New folder/feature2.jpg";
import bgdesign from "../../assets/images/BACKGROUND.png";
import { SiGooglemaps } from "react-icons/si";
const Keyfeatures = () => {
  return (
    <section className="lg:px-28 px-5 pt-28 pb-28 lg:pb-0 relative grid lg:grid-cols-2">
      <div className="lg:px-5 ">
        <h4 className="text-primary">Key features</h4>
        <h2 className="my-4">We offer best services</h2>
        <p className="my-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className="my-10">
          <div className="key-div grid grid-cols-4 gap-5 items-center hover:border-inherit hover:border border border-base p-5 rounded-3xl">
            <div className="key-icon lg:w-20 lg:h-20 w-16 h-16 bg-tertiary rounded-3xl flex justify-center items-center text-base">
              <TiLocation className="w-10 h-10" />
            </div>
            <div className="col-span-3">
              <h5>We offer best services</h5>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </div>

          {/* 2nd -------------- */}
          <div className="key-div grid grid-cols-4 gap-5 items-center hover:border-inherit hover:border border border-base p-5 rounded-3xl my-5">
            <div className="key-icon lg:w-20 lg:h-20 w-16 h-16 bg-[#FACD49] rounded-3xl flex justify-center items-center text-base">
              <IoCalendar className="w-10 h-10" />
            </div>
            <div className="col-span-3">
              <h5>We offer best services</h5>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </div>

          {/* 3rd----------- */}
          <div className="key-div grid grid-cols-4 gap-5 items-center hover:border-inherit hover:border border border-base p-5 rounded-3xl">
            <div className="key-icon lg:w-20 lg:h-20 w-16 h-16 bg-primary rounded-3xl flex justify-center items-center text-base">
              <HiMiniTicket className="w-10 h-10" />
            </div>
            <div className="col-span-3">
              <h5>We offer best services</h5>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </div>
        </div>
      </div>

      {/* right side----------- */}
      <div className="relative p-5">
        <img src={bgdesign} alt="" className="absolute lg:-top-16 -top-5 lg:-right-28 -z-20 " />

        <div className="lg:w-[400px] lg:h-[600px] w-64 h-96 rounded-full overflow-hidden">
          <img src={feature1} className="h-full w-auto" alt="" />
        </div>


        <h5 className="flex gap-2 items-center absolute lg:top-28 top-16 lg:right-20 right-0 bg-base px-5 py-2 rounded-full">
        <SiGooglemaps className="text-tertiary"/> Paradise on Earth
        </h5>


        <div className="lg:w-[350px] lg:h-[500px] w-40 h-52 rounded-full overflow-hidden lg:border-[24px] border-[14px] border-base absolute -bottom-16 left-52">
          <img src={feature2} className="h-full w-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Keyfeatures;

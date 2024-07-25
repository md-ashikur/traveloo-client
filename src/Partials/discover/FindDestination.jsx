import React from "react";
import { useForm } from "react-hook-form";
import SearchResult from "./SearchResult";

const FindDestination = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="">
      <div className="bg-[#f5f5f5] lg:p-20 p-5">
       <div className="text-center">
       <h3>Find Your Dream Destinations</h3>
        <p>These popular destinations have a lot to offer</p>
       </div>

        {/* search bar start------------------ */}
        <div className="lg:w-[85vw]  bg-base lg:h-20 mx-auto p-3 flex items-center rounded-lg my-8 overflow-hidden">
          {/* form-------------- */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-3">
            <div className="grid lg:grid-cols-8 py-4 lg:py-0">
              {/* ----------Location-------------- */}
              <div className="col-span-3 px-3">
                <h6 className="t">Location</h6>
                <input
                  placeholder="Where are you going?"
                  className="outline-none  mt-2 w-full "
                  {...register("location")}
                  
                />
                
              </div>

              {/* ---------Check in - Check out--------- */}
              <div className="col-span-2 lg:border-l-2 px-3 my-5 lg:my-0">
                <h6 className="">Check in - Check out</h6>
                <input
                  className="outline-none  my-2 "
                  type="date"
                  {...register("email", {
                    required: "Your Email Address is required",
                  })}
                />
              </div>

              {/* ---------Guest--------- */}
           <div className="col-span-3 grid lg:grid-cols-5 ">
           <div className="col-span-3 lg:border-l-2 px-3">
                <h6 className="">Guest</h6>
                
                <input
                placeholder="2 adults - 1 childeren"
                  className="outline-none mt-2 w-full "
                  type="text"
                  {...register("guest")}
                 
                />

              </div>

              <input
                type="submit"
                value="Search"
                className="lg:col-span-2 col-span-5 h-10 lg:h-[60px] mt-3 lg:mt-0 hover:scale-[0.95]  rounded transition duration-150 ease-in-out bg-secondary   text-base"
              />
           </div>
            </div>
          </form>
        </div>

        {/* search bar end------------------ */}
      </div>

      <SearchResult/>
    </section>
  );
};

export default FindDestination;

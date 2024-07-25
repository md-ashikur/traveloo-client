import React from "react";
import { useForm } from "react-hook-form";
import Graphic_Element from "../../assets/images/Graphic_Elements.png"
const Newsletter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" relative px-5 mt-28 lg:mt-0">
        <img src={Graphic_Element} alt="" className="absolute left-20 -top-10 lg:block hidden"/>
      <div className="flex flex-col justify-center items-center lg:mx-28 rounded-3xl bg-[#FACD49] bg-opacity-[9%] lg:py-28 py-10 lg:px-16 px-5">
        <div className="text-center lg:px-20">
          <h4 className="text-primary uppercase">
            subscribe to our newsletter
          </h4>
          <h2 className="my-6 text-black text-lg">
            Prepare yourself & let’s explore the beauty of the world
          </h2>
        </div>

        <div >
          <form onSubmit={handleSubmit(onSubmit)} className="flex lg:gap-5 ">
            <div>
            <input
            placeholder="Your Email"
            className="outline-none px-5 py-3 lg:w-[600px] w-full lg:h-[60px] rounded-2xl"
            type="email"
              {...register("mail", { required: "Your Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert" className="lg:px-5 text-red-500 text-xs my-3">{errors.mail.message}</p>}
            </div>
            <input type="submit" value="Subscribe" className="hover:scale-90 transition duration-150 ease-in-out bg-secondary lg:h-[60px] h-12 px-7 rounded-full text-base"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

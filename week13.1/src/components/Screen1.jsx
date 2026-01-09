import React from "react";

export const Screen1 = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-start items-center bg-blue-900 text-white">
      <div className="mt-28 flex items-center gap-3 text-3xl">
        <i className="fa-solid fa-computer"></i>
        <div className="font-normal">
          <span className="text-blue-300">Webinar</span>.gg
        </div>
      </div>
      <div className="font-medium text-3xl my-16">Verify Your Age</div>
      <div className="flex flex-col gap-3 items-center">
        <div className="text-[#e0ddd3c2]">
          Please confirm your birth year. this data will not be stored.
        </div>
        <input
          type="text"
          placeholder="Your Birth Year"
          className="bg-[#ffffff42] py-3 rounded-2xl w-2xs px-4"
        />
        <button className="bg-[#e0ddd3a1] py-3 w-2xs rounded-2xl my-4">
          Continue
        </button>
      </div>
    </div>
  );
};

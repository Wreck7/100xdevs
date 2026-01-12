import React from "react";

export const BasicProjectScreen = () => {
  return (
    <div className="flex">
      {/* <div className='bg-yellow-300 h-screen transition-all duration-700 w-0 md:w-64'>sidebar</div> */}
      {/* in here it only push content section towards sidebar, no sidebar movement. */}
      <div className="bg-yellow-300 h-screen transition-all duration-700 md:translate-x-0 -translate-x-64 w-0 md:w-64">
        sidebar
      </div>
      <div className="bg-red-300 w-full h-screen">content</div>
    </div>
  );
};

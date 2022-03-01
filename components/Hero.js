import React from "react";
import { CameraIcon, LinkIcon } from "@heroicons/react/outline";
function Hero({ data }) {
  return (
    <div className="relative mx-auto bg-[url('../public/images/SMOG_vdyw4.jpg')] bg-cover  z-10  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-gradient-to-t from-black">
      <div className="absolute sm:h-2/3 pb-2 bottom-0 lg:h-1/2 w-full text-left px-8 bg-gradient-to-t from-black">
        <div className="flex flex-row w-full space-x-2">
          <CameraIcon className=" text-white bg-[#00a5a5] h-10 p-2 sm:h-14 sm:p-3 rounded-sm" />
          <div className="flex flex-col">
            <p className="text-xl sm:text-5xl font-bold text-white">
              {data.hero_1_title}
            </p>
            <p className="text-sm mt-2 font-bold text-white">
              Article by : {data["article-info_1_byline"]}
            </p>
            <p className="text-sm md:text-md mt-2 font-bold  text-[#00a5a5]">
              {data["article-info_1_date"]}
            </p>
            <div className="flex-row flex space-x-2">
              <p className="text-md sm:text-lg mt-2 font-bold  text-white">
                {data["article-info_1_category"]}
              </p>
              <a href={data["article-info_1_category_url"]}>
                <LinkIcon className="text-white h-4 mt-4 hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

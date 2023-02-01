import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "@/typings";
import { baseUrl } from "@/constants/movie";
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      // 生成隨機數字
      // .random()：靜態方法返回一個大於或等於 0 且小於 1的Math.random()浮點偽隨機數
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div className=" flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end ">
      <div className=" absolute top-0 left-0 h-[95vh] w-screen z-[-10]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          style={{ objectFit: "cover" }}
          alt="/"
        />
      </div>
      <h1 className=" text-2xl lg:text-7xl md:text-4xl text-shadow-md">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className=" max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className=" flex space-x-3">
        <button className=" bannerButton bg-white text-black">
          <FaPlay className=" h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className=" bannerButton bg-[gray]/70">
          More Info
          <HiOutlineInformationCircle className=" h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;

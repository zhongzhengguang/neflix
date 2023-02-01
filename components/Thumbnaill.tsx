import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";
interface Props {
  // 等等用firebase的時候
  // movie: Movie | DocumentData;
  movie: Movie;
}
function Thumbnaill({ movie }: Props) {
  return (
    <div className=" relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        fill
        src={` https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className=" rounded-sm object-cover md:rounded"
        alt="/"
      />
    </div>
  );
}

export default Thumbnaill;

import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
interface Props {
  // 等等用firebase的時候
  // movie: Movie | DocumentData;
  movie: Movie;
}
function Thumbnaill({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className=" relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        fill
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        className=" rounded-sm object-cover md:rounded"
        alt="/"
        sizes="(min-width: 60em) 24vw,
        (min-width: 28em) 45vw,
        100vw"
      />
    </div>
  );
}

export default Thumbnaill;

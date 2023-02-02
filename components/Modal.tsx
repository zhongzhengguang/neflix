import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { BsFillVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Movie, Element, Genre } from "../typings";
import ReactPlayer from "react-player/lazy";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!movie) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    // !是為了覆蓋metiral Ui
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className=" fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-3xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className=" modalButton absolute right-5 top-5 !z-40 border-none bg-[#181818]"
        >
          <AiOutlineClose className=" h-6 w-6" />
        </button>
        <div className=" relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className=" absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className=" flex space-x-2">
              <button className=" flex items-center gap-x-2 rounded bg-white text-black px-8 text-xl font-bold transition hover:bg-[#e6e6e6]">
                <FaPlay className=" h-7 w-7 " />
                Play
              </button>
              <button className="modalButton">
                <AiOutlinePlus className=" h-7 w-7" />
              </button>
              <button className="modalButton">
                <FiThumbsUp className=" h-7 w-7" />
              </button>
            </div>
            <button onClick={() => setMuted(!muted)}>
              {muted ? (
                <BsVolumeMuteFill className=" w-6 h-6" />
              ) : (
                <BsFillVolumeUpFill className=" w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div className=" flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className=" space-y-6 text-lg">
            <div className=" flex items-center space-x-2 text-sm">
              <p className=" font-semibold text-green-400">
                {movie?.vote_average * 10}% Match
              </p>
              <p className=" font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className=" flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className=" flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className=" w-5/6">{movie?.overview}</p>
              <div className=" flex flex-col space-y-3 text-sm">
                <div>
                  <span className=" text-[gray]">Genres : </span>
                  {genres.map((genre) => genre.name).join(" , ")}
                </div>
                <div>
                  <span className=" text-[gray]">Original language: </span>
                  {movie?.original_language}
                </div>
                <div>
                  <span className=" text-[gray]">Total Vote: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
}

export default Modal;

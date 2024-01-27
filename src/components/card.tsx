import { MovieDetails } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ movie }: { movie: MovieDetails }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="Image"
          className="sm:rounded-t-lg group-hover:opacity-65 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.original_title}
          </h2>
          <p className="flex items-center">
            {movie.release_date}
            <FiThumbsUp className="h-5 mr-1 ml-4" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

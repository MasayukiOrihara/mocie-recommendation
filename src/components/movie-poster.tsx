import Image from 'next/image';
import Link from 'next/link';
 
import { Movie, SimilarMovie } from '@/types';
 
function MoviePoster({
  index,
  similarityRating,
  movie,
}: {
  index?: number;
  similarityRating?: number;
  movie: Movie | SimilarMovie;
}) {
  return (
    <Link
      key={movie._id}
      href={`/movie/${movie._id}`}
      className="flex flex-col items-center justify-center"
    >
      <div>
        <Image
          width={300}
          height={450}
          src={movie.Poster}
          alt={movie.Title}
          className="min-w-64 max-w-64 object-contain rounded-lg shadow-lg"
        />
      </div>
      <div className="relative">
        {similarityRating && (
          <div className="absolute w-14 h-14 flex items-center justify-center bottom-0 right-0 bg-orange-300 bg-opacity-90 p-2 rounded-full m-5 font-bold">
            {similarityRating}%
          </div>
        )}
 
        {index && (
          <div className="absolute text-gray-100 top-18 -left-4 text-6xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {index}
          </div>
        )}
      </div>
 
      <div className="px-4 py-2">
        <p className="text-lg font-semibold line-clamp-1 w-64">
          {movie.Title}
        </p>
        <p className="text-gray-500 line-clamp-1">{movie.Genre}</p>
      </div>
    </Link>
  );
}
 
export default MoviePoster;
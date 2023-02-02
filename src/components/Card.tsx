import { Props } from "../interfaces/props";
import { Card } from "flowbite-react";

export function CardMovies({ data }: Props) {
  return (
    <>
      {data.map((movie, index) => {
        return (
          <div className="max-w-sm" key={index}>
            <Card imgSrc={movie.Poster}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.Title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.Type}
              </p>
            </Card>
          </div>
        );
      })}
    </>
  );
}

import { Props } from "../interfaces/props";

export function Card({ data }: Props) {
  return (
    <>
      {data.map((movie, index) => {
        return (
          <div key={index}>
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div>
              <h2>{movie.Title}</h2>
              <h3>{movie.Year}</h3>
              <h4>{movie.Type}</h4>
              <h5>{movie.imdbID}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
}

import { urlBatman } from "../server/server";
import { FormEvent, useEffect, useState } from "react";
import { CardMovies } from "./Card";
import { Loader } from "./Loader";

export function Batman() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSeach] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(urlBatman);
      const result = await res.json();
      const { Search } = result;
      setData(Search);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      return setError("Ingresa un texto valido porfavor");
    }
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=61093265&s=${search}`
    );
    const result = await res.json();
    setData(result.Search);
    if (!result.Search) {
      return setError("No hay resultados");
    }
  };
  return (
    <>
      <div className="flex md:order-2 pt-10 justify-center items-end">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search..."
            onChange={(e) => setSeach(e.target.value)}
            autoComplete="off"
            value={search}
          />
        </form>
      </div>
      <section>
        <div className="flex flex-wrap items-center justify-around mt-10">
          <CardMovies data={data} />
        </div>
      </section>
    </>
  );
}

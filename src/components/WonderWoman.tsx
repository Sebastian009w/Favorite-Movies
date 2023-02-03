import { urlWonderWoman } from "../server/server";
import { useEffect, useState } from "react";
import { CardMovies } from "./Card";
import { Loader } from "./Loader";

export function WonderWoman() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    (async () => {
      const res = await fetch(urlWonderWoman);
      const result = await res.json();
      const { Search } = result;
      setData(Search);
      setLoader(false);
    })()
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <section>
      <div className="flex flex-wrap items-center justify-around mt-10">
        <CardMovies data={data} />
      </div>
    </section>
  );
}

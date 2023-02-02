import { urlBatman } from "../server/server";
import { useEffect, useState } from "react";
import { CardMovies } from "./Card";

export function Batman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getBatman = async () => {
      const res = await fetch(urlBatman);
      const result = await res.json();
      const { Search } = result;
      setData(Search);
    };

    getBatman();
  }, []);
  return (
    <section>
      <div>
        <CardMovies data={data} />
      </div>
    </section>
  );
}

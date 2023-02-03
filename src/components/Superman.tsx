import { useEffect, useState } from "react";
import { urlSuperman } from "../server/server";
import { CardMovies } from "./Card";
export function Superman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(urlSuperman);
      const result = await res.json();
      const { Search } = result;
      setData(Search);
    })();
  }, []);
  return (
    <section>
      <div>
        <CardMovies data={data} />
      </div>
    </section>
  );
}

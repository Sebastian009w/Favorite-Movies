import { urlBatman } from "../server/server";
import { useEffect, useState } from "react";
import { CardMovies } from "./Card";
import { Loader } from "./Loader";

export function Batman() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
  return (
    <section>
      <div>
        <CardMovies data={data} />
      </div>
    </section>
  );
}

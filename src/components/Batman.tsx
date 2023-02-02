import { url } from "../server/server";
import { useEffect, useState } from "react";
import { Movies } from "../interfaces/movies";
import { Card } from "./Card";
export function Batman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getBatman = async () => {
      const res = await fetch(url);
      const result = await res.json();
      const { Search } = result;
      setData(Search);
    };

    getBatman();
  }, []);
  return (
    <section>
      <div>
        <Card data={data} />
      </div>
    </section>
  );
}

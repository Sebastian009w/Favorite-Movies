import { useEffect, useState } from "react";
import { urlSuperman } from "../server/server";
import { Card } from "./Card";
export function Superman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getBatman = async () => {
      const res = await fetch(urlSuperman);
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

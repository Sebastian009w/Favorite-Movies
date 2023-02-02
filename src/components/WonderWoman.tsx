import { urlWonderWoman } from "../server/server";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export function WonderWoman() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getBatman = async () => {
      const res = await fetch(urlWonderWoman);
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

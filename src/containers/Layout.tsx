import React, { useEffect, useState } from "react";
import { HeaderBar } from "../components/Header";
import { CardList } from "../components/CardList";
import axios from "axios";

export const Layout = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await axios
        .get("data.json")
        .then((response) => setData(response.data))
        .catch((e) => console.log(e));
      setLoading(false);
    };

    getData();
  }, []);
  //export outside
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <HeaderBar title="Exoticca" />
      <div style={divStyle}>
        <CardList data={data} />
      </div>
    </>
  );
};

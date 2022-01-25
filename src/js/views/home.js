import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";

const carta = <Card />;
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <br></br>
      <h2 className="title my-5">Characters</h2>
      <div className="cards">
        {store.characters.map(c => <Card data={c}/> )}
      </div>
      <h2 className="title my-5">Planets</h2>
      <div className="cards">
        <Card />
      </div>
    </>
  );
};

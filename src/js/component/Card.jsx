import React, {useContext} from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  return <>
    <div className="card space">
      <img
        className="card-img-top"
        src="https://www.verance.com/app/uploads/2017/01/400x200.png"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Name</h5>
        <p className="card-text">Gender: </p>
        <p className="card-text">Hair Color: </p>
        <p className="card-text">Eye Color: </p>
        <div className="footer-card">
          <Link to={"/single"}>
            <button className="btn btn-primary">Learn More!</button>
          </Link>
          {/* <a href="#" className="btn btn-primary">Learn More!</a> */}
          <button className="btn btn-warning" onClick = {() => actions.addFavorites(props.data)}>
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  </>
};

// Card.propTypes = {
// 	gender: PropTypes.string,
// 	eye: PropTypes.string,
// 	hair: PropTypes.string,
// 	name: PropTypes.string,
// 	index: PropTypes.string
// 	};

export default Card;

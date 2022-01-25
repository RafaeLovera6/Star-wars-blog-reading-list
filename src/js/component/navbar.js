import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light justify-content-around">
<a className="navbar-brand"><i class="fab fa-jedi-order fa-lg"></i></a>
<form className="form-inline">
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {store.favorites.map(f => <li><a class="dropdown-item" href="#">{f.name}</a></li>)}
    
  </ul>
</div>
</form>
</nav>
	);
};
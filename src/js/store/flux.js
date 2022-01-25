const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [
		 
		],
		characters: [
		  {
			name: "Luke Skywalker",
			height: "172",
			skin_color: "fair",
			eye_color: "blue",
			birth_year: "19BBY",
			gender: "male",
			id : 1,
		  },
		],
		planets: [
		  {
			name: "Tatooine",
			rotation_period: "23",
			orbital_period: "304",
			diameter: "10465",
			climate: "arid",
			population: "200000",
			id : 2,
		  },
		],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  /**
					  fetch().then().then(data => setStore({ "foo": data.bar }))
				  */
		},
		removeFavorites: (favoriteId) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		 
		  
  
		  //reset the global store
		  setStore({favorites : store.favorites.filter(f => f.id !== favoriteId) });
		  
		},
		addFavorites: (favorite) => {
		  //get the store
		  const {favorites} = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		 
		  
  
		  //reset the global store
		  setStore({favorites : favorites.concat(favorite) });
		},
	  },
	};
  };
  
  export default getState;
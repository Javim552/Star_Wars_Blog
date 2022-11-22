const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favoritos: [],
	  people: {},
	  planets: {}
    },
    actions: {
      // Use getActions to call a function within a fuction

      Favorites: (fav) => {
        const store = getStore();
        if (!store.favoritos.includes(fav)) {
         
          // filter
          setStore({ favoritos: [...store.favoritos, fav] });
        
         }else {
          let newFav = store.favoritos.filter( favorito =>
            favorito != fav
            )
           setStore({ favoritos: newFav});
         }
      },
	  getGlobal: (whatToGet) => {
        fetch("https://www.swapi.tech/api/" + whatToGet)
          .then((response) => response.json())
          .then((result) => setStore({[whatToGet]: result}))
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;

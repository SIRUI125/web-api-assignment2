import React, { useState ,  useContext} from "react";
import { AuthContext } from "../contexts/authContext";
import { getFavorites, addFavorite, deleteFavorite } from "../api/tmdb-api";
import {writeReview} from "../api/tmdb-api"
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const userContext = useContext(AuthContext)
  const username = userContext.userName
  const [favorites, setFavorites] = useState( [] )
  const getUserFavorites = (username) =>{
    getFavorites(username).then((response =>{
      if (response) setFavorites (response);
    }))
}

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
      console.log(userContext.userName);
        addFavorite(userContext.userName, movie.id);
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const [myReviews, setMyReviews] = useState( {} ) 
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  console.log(myReviews);
  // We will use this function in a later section

  const removeFavorite = (username, movie) => {
    let newFavorites = [];
    deleteFavorite(username, movie);
    newFavorites = getFavorites(username, movie)
    setFavorites(newFavorites)
  };

  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const [toPlaylist, setToPlaylist] = useState( [] )

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!toPlaylist.includes(movie.id)){
        newPlaylist = [...toPlaylist, movie.id];
    }
    else{
        newPlaylist = [...toPlaylist];
    }
    setToPlaylist(newPlaylist);
    console.log(newPlaylist);
};

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        getUserFavorites,
        addToFavorites,
        removeFromFavorites,
        removeFavorite,
        addReview,
        addToPlaylist,
        toPlaylist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
export const getMovies = (args) => {
  const [, pages] = args.queryKey;
  const { page } = pages;
  return fetch(
    `/api/movies/tmdb/popular`)
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/movies/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
export const getMovieReviews = (id) => {
  return fetch(
    `/api/movies/tmdb/movies/${id}/reviews`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};
  export const getUpcomingMovies = () => {
    return fetch(
        `http://localhost:8080/api/movies/tmdb/upcoming`, {
          headers: {
            'Authorization': window.localStorage.getItem('token')
          }
        }
    ).then( (response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();

    }).catch((error) => {
            throw error
        });
        
};
export const gettopratedMovie = () => {
  return fetch(`/api/movies/tmdb/toprated`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        return response.json().then((json) => {
          throw new Error(json.message || 'Server error');
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching top rated movies:', error);
      throw error;
    });
};
export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getpeople = () => {
  return fetch(
    `http://localhost:8080/api/people/tmdb/popular`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getPeopledetail = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/people/tmdb/people/${id}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getPeopleImage = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/people/tmdb/people/${id}/images`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
    export const getTV = () => {
      return fetch(`/api/TV/tmdb/popular`)
        .then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.message || 'Error fetching TV data');
          }
          return response.json();
        })
        .catch((error) => {
          console.error('Error:', error);
          throw error;
        });
    };
    
      export const getTVdetail = (args) => {
        // console.log(args)
        const [, idPart] = args.queryKey;
        const { id } = idPart;
        return fetch(
          `/api/TV/tmdb/TV/${id}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
          .catch((error) => {
            throw error
          });
      };
      export const getTVGenres = async (args) => {
        const [, idPart] = args.queryKey;
        const { id } = idPart;
        return fetch(
          '/api/TV/tmdb/TV/${id}/genres'
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
          .catch((error) => {
            throw error
          });
      };
      export const getTVReviews = (id) => {
        return fetch(
          `/api/TV/tmdb/TV/${id}/reviews`
        )
          .then((res) => res.json())
          .then((json) => {
            // console.log(json.results);
            return json.results;
          });
      };
      export const getMovieImages = ({ queryKey }) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/images?
          api_key=${process.env.REACT_APP_TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
      
        })
        .catch((error) => {
          throw error
       });
      };
      export const login = async (username, password) => {
        const response = await fetch('http://localhost:8080/api/users', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ username: username, password: password })
        });
        return response.json();
    };
    
    export const signup = async (username, password) => {
        const response = await fetch('http://localhost:8080/api/users?action=register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ username: username, password: password })
        });
        return response.json();
    };
    export const addFavorite = (username, newFavorite) => {
    return fetch(`/api/users/${username}/favorites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, newFavorite: newFavorite })
    }).then(res => res.json())
  };

  export const getFavorites = async (username) => {
    return fetch(`/api/users/${username}/favorites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get'}).then(res => res.json())
  };

  export const deleteFavorite = (username, movie) => {
    return fetch(`/api/users/${username}/movie/${movie.id}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movie })
    }).then(res => res.json())
  };
  export const addUserReview = (username, movie, review) => {
    return fetch(`/api/reviews/${username}/movie/${movie.id}/reviews`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ author: review.author, review: review.review, rating: review.rating, movie_id: movie.id })
    }).then(res => res.json())
};

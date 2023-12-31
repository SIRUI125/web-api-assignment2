import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};
export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTopratedMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    )
    .then((response) => {
        if (!response.ok) {
            return response.json().then((json) => {
                throw new Error(json.message || 'Error fetching top rated movies');
            });
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error;
    });
};


export const getNowPlayingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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

export const getLatestMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.TMDB_KEY}&language=en-US`
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

export const getPopularPeople = () => {
    return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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


export const getPeopleDetail = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error;
        });

};

export const getPeopleMovie_credit = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}&language=en-US`
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

export const getLatestPeople = () => {
    return fetch(
        `https://api.themoviedb.org/3/person/latest?api_key=${process.env.TMDB_KEY}&language=en-US`
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

export const getPeopleimages = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
    }
    export const getTV = () => {
        return fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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
    
    export const getTVDetail = (id) => {
        return fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}&language=en-US&page=1&language=en-US`
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
    
    export const getSimilarTVshows = (id) => {
        return fetch(
            `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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
            `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
            .catch((error) => {
                throw error
            });
        }    
        export const getMovies = () => {
            return fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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
        export const getMovieDetail = (id) => {
            return fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
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
        export const getTVGenres = (id) => {
            return fetch(
                `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_KEY}&language=en-US`
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
        export const getMovieImages = (id) => {
            return fetch(
                `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}&language=en-US`
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
        export const getMovieGenres = () => {
            return fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MDB_KEY}&language=en-US`
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
                `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
            ).then((response) => {
                if (!response.ok) {
                    throw new Error(response.json().message);
                }
                return response.json();
            })
                .catch((error) => {
                    throw error
                });
            }
            export const getPeople = () => {
                return fetch(
                  `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
                  ).then((response) => {
                    if (!response.ok) {
                      throw new Error(response.json().message);
                    }
                    return response.json();
                  })
                  .catch((error) => {
                     throw error;
                  });
                };
                export const getPeopleImage = (args) => {
 
                    return fetch(
                      `https://api.themoviedb.org/3/person/${args}/images?api_key=${process.env.TMDB_KEY}`
                    ).then((response) => {
                      if (!response.ok) {
                        throw new Error(response.json().message);
                      }
                      return response.json();
                    })
                    .catch((error) => {
                      throw error;
                   });
                  };
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopratedPage from "./pages/topratedPage"
import PeoplePage from "./pages/peoplePage"
import PeopleDetailPage from "./pages/peopleDetailPage";
import TVPage from "./pages/TVPage";
import TVDetailPage from "./pages/TVDetailPage";
import LoginPage from './pages/loginPage'; 
import LogoutPage from './pages/logoutpage'; 
import AuthContextProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import ProtectedRoutes from "./protectedRoutes";
import MovieProvider from "./contexts/moviesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MovieProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/movies/toprated" element= {<TopratedPage/>}/>
          <Route path="/movies/tv" element= {<TVPage/>}/>
          <Route path="/movies/people" element= {<PeoplePage/>}/>
          </Route>
          <Route path="/movies/upcoming" element={<UpcomingMoviePage />} /> 
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/people/:id" element= {<PeopleDetailPage/>}/>
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/TV/:id" element= {<TVDetailPage/>}/>
          <Route path="/:page" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={ <Navigate to="/1" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
        </Routes>
        </MovieProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies,getMovie} from '../tmdb-api';
import {getGenres} from '../tmdb-api';
import { getTopratedMovies } from '../tmdb-api';
import { getNowPlayingMovies } from '../tmdb-api';
import { getLatestMovies } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
import { getMovies } from '../tmdb-api';
import { getMovieDetail } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));
router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));
router.get('/tmdb/genres' ,asyncHandler(async (req, res) => {
    const Genres = await getGenres();
    res.status(200).json(Genres);
}));
router.get('/tmdb/toprated', asyncHandler( async(req, res) => {
    const topratedMovies = await getTopratedMovies();
    res.status(200).json(topratedMovies);
  }));
router.get('/tmdb/nowplaying', asyncHandler( async(req, res) => {
    const nowplayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowplayingMovies);
  }));
  router.get('/tmdb/latest', asyncHandler( async(req, res) => {
    const latestMovies = await getLatestMovies();
    res.status(200).json(latestMovies);
  }));
  router.get('/tmdb/popular', asyncHandler( async(req, res) => {
    const Movies = await getMovies();
    res.status(200).json(Movies);
  }));

  router.get('/tmdb/movies/:id', asyncHandler( async(req, res) => {
    const MovieDetail = await getMovieDetail(req.params.id);
    res.status(200).json(MovieDetail);
  }));
  router.get('/tmdb/movies/:id/images', asyncHandler( async(req, res,) => {
    const MovieImages = await getMovieImages(req.params.id);
    res.status(200).json(MovieImages);
  }));

  router.get('/tmdb/movies/:id/reviews', asyncHandler( async(req, res,) => {
    const MovieReviews = await getMovieReviews(req.params.id);
    res.status(200).json(MovieReviews);
  }));

export default router;
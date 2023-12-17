import express from 'express';
import Genre from './genresModel'
import asyncHandler from 'express-async-handler';

import { getMovieGenres } from '../tmdb-api';
const router = express.Router(); // eslint-disable-line

router.put('/:id', async (req, res) => {
        res.status(404).json({ code: 404, msg: 'Unable to Update Genre' });
    }
);
router.get('/tmdb/movies', asyncHandler( async(req, res) => {
    const MovieGenres = await getMovieGenres();
    res.status(200).json(MovieGenres);
  }));
export default router;

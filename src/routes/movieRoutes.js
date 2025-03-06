import express from 'express';
import movieController from '../controllers/movieController.js';

const router = express.Router();

router.get('/message', movieController.getMessage);
router.get('/', movieController.getAllMovies);
router.post('/', movieController.postMovie);
router.delete('/:id', movieController.deleteMovieById);

export default router;
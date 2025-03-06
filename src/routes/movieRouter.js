import express from 'express';
import movieController from '../controllers/movieController.js';

const router = express.Router();

router.get('/', movieController.getAll);
router.get('/', movieController.create);
router.get('/:id', movieController.update);
router.get('/:id', movieController.delete);

export default router;
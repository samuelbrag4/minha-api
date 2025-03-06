import movieModel from '../models/movieModel.js';

class MovieController {
    getMessage = (req, res) => {
        const message = movieModel.getMessage();
        res.send(message);
    };

    getAllMovies = (req, res) => {
        const movies = movieModel.getAllMovies();
        res.json(movies);
    };

    postMovie = (req, res) => {
        const { title, genre } = req.body;
        const newMovie = movieModel.postMovie(title, genre);
        res.json(newMovie);
    };

    deleteMovieById = ({ params: { id } }, res) => {
        const sucesso = movieModel.deleteMovieById(parseInt(id));
        if (!sucesso) {
            res.status(404).send('Filme não encontrado');
        }
        res.status(200).send(sucesso);
    };
}
export default new MovieController();
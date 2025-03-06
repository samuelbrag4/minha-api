import movieModel from '../models/movieModel.js';

// Teste
class movieController {
    getAll = (req, res) => {
        const movies = movieModel.getAll();
        res.json(movies);
    };

    create = ({ body: { title, director } }, res) => {
        if (!title || !director) {
            return res.status(400).json({ erro: 'Título e diretor são obrigatórios' });
        }
        const newMovie = movieModel.create(title, director);
        res.status(201).json(newMovie);
    };

    update = ({ params: { id }, body: { title, director } }, res) => {
        const updatedMovie = movieModel.update(id, title, director);
        if (!updatedMovie) {
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }
        res.json(updatedMovie);
    };

    delete = ({ params: { id } }, res) => {
        const sucesso = movieModel.delete(id);
        if (!sucesso) {
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }
        res.status(204).send();
    };
}
export default new movieController();
class MovieModel {
    constructor() {
        this.movies = [
            { id: 1, title: 'Dune Part Two', genre: 'Sci-Fi' },
            { id: 2, title: 'Ainda Estou Aqui', genre: 'Drama' },
            { id: 3, title: 'Tangled', genre: 'Musical' },
            { id: 4, title: 'Nosferatu', genre: 'Horror' },
            { id: 5, title: 'Howl`s Moving Castle', genre: 'Adventure' },
            { id: 6, title: 'Captain America', genre: 'Action' }
        ];
    };

    getMessage = () => {
        return 'Bem-vindo à API de filmes!!';
    };

    getAllMovies = () => this.movies;

    postMovie = (title, genre) => {
        const newMovie = {
            id: this.movies.length + 1,
            title,
            genre
        };
        this.movies.push(newMovie);
        return newMovie;
    };

    deleteMovieById = (id) => {
        const index = this.movies.findIndex((movie) => movie.id === id);
        if (index !== -1) {
            this.movies.splice(index, 1);
            return message = `Filme com id ${id} deletado com sucesso!`;
        };
    };
};

export default new MovieModel();
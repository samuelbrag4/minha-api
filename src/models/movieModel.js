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
    }
    getAll = () => this.movies;
    
    

};

export default new MovieModel();
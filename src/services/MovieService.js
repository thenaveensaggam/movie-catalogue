import axios from "axios";

export class MovieService {
    static serverUrl = `http://127.0.0.1:5000`;

    static getAllMovies() {
        let dataUrl = `${this.serverUrl}/api/movies`;
        return axios.get(dataUrl);
    }
}
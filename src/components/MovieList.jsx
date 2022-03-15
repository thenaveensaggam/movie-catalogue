import React, {useEffect} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import MovieItem from "./MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../redux/features/movie-list.feature";

let MovieList = () => {

    let dispatch = useDispatch();

    //get data from Redux Store
    let movieState = useSelector((store) => {
        return store["movies"];
    })

    useEffect(async () => {
        dispatch(getMovies()); // dispatch action
    }, [dispatch]);

    let {loading, errorMessage, movies} = movieState;

    /*useEffect(() => {
        MovieService.getAllMovies().then((response) => {
            let {movies} = response.data;
            setState({
                ...state,
                movies: movies
            });
        }).catch((error) => {
            setState({
                ...state,
                errorMessage: error
            })
        });
    }, [])*/

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className="text-success fw-bold">Movies List</h3>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                            deleniti ipsam, iure
                            libero maiores minima mollitia, odit officiis optio quidem quo recusandae rem repellat ut
                            vitae. Aperiam id ipsa libero.</p>
                    </Col>
                </Row>
                {
                    movies.movies?.length > 0 &&
                    <Row>
                        <Col md={10}>
                            <Card className="shadow-lg sticky-top bg-dark">
                                <Card.Body>
                                    <Row>
                                        <MovieItem movies={movies.movies}/>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                }
            </Container>
        </>
    )
};
export default MovieList;
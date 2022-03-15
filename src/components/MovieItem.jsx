import React, {useRef} from 'react';
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectTheMovie} from "../redux/features/movie-list.feature";

let MovieItem = ({movies}) => {
    let dispatch = useDispatch();

    let movieElem = useRef(null);

    // get data from Redux Store
    let movieState = useSelector((state) => {
        return state["movies"];
    });

    let {selectedMovie} = movieState;

    let selectMovie = (movie, movieElem) => {
        dispatch(selectTheMovie(movie));
        for (let child of movieElem.current.children) {
            if (child.innerText === movie.Title) {
                child.classList.add('list-group-item-dark');
            } else {
                child.classList.remove('list-group-item-dark');
            }
        }
    }

    return (
        <>
            <Row>
                <Col xs={5}>
                    {
                        Object.keys(selectedMovie).length > 0 &&
                        <Card className="text-center">
                            <Card.Img src={selectedMovie.Poster}/>
                            <Card.Body>
                                <h4
                                    className="fw-bold">{selectedMovie.Title}</h4>
                                <small>Year : <span className="fw-bold">{selectedMovie.Year}</span></small><br/>
                                <small>IMDB Id : <span
                                    className="fw-bold">{selectedMovie.imdbID}</span></small><br/>
                                <small>Type : <span className="fw-bold">{selectedMovie.Type}</span></small><br/>
                            </Card.Body>
                        </Card>
                    }
                </Col>
                <Col xs={7}>
                    <ListGroup ref={movieElem} className="list-group">
                        {
                            movies.map(movie => {
                                return (
                                    <ListGroupItem key={movie.Title}
                                                   onClick={() => selectMovie(movie, movieElem)}
                                    >{movie.Title}</ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
};
export default MovieItem;
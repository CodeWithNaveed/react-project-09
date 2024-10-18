import * as React from 'react';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import { useState } from 'react';

export default function HalfRating({ movies, similarity, setMoviesList }) {
    const [showButton, setShowButton] = useState(false);

    const addButtonHandler = () => {
        setShowButton(true);
    };

    const addButton = () => {
        const filteredMovies = movies.filter((movie) => movie.id === similarity); // Use 'id' instead of 'imdbID'
        
        setMoviesList((prevList) => {
            // Ensure movie isn't already in the list
            const newMovies = filteredMovies.filter((newMovie) =>
                !prevList.some((movie) => movie.id === newMovie.id)
            );
            return [...prevList, ...newMovies];
        });
        
        setShowButton(false);
    };

    return (
        <Container>
            <Rating
                name="customized-10"
                defaultValue={2}
                max={10}
                onClick={addButtonHandler}
            />

            {showButton && <Button className='addButton' onClick={addButton}>Add movie</Button>}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #34393b;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #6741d9;
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.14);
        background-color: #6f57b9;
    }
`

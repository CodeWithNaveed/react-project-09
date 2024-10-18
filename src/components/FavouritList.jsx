import React from 'react'
import styled from 'styled-components'

const FavouritList = ({ moviesList }) => {
    return (
        <>
            {moviesList && (
                <Ul>
                    {moviesList.map((movie) => (
                        <Li key={movie.imdbID}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.Title} width="50px" height="50px" />
                            <p>📆 {movie.release_date}</p>
                            <h3>{movie.title}</h3>
                        </Li>
                    ))}
                </Ul>
            )}
        </>
    )
}

export default FavouritList


const Li = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #2b3035;
    border-radius: 10px;
    margin-bottom: 10px;
`

const Ul = styled.ul`
    width: 100%;
`
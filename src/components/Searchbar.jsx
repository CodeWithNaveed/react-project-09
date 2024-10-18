import React from 'react'
import styled from 'styled-components'

const Searchbar = ({searchTerm, setSearchTerm, movies}) => {

  return (
    <Container>
      <Icon>
        <span
          style={{
            color: 'white',
            fontSize: '2.2rem'
          }}
        >🍿</span>

        <h1
          style={{
            fontSize: '1.9rem',
            marginLeft: '0.7rem',
            fontWeight: '500',
          }}
        >usePopcorn</h1>
      </Icon>

      <Input>
        <input
          type='text'
          value={searchTerm}
          placeholder='Search movies...'
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on input change
          className='input'
        />
      </Input>

      <NumberOFResults>
        <p class="num-results">
          Found
          <strong> {movies.length} </strong>
          results
        </p>
      </NumberOFResults>
    </Container>
  )
}

export default Searchbar

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: fit-content;
  padding: 0.9rem 2.6rem;
  background-color: #6741d9;
  border-radius: .9rem;
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
`
const Icon = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const Input = styled.div`
  .input {
    border: none;
    padding:  0.6rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 0.4rem;
    width: 25rem;
    color: #dee2e6;
    background-color: #7950f2;
  }

  .input::placeholder {
    color: rgb(181, 180, 180);
    font-size: 1.2rem;
  }
  
  .input:focus {
    outline:  none;
    border: none;
    transform: translateY(-2px);
    transition: all 0.3s ease;
    box-shadow: 0 20px 40px 0 #29292985;
  }
`
const NumberOFResults = styled.div`
  .num-results {
    display: flex;
    color: #dee2e6;
    font-size: 1.3rem;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }
`

import React,{useState} from 'react'
import styled from 'styled-components'

function SearchBar({onChange}) {


    return (
    <SearchContainer>
     <SearchBox>
        <Search type="text" placeholder="Search by Author , Categorys , Title ...." onChange={onChange} />
     </SearchBox>
    </SearchContainer>
    )
}

export default SearchBar

const SearchContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: hsl(250,50%,85%);
padding: 0 10px;

`;

const SearchBox = styled.form`
border:none;
width: 100%;
height: 40px;
`;

const Search = styled.input`
height: 100%;
width: 100%;
font-size: 16px;
outline: none;
padding: 0 5px;
font-family: 'Nunito', sans-serif;
border-radius: 6px;
border: none;
`;

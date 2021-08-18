import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 375px;
    background-image: url(images/jordan.png);
    background-size: contain;
    background-position: center;
` 

export const Header = styled.h1`
    background: #000000;
    margin: 0;
    margin-bottom: 10px;
    color: #F5F5F5;
    font-size: 40px;
    padding: 5px;
    text-align: center;

    @media (max-width: 600px){
        font-size: 24px
    }
`

export const SearchBar = styled.div`
    width: 40%;
    height: 48px;
    display: flex;
    align-items: center;

    @media (max-width: 600px){
        width: 75%
    }
`

export const Input = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 8px;
    outline: none;
    padding-left: 40px;
    font-size: 24px;
`

export const Icon = styled.i`
    font-size: 24px;
    position: absolute;
    margin-left: 10px
`
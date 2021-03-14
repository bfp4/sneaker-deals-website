import styled from "styled-components/macro";
import jordan from "./jordan.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    background-image: url(${jordan});
    background-size: contain;
    background-position: right;
` 

export const Header = styled.div`
    background: #000000;
    margin-bottom: 10px;
    color: #F5F5F5;
    font-size: 40px;
    padding: 5px;
    text-align: center;

    @media(max-width: 575px){
        font-size: 33px
    }
`

export const Input = styled.input`
    height: 100%;
    width: 90%;
    border: none;
    border-radius: 0 4px 4px 0;
    outline: none;
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;

    @media(max-width: 720px){
        width: 20px;
        height: 20px;
    }

    @media(max-width: 600px){
        width: 12px;
        height: 12px;
    }
`

export const IconContainer = styled.div`
    width: 10%;
    height: 50px;
    border-radius: 4px 0 0 4px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center
`

export const SearchBar = styled.div`
    width: 40%;
    height: 48px;
    display: flex;
    align-items: center;
`
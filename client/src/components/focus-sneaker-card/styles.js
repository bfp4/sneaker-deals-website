import styled from "styled-components/macro"

export const Container = styled.div``

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    width: 60%;
    height: 80%;
    background: white;
    border-radius: 12px;
    box-shadow: 3px 5px 7px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const Header = styled.div`
    width: 100%;
    height: 10%;
    background-color: black;
    border-radius: 4px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px
`

export const Title = styled.div`
    color: #F5F5F5;
    font-size: 40px;
    margin: 10px;

    @media(max-width: 600px){
        font-size: 15px;
    }
`

export const Date = styled.div`
    color: #F5F5F5;
    margin: 10px
`

export const PicCon = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`

export const Pic = styled.img`
    height: 100%;

    @media(max-width: 600px){
        height: 70%;
    }
`

export const PriceCon = styled.div`
    width: 100%;
    height: 15%;
    display: flex; 
    justify-content: space-between;
    align-items: center;

    @media(max-width: 600px){
        flex-direction: column;
    }
`

export const Price = styled.div`
    font-size: 60px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 900px){
        font-size: 35px;
    }
`

export const Link = styled.button`
    background-color: black;
    color: #F5F5F5;
    margin: 10px;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
`

export const Retail = styled.div`
    text-decoration: line-through;
`
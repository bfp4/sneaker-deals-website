import styled from "styled-components/macro"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    min-height: 300px
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 1120px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 720px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ShowMore = styled.button`
    width: 230px;
    height: 50px;
    background: black;
    color: #F5F5F5;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    margin-top: 30px
`
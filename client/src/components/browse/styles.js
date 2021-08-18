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
    position: relative;
    background-color: #FFFFFF;
    color: #000;
    border: 3px solid #000;
    border-radius: 4px;
    font-size: 24px;
    margin-top: 30px;
    cursor: pointer;
    transition: color 300ms ease-in-out;
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #000;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 300ms cubic-bezier(0.3, 1, 0.8, 1);
    }

    @media (hover: hover){
        &:hover {
            color: #FFFFFF;
        }
    
        &:hover::before {
            transform: scaleX(1);
        }
    }
`
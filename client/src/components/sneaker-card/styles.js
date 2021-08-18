import styled from "styled-components/macro"

export const WholeWrapper = styled.div`
    margin: 25px;
    cursor: pointer;
    &:hover .container{
        box-shadow: 18px 18px;
        left: -20px;
        top: -10px
    }
` 
export const Card = styled.div`
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    border-radius: 12px;
    box-shadow: 12px 12px;
    padding: 10px;
    transition: 250ms ease;

    @media (max-width: 600px){
        width: 200px;
        height: 200px
    }
`

export const Pic = styled.img`
    width: 75%;
    height: 75%;
    border-radius: 12px;
    align-self: center
`

export const Name = styled.div`
    font-size: 20px;
    background: black;
    color: #F5F5F5;
    padding: 5px;
    transition: font-size 250ms ease;
    @media (max-width: 600px){
        font-size: 10px
    }
`

export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`

export const Brand = styled.div``

export const Bottom = styled.div`
    width: 100%;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: font-size 250ms ease;

    @media (max-width: 600px){
        font-size: 14px
    }
`

export const Retail = styled.div`
    text-decoration: line-through;
`
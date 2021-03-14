import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    height: 64px;
    background: #000000;
    color: #F5F5F5
`

export const Link = styled.a`
    text-decoration: none;
    color: #F5F5F5;
    cursor: pointer;

    @media(max-width: 100px){
        font-size: 14px
    }
`

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const InfoLink = styled.div`
    color: #F5F5F5;
    cursor: pointer;

    @media(max-width: 100px){
        font-size: 14px
    }
`
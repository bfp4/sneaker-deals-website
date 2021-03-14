import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    height: 64px
`

export const Logo = styled.img`
    width: 125px;
    margin-left: 20px
`

export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: #000000;
`

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    height: 100%;

    @media(max-width: 900px){
        width: 70%
    }
`

export const LogoLink = styled(ReachRouterLink)``
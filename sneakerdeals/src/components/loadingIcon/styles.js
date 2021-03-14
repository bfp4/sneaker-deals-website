import styled, { keyframes } from "styled-components/macro"

const loader = keyframes`
    0% {
        transform: rotate(0deg)
    }
    25% {
        transform: rotate(180deg)
    }
    50% {
        transform: rotate(180deg)
    }
    75% {
        transform: rotate(360deg)
    }
    100% {
        transform: rotate(360deg)
    }
`

const loaderInner = keyframes`
    0% {
        height: 0%
    }
    25% {
        height: 0%
    }
    50% {
        height: 100%
    }
    75% {
        height: 100%
    }
    100% {
        height: 0%
    }
`

export const Loader = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid black;
    border-radius: 4px;
    animation-name: ${loader};
    animation-duration: 2.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-delay: 0.6s
`

export const LoaderInner = styled.div`
    width: "100%";
    background-color: black;
    animation-name: ${loaderInner};
    animation-duration: 2.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-delay: 0.6s;
    animation-timing-function: ease-in-out;
`
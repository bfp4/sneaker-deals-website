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
    align-items: center;
    flex-direction: column
`

export const InsideContainer = styled.div`

`

export const Title = styled.div`
    background: #000000;
    width: 95%;
    color: #F5F5F5;
    font-size: 40px;
    padding: 5px;
    text-align: center;
    margin: 20px;
    border-radius: 4px
`

export const Text = styled.div`
    width: 90%;
    justify-content: center;
    font-size: 30px;
    text-align: center;
    line-height: 150%
`
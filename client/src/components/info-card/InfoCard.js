import React from "react"
import { Container, Backdrop, Card, Title, Text } from "./styles"

export default function InfoCard(props){
    function parentClick(){
        props.setInfoModal(false)
        props.setInfoData({})
    }

    const childClick = (e) => {
        e.stopPropagation();
    };

    return(
        <Container>
            <Backdrop onClick={parentClick}>
                <Card onClick={childClick}>
                    <Title>{props.infoData.title}</Title>
                    <Text>{props.infoData.text}</Text>
                </Card>
            </Backdrop>
        </Container>
    )
}
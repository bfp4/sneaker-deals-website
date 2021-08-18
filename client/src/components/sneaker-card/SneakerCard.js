import React from "react"
import {  WholeWrapper, Name, Pic, Price, Card, Bottom, Brand, Retail } from "./styles"

export default function SneakerCard(props){
    const handleClick = () => {
        props.setModal(true);
        props.setData(props.data)
    }

    return(
            <WholeWrapper className="whole">
                <Card 
                    className="container" 
                    onClick={handleClick}
                >
                    <Pic alt="sneaker" src={props.data.image}/>
                    <Name>{props.data.title}</Name>
                    <Bottom>
                        <Price>{props.data.sale}(<Retail>{props.data.retail}</Retail>)</Price>
                        <Brand>{props.data.brand}</Brand>
                    </Bottom>
                </Card>
            </WholeWrapper>
    )
}
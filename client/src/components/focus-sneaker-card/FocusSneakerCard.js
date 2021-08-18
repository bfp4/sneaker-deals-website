import React from "react"
import { Backdrop, Card, Header, Title, PicCon, Pic, PriceCon, Price, Link, Retail } from "./styles"

export default function FocusSneakerCard(props){
    function parentClick(){
        props.setModal(false)
        props.setData({})
    }

    const childClick = (e) => {
        e.stopPropagation();
    };

    return(
        <Backdrop onClick={parentClick}>
            <Card onClick={childClick}>
                <Header>
                    <Title>{props.data.title}</Title>
                </Header>
                <PicCon>
                    <Pic src={props.data.image}/>
                </PicCon>
                <PriceCon>
                    <Price>{props.data.sale}(<Retail>{props.data.retail}</Retail>)</Price>
                    <Link href={props.data.link} target="_blank" rel="noreferrer">BUY HERE</Link>
                </PriceCon>
            </Card>
        </Backdrop>
    )
}

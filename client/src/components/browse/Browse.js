import React, { useState } from "react"
import { Container, Grid, ShowMore } from "./styles"
import useFirestore from "../../hooks/useFirestore.js"

import SneakerCard from "../sneaker-card/SneakerCard"
import FocusSneakerCard from "../focus-sneaker-card/FocusSneakerCard"
import LoadingIcon from "../loadingIcon/LoadingIcon"

export default function Browse(props){
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})
    const [limit, setLimit] = useState(6)
    const { docs } = useFirestore("sneaker-deals", limit)

    const mapItem = props.query === "" ? docs : props.results
 
    const children = mapItem.map(item => {
        if(mapItem === props.results) item = item.item
        return (
            <SneakerCard
                data={item}
                key={item.id}
                setModal={setModal}
                setData={setData}
            />
        )
    })

    let content;

    if(mapItem.length === 0 && mapItem === docs) content = <LoadingIcon />
    else if(mapItem.length === 0)content = <ShowMore onClick={() => setLimit(prev => prev + 6)}>NOTHING FOUND</ShowMore>
    else content = <ShowMore onClick={() => setLimit(prev => prev + 6)}>SHOW MORE</ShowMore>

    return(
        <Container >
            <Grid>
                {children}
            </Grid>
            {content}
            {modal ? <FocusSneakerCard setModal={setModal} data={data} setData={setData}/> : null}
        </Container>
    )
}
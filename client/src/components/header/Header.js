import React from "react"
import { Container, Logo, Link, LinksContainer } from "./styles"
import logo from "./logo.png"

export default function Header(props){
    function clickLink(){
        window.alert("Sorry this link is not available right now. We will try to update it soon.")
    }

    return(
        <Container>
            <Logo alt="sneakpeek" src={logo}/>
            {/* <LinksContainer>
                <Link to={"/"} onClick={clickLink}>
                    New Releases
                </Link>
                <Link to={"/"} onClick={clickLink}>
                    Sneaker Deals
                </Link>
                <Link to={"/"} onClick={clickLink}>
                    News
                </Link>
                <Link to={"/"} onClick={clickLink}>
                    Blog
                </Link>
            </LinksContainer> */}
        </Container>
    )
}
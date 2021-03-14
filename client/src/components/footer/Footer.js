import React from "react"
import { Container, Link, LinksContainer, InfoLink } from "./styles"

export default function Footer(props){
    const contactUs = {
        title: "Contact Us",
        text: "Email Us @ Appmaker613@gmail.com."
    }

    const aboutUs = {
        title: "About Us",
        text: "Our mission is to find you the best deals available so you can get the most drip possible. We post all the best deals from all the sites you don't have to go searching. So make sure to stop by us often so you can get the nicest deals."
    }

    function infoClick(data){
        if(data === "about") data = aboutUs
        else data = contactUs

        props.setInfoModal(true)
        props.setInfoData(data)
    }

    return(
        <Container>
            <LinksContainer>
                <InfoLink onClick={() => infoClick("about")}>
                    About Us
                </InfoLink>
                <InfoLink onClick={() => infoClick("contact")}>
                    Contact Us
                </InfoLink>
                <Link href={"https://www.instagram.com/sneakerniche/"} target={"_blank"}>
                    Instagram
                </Link>
                <Link href={"https://www.facebook.com/"} target={"_blank"}>
                    Facebook
                </Link>
                <Link href={"https://twitter.com/sneakerniche"} target={"_blank"}>
                    Twitter
                </Link>
            </LinksContainer>
        </Container>
    )
}
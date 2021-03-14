import React from "react"
import { Container, Header, Input, Icon, SearchBar, IconContainer } from "./styles"
import icon from "./search-icon.svg"

export default function Search(props){
    return(
        <Container>
            <Header>
                Find the best sneaker deals.
            </Header>
            <SearchBar>
                <IconContainer>
                    <Icon alt="search" src={icon} />
                </IconContainer>
                <Input 
                    type="text" 
                    placeholder="Search..." 
                    autocomplete="off" 
                    spellcheck="false" 
                    autocorrect="off" 
                    autocapitalize="off"
                    value={props.query}
                    onChange={props.handleSearch}
                />
            </SearchBar>
        </Container>
    )
}
import React from "react"
import { Container, Header, Input, Icon, SearchBar } from "./styles"

export default function Search(props){
    return(
        <Container>
            <Header>
                Find the best sneaker deals.
            </Header>
            <SearchBar>
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
                <Icon className="fas fa-search"></Icon>
            </SearchBar>
        </Container>
    )
}
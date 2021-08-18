import React, { useState } from "react"
import { Route } from "react-router-dom"
import Fuse from "fuse.js"
import useAllFirestore from "../hooks/useAllFirestore.js"

import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Browse from "../components/browse/Browse"

export default function Home(){
    const allDocs = useAllFirestore("sneaker-deals")
    const [query, setQuery] = useState("")

    const fuse = new Fuse(allDocs.docs, {
        keys: [
            "title",
            "brand"
        ]
    })

    const results = fuse.search(query)

    function handleSearch({ currentTarget = {} }){
        const { value } = currentTarget;
        setQuery(value)
    }

    return(
        <Route exact path="/">
            <Header />
            <Search 
                query={query}
                handleSearch={handleSearch}
            />
            <Browse 
                query={query}
                results={results}
            />
        </Route>
    )
}
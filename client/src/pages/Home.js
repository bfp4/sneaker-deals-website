import React, { useState } from "react"
import { Route } from "react-router-dom"
import Fuse from "fuse.js"
import useAllFirestore from "../hooks/useAllFirestore.js"

import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Footer from "../components/footer/Footer"
import Browse from "../components/browse/Browse"
import InfoCard from "../components/info-card/InfoCard"

export default function Home(props){
    const allDocs = useAllFirestore("sneaker-deals")
    const [query, setQuery] = useState("")
    const [infoModal, setInfoModal] = useState(false)
    const [infoData, setInfoData] = useState({})

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
            <Footer 
                setInfoModal={setInfoModal} 
                setInfoData={setInfoData}
            />
            {infoModal ? <InfoCard setInfoModal={setInfoModal} infoData={infoData} setInfoData={setInfoData} /> : null}
        </Route>
    )
}
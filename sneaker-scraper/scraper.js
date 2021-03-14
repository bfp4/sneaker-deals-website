import nike from "./scrapers/nike.js"
import adidas from "./scrapers/adidas.js"
import end from "./scrapers/end.js"
import finalscore from "./scrapers/finalscore.js"

const d = new Date()
const month = d.getMonth()
const day = d.getDate()
const year = d.getFullYear()
const date = `${month}${day}${year}`

function scrapeAll(){
    //nike(date)
    //adidas(date)
    //end(date)
    finalscore(date)
}

scrapeAll()



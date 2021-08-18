// import UserAgent from "user-agents"

// const IPAddress = process.argv[2]
// const port = process.argv[3]
// const proxy = `http://${IPAddress}:${port}`

// const userAgent = new UserAgent();

const options = {
    headless: false,
    defaultViewport: null,
    // args: [`--user-agent=${userAgent}`, `--proxy-server=${proxy}`],
}

import nike from "./scrapers/nike.js"
import adidas from "./scrapers/adidas.js"
import end from "./scrapers/end.js"
import finalscore from "./scrapers/finalscore.js"

const d = new Date()
const month = d.getMonth()
const day = d.getDate()
const year = d.getFullYear()
const date = `${month}${day}${year}`

async function scrapeAll(){
    await nike(date, options)
    // await adidas(date, options)
    // await end(date, options)
}

scrapeAll()



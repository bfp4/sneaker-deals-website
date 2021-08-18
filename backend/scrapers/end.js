import puppeteer from "puppeteer-extra"
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import useAddFirestore from "../hooks/useAddFirestore.js"

export default async function adidasScraper(date, options){
    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setDefaultTimeout(0);
    await page.goto("https://www.endclothing.com/us/sale?department=Sneakers");

    const data = []

    const titles = await page.evaluate(() => {
        const titles = document.querySelectorAll(".haoLmk")
        const titleList = [...titles]
        const text = titleList.map(title => title.innerText)
        return text
    })
    titles.forEach((el, i) => {
        data[i] = {}
        data[i].title = el
        data[i].website = "End"
    })

    const links = await page.evaluate(() => {
        const links = document.querySelectorAll(".kEGdbe")
        const linksList = [...links]
        const href = linksList.map(link => link.href)
        return href
    })
    links.forEach((el, i) => {
        data[i].link = el
    })

    const images = await page.evaluate(() => {
        const images = document.querySelectorAll(".gtVUTk")
        const imageList = [...images]
        const src = imageList.map(img => img.src)
        return src
    })
    images.forEach((el, i) => {
        data[i].image = el
    })
    
    const price = await page.evaluate(() => {
        const prices = document.querySelectorAll(".ejrJUw")
        const pricesList = [...prices]
        const text = pricesList.map(price => price.innerText.split("$"))
        return text
    })
    price.forEach((el, i) => {
        const sale = el[2]
        const retail = el[1]
        const percent = Math.round((sale / retail) * 100)
        data[i].sale = `$${sale}`
        data[i].retail = `$${retail}`
        data[i].percent = percent
    })

    await browser.close();

    for(let i = 0; i < 9; i++){
        useAddFirestore(data[i])
    }
}
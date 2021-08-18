import puppeteer from "puppeteer-extra"
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import useAddFirestore from "../hooks/useAddFirestore.js"

export default async function nikeScraper(date, options){
    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://www.nike.com/w/sale-shoes-3yaepzy7ok");

    const nikeData = []

    const titles = await page.evaluate(() => {
        const titles = document.querySelectorAll(".product-card__title")
        const titleList = [...titles]
        const text = titleList.map(title => title.innerText)
        return text
    })
    titles.forEach((el, i) => {
        nikeData[i] = {}
        nikeData[i].title = el
        nikeData[i].date = date
        nikeData[i].website = "Nike"
    })

    const links = await page.evaluate(() => {
        const links = document.querySelectorAll(".product-card__img-link-overlay")
        const linksList = [...links]
        const href = linksList.map(link => link.href)
        return href
    })
    links.forEach((el, i) => {
        nikeData[i].link = el
    })

    const prices = await page.evaluate(() => {
        const prices = document.querySelectorAll(".product-price__wrapper")
        const priceList = [...prices]
        const text = priceList.map(price => price.innerText)
        return text
    })
    prices.forEach((el, i) => {
        const splitEl = el.split("\n")
        const percent = Math.round((splitEl[0].split("$")[1] / splitEl[1].split("$")[1]) * 100)
        nikeData[i].sale = splitEl[0]
        nikeData[i].retail = splitEl[1]
        nikeData[i].percent = percent
    })

    const images = await page.evaluate(() => {
        const images = document.querySelectorAll("img")
        const imageList = [...images]
        const src = imageList.map(img => img.src).filter(src => src.includes("static.nike.com"))
        return src
    })
    images.forEach((el, i) => {
        nikeData[i].image = el
    })

    await browser.close();

    for(let entry of nikeData){
        useAddFirestore(entry)
    }
}
import puppeteer from "puppeteer-extra"
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import useAddFirestore from "../hooks/useAddFirestore.js"

export default async function adidasScraper(date, options){
    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setDefaultTimeout(0);
    await page.goto("https://www.adidas.com/us/men-shoes-sale");

    const data = []

    const titles = await page.evaluate(() => {
        const titles = document.querySelectorAll(".gl-product-card__name")
        const titleList = [...titles]
        const text = titleList.map(title => title.innerText)
        return text
    })
    titles.forEach((el, i) => {
        data[i] = {}
        data[i].title = el
        data[i].website = "Adidas"
    })

    const links = await page.evaluate(() => {
        const links = document.querySelectorAll(".gl-product-card__assets-link")
        console.log("links")
        const linksList = [...links]
        const href = linksList.map(link => link.href)
        return href
    })
    links.forEach((el, i) => {
        data[i].link = el
    })

    const images = await page.evaluate(() => {
        const images = document.querySelectorAll(".gl-product-card__image")
        const imageList = [...images]
        const src = imageList.map(img => img.src)
        return src
    })
    images.forEach((el, i) => {
        data[i].image = el
    })

    await page.waitForSelector('.gl-price-item--sale');
    const price = await page.evaluate(() => {
        const prices = document.querySelectorAll(".gl-price")
        const pricesList = [...prices]
        const text = pricesList.map(price => price.innerText.split("\n"))
        return text
    })
    price.forEach((el, i) => {
        const sale = el[0]
        const retail = el[1]
        const percent = Math.round((sale.split("$")[1] / retail.split("$")[1]) * 100)
        data[i].sale = sale
        data[i].retail = retail
        data[i].percent = percent
    })

    await browser.close();

    for(let entry of data){
        useAddFirestore(entry)
    }
}
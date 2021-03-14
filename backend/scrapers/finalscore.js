import puppeteer from "puppeteer"
import useAddFirestore from "../hooks/useAddFirestore.js"

export default async function adidasScraper(date){
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setDefaultTimeout(0);
    await page.goto("https://www.final-score.com/category/men/shoes.html?query=Mens+Shoes%3Arelevance%3Agender%3AMen%27s%3Abrand%3Aadidas%3Abrand%3Aadidas+Originals%3Abrand%3AVans%3Abrand%3AConverse%3Abrand%3AJordan%3Abrand%3ANike");

    const data = []

    const titles = await page.evaluate(() => {
        const titles = document.querySelectorAll(".ProductName-primary")
        const titleList = [...titles]
        const text = titleList.map(title => title.innerText)
        return text
    })
    titles.forEach((el, i) => {
        data[i] = {}
        data[i].title = el
        data[i].website = "FinalScore"
    })

    const links = await page.evaluate(() => {
        const links = document.querySelectorAll(".ProductCard-link")
        const linksList = [...links]
        const href = linksList.map(link => link.href)
        return href
    })
    links.forEach((el, i) => {
        data[i].link = el
    })

    const images = await page.evaluate(() => {
        const images = document.querySelectorAll(".ProductCard-image--primary > .LazyLoad > img")
        const imageList = [...images]
        const src = imageList.map(img => img.src)
        return src
    })
    images.forEach((el, i) => {
        data[i].image = el
    })
    
    const price = await page.evaluate(() => {
        const prices = document.querySelectorAll(".ProductPrice-sale")
        const pricesList = [...prices]
        const text = pricesList.map(price => price.innerText.split("$"))
        return text
    })
    price.forEach((el, i) => {
        const sale = el[1]
        let retail = el[2]
        const percent = Math.round((sale / retail) * 100)
        if(retail.includes(".00")) retail = retail.slice(0, -3)
        data[i].sale = `$${sale}`
        data[i].retail = `$${retail}`
        data[i].percent = percent
    })

    await browser.close();

    for(let entry of data){
        useAddFirestore(entry)
    }
    console.log(data)
}
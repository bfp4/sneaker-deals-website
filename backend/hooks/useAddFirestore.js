import { firestore } from "../firebase/config.js"

export default function useAddFirestore(data){
    if(!data.title || !data.link || !data.sale || !data.retail || !data.image || !data.website){
        console.log(data)
        return
    }
    firestore.collection("sneaker-deals").add({
        title: data.title,
        link: data.link,
        sale: data.sale, 
        retail: data.retail,
        image: data.image,
        brand: data.website,
        percent: data.percent
    })
}
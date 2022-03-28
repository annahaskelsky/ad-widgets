import { storageService } from "./storage.service.js"

const PUBLISHER_ID = 'taboola-templates'
const APP_TYPE = 'desktop'
const API_KEY = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4'

const URL = `http://api.taboola.com/1.0/json/${PUBLISHER_ID}/recommendations.get?
app.type=${APP_TYPE}&app.apikey=${API_KEY}&count=8&source.type=video&source.id=
11111&source.url=http://www.site.com/videos/214321562187.html`

function getData() {
    const cacheData = storageService.loadFromStorage('data')
    if (cacheData) {
        console.log('from cache', cacheData);
        return Promise.resolve(JSON.parse(cacheData))
    }
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', URL);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            // if (xhr.status === 200) {
            //     storageService.saveToStorage('data', xhr.responseText)
            //     resolve(JSON.parse(xhr.responseText))
            // }
            const resp = JSON.parse(xhr.responseText);
            if (resp.error) {
                reject(resp.error);
            } else {
                storageService.saveToStorage('data', xhr.responseText)
                resolve(resp);
            }
            // else {
            //     console.log('HTTP error', xhr.status, xhr.statusText)
            //     reject(xhr.statusText)
            // }
        }
        xhr.send();
    })
}

export const dataService = {
    getData
}

// export const dataService = {
//     getData
// }

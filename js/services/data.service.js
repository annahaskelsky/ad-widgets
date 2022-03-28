import { URL } from '../config.js'

function getData(onSuccess, onFailure, url = URL) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return
        if (xhr.status === 200) {
            console.log(xhr.responseText)
            onSuccess(JSON.parse(xhr.responseText).list)
        } else {
            onFailure(xhr.statusText)
        }
    }
    xhr.send()
}


// function getData() {
//     // const cacheData = storageService.loadFromStorage('data')
//     // if (cacheData) {
//     //     console.log('from cache', cacheData);
//     //     return Promise.resolve(JSON.parse(cacheData))
//     // }
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', URL);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== 4) return;
//             const resp = JSON.parse(xhr.responseText);
//             if (xhr.status === 200) {
//                 //     storageService.saveToStorage('data', xhr.responseText)
//                 //     resolve(JSON.parse(xhr.responseText))
//                 // }
//                 // storageService.saveToStorage('data', xhr.responseText)
//                 resolve(resp);
//             } else {
//                 reject(resp.error || 'Couldn\'t fetch data');
//             }
//             // if (resp.error) {
//             //     reject(resp.error);
//             // }
//             // else {
//             //     storageService.saveToStorage('data', xhr.responseText)
//             //     resolve(resp);
//             // }

//         }
//         xhr.send();
//     })
// }

export const dataService = {
    getData
}

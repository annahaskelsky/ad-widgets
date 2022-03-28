import { URL } from '../constants.js'

function getData(onSuccess, onFailure, url = URL) {
   const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return
        if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText).list
            onSuccess(res)
        } else {
            onFailure(xhr.statusText)
        }
    }
    xhr.send()
}

export const dataService = {
    getData
}

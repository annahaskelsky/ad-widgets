import { dataService } from './services/data.service.js'
// const { dataService } = require('./data.service')
// const { dataService } = require('../assets/img/default.png')


(function () {
    dataService.getData().then(data => {
        console.log(data);
        displayData(data.list);
    })
})();

function displayData(data) {
    console.log(data);
    let strHTML = ''
    data.forEach(item => {
        strHTML += `<a class="widget-wrapper-link" href=${item.url} target="_blank">
        <article class="widget">
        <div class="img-container">
        <img src=${item.thumbnail[0].url} onerror="this.src='https://picsum.photos/200'; this.onerror = null" />
        </div>
        <h4 class="article-title">${item.name}</h4>
        <span class="sponser-name">${item.branding} | Ad</span>
        </article>
        </a>`
    });
    const widgetContainer = document.getElementById('widgets')
    widgetContainer.innerHTML = strHTML
}

export const dataController = {
    displayData
}
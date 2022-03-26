import {dataService} from './data.service.js'

(function () {
    dataService.getData().then(data => {
        console.log(data);
        displayData(data.list);
    })
})();

function displayData(data) {
    let strHTML = ''
    data.forEach(item => {
        strHTML += `<a href=${item.url} target="_blank">
        <article class="widget">
        <div class="img-container">
        <img src=${item.thumbnail[0].url} alt="placeholder" />
        </div>
        <h4 class="article-title">${item.name}</h4>
        <span class="sponser-name">${item.branding} | Ad</span>
        </article>
        </a>`
    });
    const widgetContainer = document.getElementById('widgets')
    widgetContainer.innerHTML = strHTML
}
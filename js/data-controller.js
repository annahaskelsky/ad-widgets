import { dataService } from './services/data.service.js'

window.addEventListener('load', onInit)

function onInit() {
    dataService.getData(renderData, renderError)
}

function renderData(recommendations) {
    let strHTML = ''
    recommendations.forEach(item => {
        const { url, thumbnail, name, branding, origin } = item
        strHTML += `
            <a class="widget-wrapper-link" href=${url} target="_blank">
                <article class="widget">
                    <div class="img-container">
                        <img 
                            src=${thumbnail[0].url} 
                            onerror="this.src='https://picsum.photos/200'; this.onerror = null" 
                        />
                    </div>
                    <h4 class="article-title">${name}</h4>
                    <span class="sponser-name">${branding} ${(origin === 'sponsored') ? ' | Ad' : ''}</span>
                </article>
            </a>
        `
    })
    const widgetContainer = document.getElementById('widgets')
    widgetContainer.innerHTML = strHTML
}

function renderError() {
    const widgetContainer = document.getElementById('widgets')
    widgetContainer.innerHTML = '<h4>Something went wrong...</h4>'
}

export const dataController = {
    renderData,
    renderError
}

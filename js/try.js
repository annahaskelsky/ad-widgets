
(async function getData() {
    // const widgetContainer = document.getElementById('widgets')
    const res = await fetch("../data/res2.json")
    const a = await res.json()
    console.log(a);
    return a
    
    // let strHTML = ''
    // a.list.forEach(item => {
    //     strHTML += `<a href=${item.url} target="_blank">
    //     <article class="widget">
    //     <div class="img-container">
    //     <img src=${item.thumbnail[0].url} alt="placeholder" />
    //     </div>
    //     <h4 class="article-title">${item.name}</h4>
    //     <span class="sponser-name">${item.branding} | Ad</span>
    //     </article>
    //     </a>`
    // });
    // widgetContainer.innerHTML = strHTML
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

function add(a, b) {
    return a + b
}

module.exports = add




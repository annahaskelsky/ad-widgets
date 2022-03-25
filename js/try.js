
(async function getData() {
    const widgetContainer = document.getElementById('widgets')
    const res = await fetch("../data/res.json")
    const a = await res.json()
    console.log(a);
    let strHTML = ''
    a.list.forEach(item => {
        strHTML += `<article class="widget">
        <div class="img-container">
        <img src=${item.thumbnail[0].url} alt="placeholder" />
        </div>
        ${item.name}
        </article>`
    });
    widgetContainer.innerHTML = strHTML
})();




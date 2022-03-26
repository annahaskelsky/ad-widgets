const PUBLISHER_ID = 'taboola-templates'
const APP_TYPE = 'desktop'
const API_KEY = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4'

const URL = `http://api.taboola.com/1.0/json/${PUBLISHER_ID}/recommendations.get?
app.type=${APP_TYPE}&app.apikey=${API_KEY}&count=4&source.type=video&source.id=
11111&source.url=http://www.site.com/videos/214321562187.html`

// function
const xhr = new XMLHttpRequest();
xhr.open('GET', URL);

// request state change event
xhr.onreadystatechange = function () {

    // request completed?
    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
        // request successful - show response
        console.log(xhr.responseText);

    }
    else {
        // request error
        console.log('HTTP error', xhr.status, xhr.statusText);
    }
};

// start request
// xhr.send();


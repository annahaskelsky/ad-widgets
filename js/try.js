function getData() {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        // request state change event
        xhr.onreadystatechange = function () {
            // request completed?
            if (xhr.readyState !== 4) return;

            if (xhr.status === 200) {
                // request successful - show response
                // console.log(xhr.responseText);
                resolve(JSON.parse(xhr.responseText))
            }
            else {
                // request error
                console.log('HTTP error', xhr.status, xhr.statusText);
            }
        };

        xhr.open('GET', URL);
        // start request
        xhr.send();
    })
}

module.exports = {
    getData
}




async function getData() {
    const res = await fetch('../data/res2.json')
    const a = await res.json()
    return a
}

export const dataService = {
    getData
}
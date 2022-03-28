import { dataController } from '../data-controller'
import * as dataMock from '../data/res.json'

describe('main file testing', () => {

    beforeEach(() => {
        document.body.innerHTML = `<section id="widgets"></section>`
    })

    test('bad img urls fallback', () => {
        dataController.displayData(dataMock.default.list);
        const elImgs = document.querySelectorAll('#widgets img');
        setTimeout(() => {
            expect(elImgs[1].src).toBe('https://picsum.photos/200')
        }, 1000)
    })

})
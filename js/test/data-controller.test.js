import { dataController } from '../data-controller'
import * as dataMock from '../data/res.json'

describe('data controller test', () => {

    beforeEach(() => {
        document.body.innerHTML = `<section id="widgets"></section>`
    })

    test('bad img urls get fallback default url', () => {
        dataController.renderData(dataMock.default.list)
        const elImgs = document.querySelectorAll('#widgets img')
        setTimeout(() => {
            expect(elImgs[1].src).toBe('https://picsum.photos/200')
        }, 1000)
    })

    test('render 4 elements when got 4', () => {
        dataController.renderData(dataMock.default.list)
        const elWidgets = document.querySelectorAll('#widgets article')
        setTimeout(() => {
            expect(elWidgets.length).toBe(4)
        }, 1000)
    })

    test('render error message when renderError is called', () => {
        dataController.renderError()
        const elWidget = document.querySelector('#widgets')
        setTimeout(() => {
            expect(elWidget.innerHTML).toBe('<h4>Something went wrong...</h4>')
        }, 1000)
    })

})
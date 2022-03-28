import { jest } from '@jest/globals'
import { dataService } from '../services/data.service'

describe('Data service test', () => {
    test('Calls onSuccess when request is successful', (done) => {
        const onSuccess = jest.fn(() => {
            expect(onSuccess).toHaveBeenCalled()
            done()
        })
        dataService.getData(onSuccess)
    })

    test('Calls onError when request fails', (done) => {
        const onError = jest.fn(() => {
            expect(onError).toHaveBeenCalled()
            done()
        })
        dataService.getData(() => {}, onError, 'http://www.randomurl.com')
    })
})

// const createMockXHR = responseJSON => {
//     const mockXHR = {
//         open: jest.fn(),
//         send: jest.fn(),
//         readyState: 4,
//         status: 200,
//         responseText: JSON.stringify(responseJSON || {})
//     };
//     return mockXHR;
// };

// describe("API integration test suite", function () {
//     const oldXMLHttpRequest = window.XMLHttpRequest
//     let mockXHR = null

//     beforeEach(() => {
//         mockXHR = createMockXHR()
//         window.XMLHttpRequest = jest.fn(() => mockXHR)
//     })

//     afterEach(() => {
//         window.XMLHttpRequest = oldXMLHttpRequest
//     })

//     test("Should retrieve the data object from the server when calling getData method", function (done) {
//         const reqPromise = dataService.getData()
//         mockXHR.responseText = JSON.stringify(dataMock)
//         mockXHR.onreadystatechange()
//         reqPromise.then(posts => {
//             expect(posts.default.list.length).toBe(4)
//             expect(posts.default.list[0].name).toBe("Top Chef 2014 : des nouvelles règles absurdes - Elle à Table")
//             expect(posts.default.list[1].type).toBe("video")
//             done()
//         })
//     })

//     test("Should catch error when status is not 200", function (done) {
//         mockXHR.status = 0
//         const reqPromise = dataService.getData()
//         mockXHR.onreadystatechange()
//         reqPromise.then(posts => {
//             console.log(posts)
//         }).catch(err => {
//             expect(err).toBe('Couldn\'t fetch data')
//             done()
//         })
//     })
// })
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
        dataService.getData(() => { }, onError, 'http://www.randomurl.com')
    })
})

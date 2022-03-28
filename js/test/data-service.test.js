// const { getData } = require('../data.service')
// const dataMock = require('../../data/res.json')
import { jest } from '@jest/globals'
import { dataService } from '../services/data.service'
import * as dataMock from '../data/res.json'
// test('fetched data', () => {
//     expect(getData()).toBe(dataMock)
// })
// test('add 1 and 2 to equal 3', () => {
//     expect(add(1, 2)).toBe(3)
// })

const createMockXHR = responseJSON => {
    const mockXHR = {
        open: jest.fn(),
        send: jest.fn(),
        readyState: 4,
        status: 200,
        responseText: JSON.stringify(responseJSON || {})
    };
    return mockXHR;
};

describe("API integration test suite", function () {
    const oldXMLHttpRequest = window.XMLHttpRequest;
    let mockXHR = null;

    beforeEach(() => {
        mockXHR = createMockXHR();
        window.XMLHttpRequest = jest.fn(() => mockXHR);
    });

    afterEach(() => {
        window.XMLHttpRequest = oldXMLHttpRequest;
    });

    test("Should retrieve the list of posts from the server when calling getPosts method", function (done) {
        const reqPromise = dataService.getData();
        console.log(reqPromise);
        mockXHR.responseText = JSON.stringify(dataMock);
        mockXHR.onreadystatechange();
        reqPromise.then(posts => {
            console.log(posts.default.list);
            expect(posts.default.list.length).toBe(4);
            expect(posts.default.list[0].name).toBe("Top Chef 2014 : des nouvelles règles absurdes - Elle à Table");
            expect(posts.default.list[1].type).toBe("video");
            done();
        });
    });
});

// const oldXMLHttpRequest = window.XMLHttpRequest;
// window.XMLHttpRequest = jest.fn(() => mockXHR);

// describe("API integration test suite", function () {
//     test("Should retrieve the list of posts from the server when calling getPosts method", function (done) {
//         const reqPromise = getData();

//         mockXHR.onreadystatechange();
//         reqPromise.then(posts => {
//             console.log(posts);
//             expect(posts.length).toBe(2);
//             expect(posts[0].title).toBe("test post");
//             expect(posts[1].title).toBe("second test post");
//             done();
//         });
//     });
// });
let getCars = require('./async');
let axios = require('axios')
let MockAdapter = require('axios-mock-adapter')
let mock = new MockAdapter(axios)

mock.onGet('/users').reply(200, {
    user: [
        {id: 2, name: 'Nancy'}
    ]
})
test('mock adapter test', () => {
    axios.get('/users').then(res => {
        console.log(res)
    })
})


// test('aync test', () => {
//     return getCars().then(res => {
//         console.log(res)
//         expect(res.length).toBe(20)
//     })
// })
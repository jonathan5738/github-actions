const { app } = require('../app') 
const request = require('supertest') 

describe('testing end points', () => {
    test('should return 200 status code if request is successfull', async () => {
        await request(app).get('/data').expect(200)
    })
    test('should return data if request successfull', async () => {
        const response = await request(app).get('/data')
        expect(response.body).toMatchObject({username: 'jonathan123'})
    })
})
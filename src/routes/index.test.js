const server = require('../app')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Service', () => {
  it('works and is accessible', async () => {
    await requestWithSupertest.get('/').expect('carty-service works!')
  })
})

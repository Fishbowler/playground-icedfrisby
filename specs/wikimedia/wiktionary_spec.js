const frisby = require('icedfrisby')
const Joi = require('joi')

describe('Wiktionary', ()=>{
    it('should define a first word @important', ()=>{
        frisby.create('Define the word "purple"')
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/purple')
            .expectStatus(200)
        .toss()
    })

    it('should define a second word', ()=>{
        frisby.create('Define the word "orange"')
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/orange')
            .expectStatus(200)
        .toss()
    })

    it('should define a third word @important', ()=>{
        frisby.create('Define the word "important"')
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/important')
            .expectStatus(200)
        .toss()
    })
})